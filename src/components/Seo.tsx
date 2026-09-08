import { Helmet } from "react-helmet-async";
import { content } from "../content";

export default function Seo() {
  const { name, tagline, metaDescription, keywords, siteUrl, address, geo, phone, priceRange, openingHoursSchema, rating, social } =
    content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name,
        url: siteUrl,
      },
      {
        "@type": "Restaurant",
        name,
        image: `${siteUrl}gallery/taula-de-xuan-bocadillo-jamon.jpg`,
        url: siteUrl,
        telephone: phone,
        priceRange,
        description: metaDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          postalCode: address.postalCode,
          addressCountry: address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.lat,
          longitude: geo.lng,
        },
        servesCuisine: content.cuisine,
        openingHoursSpecification: openingHoursSchema.map((block) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: block.dayOfWeek,
          opens: block.opens,
          closes: block.closes,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: rating.value,
          reviewCount: rating.count,
        },
        sameAs: [social.instagram].filter(Boolean),
        acceptsReservations: `https://wa.me/${content.whatsappNumber}`,
        keywords: keywords.join(", "),
      },
    ],
  };

  return (
    <Helmet>
      <html lang="es" />
      <title>{`${name} — ${tagline}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="restaurant.restaurant" />
      <meta property="og:title" content={`${name} — ${tagline}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:image"
        content={`${siteUrl}gallery/taula-de-xuan-bocadillo-jamon.jpg`}
      />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${name} — ${tagline}`} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
