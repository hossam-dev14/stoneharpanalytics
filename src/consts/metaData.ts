
export const metaTitle = "Stone Harp Analytics";
export const metaDesc = "Stone Harp Analytics - Data Science and Analytics Consultancy";

export const ogSize = {
  width: 1600,
  height: 800,
};

export const ogImageProps = {
  ...ogSize,
  alt: "Stone Harp Analytics",
  contentType: "image/png",
};

export const defaultOpenGraph = {
  siteName: "Stone Harp Analytics",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
  locale: "en_GB",
  type: "website",
};

export const defaultTwitter = {
  card: "summary_large_image",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
};
