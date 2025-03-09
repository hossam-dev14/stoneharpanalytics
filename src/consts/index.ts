
import { fromJSON } from "postcss";
import { email, linkedin } from "./socials";

// export animationVariants
export * from "./animationVariants";

// export sectionsData
export * from "./sectionsData";

// export metadata
export * from "./metaData";

// export experticeData
export * from "./expertiseData";

export { bgImgs } from './bgImages';

// export sliderImages
export { sliderImages } from "./sliderImages";

// export socail 
export const socials = [
  linkedin,
  email,
];

// export navLinks
export const navLinks = [
  {
    titel: "Home",
    url: "/"
  },
  {
    titel: "About us",
    url: "/about"
  }, {
    titel: "Services",
    url: "/services"
  },
  {
    titel: "Contact",
    url: "/contact"
  },
]

// export legalLinks
export const legalLinks = [
  {
    titel: "Privacy Policy",
    url: "/privacy-policy"
  },
  {
    titel: "Terms of Service",
    url: "/terms-of-service"
  }
]


// Current year for footer
export const currentYear = new Date().getFullYear();

