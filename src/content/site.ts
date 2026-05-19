import portraitImage from "../assets/abel-osorio-portrait.jpg";
import adidasShopImage from "../assets/projects/adidas-shop.svg";
import boxContentSdkImage from "../assets/projects/box-content-sdk.svg";
import boxPreviewSdkImage from "../assets/projects/box-preview-sdk.svg";
import cancergraphImage from "../assets/projects/cancergraph.svg";
import cinnamonVideoImage from "../assets/projects/cinnamon-video.svg";
import harborImage from "../assets/projects/harbor.svg";
import myHighlightsImage from "../assets/projects/myhighlights.svg";
import rippleImage from "../assets/projects/ripple.svg";
import sbliveSportsImage from "../assets/projects/sblive-sports.svg";
import teampaygoImage from "../assets/projects/teampaygo.svg";

export const site = {
  name: "Abel Osorio",
  domain: "osorioabel.dev",
  url: "https://osorioabel.dev",
  email: "osorioabel@gmail.com",
  location: "Zaragoza, Spain",
  formspreeEndpoint: "https://formspree.io/f/xaqnvgvr",
  description:
    "Senior Software Developer with 10+ years designing and scaling high-performance iOS applications for global products across 50 countries and 24 languages.",
  portraitImage,
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/osorioabel", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/osorioabel/", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/osorioabel", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/osorioabel/", icon: "instagram" },
] as const;

export const services = [
  {
    title: "Scalable iOS Development",
    description:
      "Build and evolve Swift, SwiftUI, UIKit, and Objective-C applications with strong architecture, performance, and release discipline.",
    icon: "app",
  },
  {
    title: "Architecture & Quality",
    description:
      "Improve modularization, testability, design patterns, technical debt, CI/CD, and developer experience for iOS teams.",
    icon: "backend",
  },
  {
    title: "Technical Leadership",
    description:
      "Lead delivery, mentor developers, collaborate with clients and stakeholders, and turn complex product requirements into reliable mobile experiences.",
    icon: "web",
  },
] as const;

export const projects = [
  {
    title: "adidas: Shop Shoes & Clothing",
    tag: "SwiftUI + TCA",
    period: "2022 - Present",
    description:
      "Led the mobile Checkout journey across Wishlist, Shopping Bag, and Checkout, including migration from legacy SFCC to an in-house e-commerce platform.",
    image: adidasShopImage,
    href: "https://apps.apple.com/us/app/adidas-shop-shoes-clothing/id1266591536",
  },
  {
    title: "MyHighlights",
    tag: "CTO + AI",
    period: "2023 - 2024",
    description:
      "Drove technical vision for an AI-powered sports video app that identifies key moments and creates personalized highlights.",
    image: myHighlightsImage,
    href: "https://myhighlights.eu/home",
  },
  {
    title: "Teampaygo",
    tag: "Fintech",
    period: "2020 - 2022",
    description:
      "Led the iOS application for real-time expense requests, approvals, tracking, and Apple Wallet integrations.",
    image: teampaygoImage,
    href: "https://apps.apple.com/cz/app/teampaygo/id1497320729",
  },
  {
    title: "Harbor: Home Safety Made Easy",
    tag: "StoreKit",
    period: "2021",
    description:
      "Built subscription flows for a disaster preparedness app backed by 25Madison, acquired by Citizen, and featured by Apple as App of the Day.",
    image: harborImage,
    href: "https://www.strv.com/our-work/harbor",
  },
  {
    title: "Cinnamon Video",
    tag: "AVFoundation",
    period: "2020",
    description:
      "Built architecture and video editing tools for a short-form social video app, including stitching, trimming, effects, and playback workflows.",
    image: cinnamonVideoImage,
    href: "https://www.strv.com/our-work/cinnamon",
  },
  {
    title: "Box iOS Preview SDK V3",
    tag: "PDFKit",
    period: "2019",
    description:
      "Led the Swift rewrite of the Preview SDK for displaying PDFs, images, and other file types with a scalable SDK architecture.",
    image: boxPreviewSdkImage,
    href: "https://github.com/box/box-ios-preview-sdk",
  },
  {
    title: "Box iOS Content SDK V3",
    tag: "Box API",
    period: "2019",
    description:
      "Led the Swift rewrite of the Content SDK to provide a modern interface for integrating with the Box API.",
    image: boxContentSdkImage,
    href: "https://github.com/box/box-ios-sdk",
  },
  {
    title: "Ripple: The Professional Network",
    tag: "CoreLocation",
    period: "2018",
    description:
      "Built proximity-based networking features for professional discovery, event engagement, social integrations, and real-time notifications.",
    image: rippleImage,
    href: "https://rippleapp.com/",
  },
  {
    title: "SBLive Sports",
    tag: "Swift Migration",
    period: "2016 - 2018",
    description:
      "Redeveloped sports app features for live scores, stats, and game updates while migrating core code from Objective-C to Swift.",
    image: sbliveSportsImage,
    href: "https://apps.apple.com/lr/app/sblive-sports/id1550337702",
  },
  {
    title: "Cancergraph",
    tag: "Healthcare",
    period: "2016",
    description:
      "Built symptom tracking, secure photo storage, and graphical reports to help cancer patients communicate health data to doctors.",
    image: cancergraphImage,
    href: "https://itunes.apple.com/us/app/cancergraph/id1114343314?mt=8",
  },
] as const;

