import { IWorkShop } from "./types";

export const workshopsMockData: Record<string, IWorkShop[]> = {
  day1: [
    {
      date: "13 Jan 2025",
      time: "10:00 AM",
      imageAlt: "Workshop 1",
      imageSrc: "/workshops/Metacamp.png",
      title: "Web 3: Summarised",
      company: "Metacamp",
      description: "Here is WEB 3: SUMMARISED, from DeFi protocols to Crypto to NFTs and everything in between, CONDENSED in a physical workshop!",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdNwHG5RAWMmyAO5AXEbPGSn0wUCqfAVRnWOp6rCeg0o7jErA/viewform",
      speakers: ["Jonas Chen, Co-Founder"],
    },
    {
      date: "13 Jan 2025",
      time: "2:00 PM",
      imageAlt: "Workshop 2",
      imageSrc: "/workshops/Nvdia.png",
      secondImageSrc: "/workshops/EmbeddedLLM.svg",
      title: "Creating Applications Using LLM, Vision & Text Models",
      company: "Nvidia X EmbeddedLLM",
      description: "Learn to build AI-powered apps in mere hours!",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1AJxMFKfvM1BGgF7WF9fS588SSsnfNnRMQRcSxNyc3oSIOA/viewform",
      speakers: ["Rachael Tan, Startup & Developer Growth Manager, APS", "Muhammad Usman, AI Integration Lead"],
    },
  ],
  day2: [
    {
      date: "14 Jan 2025",
      time: "1:00 PM",
      imageAlt: "CitiBank",
      imageSrc: "/workshops/CitiBank.png",
      title: "State of Blockchain use cases in banks",
      company: "CitiBank",
      description: "Details to be announced",
      registrationLink: "https://forms.gle/UYu5F6t5BniRXRqr8",
      speakers: ["Choo Haiping, Digital Assets"],
    },
  ],
  day3: [
    {
      date: "15 Jan 2025",
      time: "2:00 PM",
      imageAlt: "StashAway",
      imageSrc: "/workshops/StashAway.png",
      title: "From idea to impact: Building a Fintech Business",
      company: "StashAway",
      description: "Details to be announced",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdqqeBMqaq3l2nQA8sy2XgK5hkYdk3FTzBzwLCt8LydH-lsqA/viewform",
      speakers: ["Alex Cringle, Chief Product Officer"],
    },
    {
      date: "15 Jan 2025",
      time: "3:45 PM",
      imageAlt: "Talos",
      imageSrc: "/workshops/Talos.png",
      title: "Careers: Transitioning from Traditional Finance into the World of Digital Assets in Blockchain",
      company: "Talos",
      description: "Details to be announced",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdgbLcbIuHNNREqgPbmU__pX4k_-srfSZhBExnjG7ryb0dQXQ/viewform",
      speakers: ["Pamela Lee, Head of Sales"],
    },
  ],
  day4: [
    {
      date: "16 Jan 2025",
      time: "5:00 PM",
      imageAlt: "Talos",
      imageSrc: "/workshops/RIMAS.png",
      title: "AI for Humanity",
      company: "RIMAS",
      description: "Details to be announced",
      registrationLink: "https://forms.gle/sGq2mXhU1BD6CKSV6",
      speakers: ["Andeed Ma, Partner, AI International Institute (AIII) and President"],
    },
  ]
};