export const experience = [
  {
    company: "adidas",
    role: "Senior iOS Developer",
    location: "Zaragoza, Spain",
    period: "March 2022 - Present",
    tags: ["Swift", "SwiftUI", "TCA", "Tuist", "Snapshot Testing"],
    highlights: [
      "Owns the lower funnel experience on the flagship app, from Shopping Bag through Checkout.",
      "Led checkout migration from legacy SFCC to an in-house e-commerce platform to improve scalability and reduce overhead costs.",
      "Improved build stability and speed by 15% while reducing reliance on third-party libraries by 30%.",
      "Implemented a redesigned Order Detail feature to simplify tracking, returns, and exchanges.",
      "Mentors and supports an iOS team of 30+ developers while improving architecture, testability, and developer experience.",
    ],
  },
  {
    company: "STRV",
    role: "Senior Developer & Lead iOS Developer",
    location: "Prague, Czech Republic",
    period: "February 2018 - February 2022",
    tags: ["Swift", "RxSwift", "StoreKit", "AVFoundation", "PDFKit"],
    highlights: [
      "Delivered iOS applications for Silicon Valley startups across social media, fintech, safety, networking, and SDK products.",
      "Designed scalable architectures to improve performance, testability, and maintainability across client projects.",
      "Worked directly with clients to define timelines, budgets, and delivery scope.",
      "Recruited, mentored, and onboarded iOS developers through workshops, code reviews, and knowledge-sharing initiatives.",
    ],
  },
  {
    company: "Kogi Mobile",
    role: "iOS Developer & Lead Developer",
    location: "Medellin, Colombia",
    period: "January 2016 - January 2018",
    tags: ["Swift", "Objective-C", "Architecture", "Team Leadership"],
    highlights: [
      "Promoted from iOS Developer to Lead Developer within one year.",
      "Led iOS applications across healthcare, retail, and sports products.",
      "Improved workflows, architecture, testing practices, and long-term maintainability.",
      "Mentored junior developers while collaborating with stakeholders on timelines, deliverables, and estimates.",
    ],
  },
  {
    company: "Educatablet, Witec Group, Softecca",
    role: "Web and iOS Developer",
    location: "Caracas, Venezuela",
    period: "February 2013 - January 2016",
    tags: ["iOS", "Web", "Education", "Healthcare", "E-commerce"],
    highlights: [
      "Contributed to app development projects across education, healthcare, and e-commerce.",
      "Built early professional experience across web and native iOS development.",
    ],
  },
] as const;

export const education = [
  {
    title: "Universidad Catolica Andres Bello",
    subtitle: "Computer Engineering",
    period: "March 2016",
  },
  {
    title: "Professional development",
    subtitle: "Swift Concurrency, Clean Architecture, TDD, modularization, CI/CD, and iOS team practices",
    period: "Ongoing",
  },
] as const;

export const certifications = [
  {
    title: "Swift Concurrency Course",
    issuer: "SwiftLee",
    issued: "September 2025",
  },
  {
    title: "Essential Developer Academy By Caio & Mike",
    issuer: "Essential Developer Academy by Caio & Mike",
    issued: "February 2022",
  },
] as const;

export const skills = [
  { label: "Swift / Objective-C", level: 96 },
  { label: "iOS Architecture", level: 94 },
  { label: "SwiftUI / UIKit", level: 92 },
  { label: "Testing & Quality", level: 88 },
  { label: "CI/CD & Automation", level: 84 },
  { label: "Technical Leadership", level: 86 },
] as const;

export const languages = [
  { label: "Spanish", level: "Native" },
  { label: "English", level: "Full professional proficiency" },
  { label: "Czech", level: "Beginner" },
  { label: "Russian", level: "Beginner" },
] as const;
