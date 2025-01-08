import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "OUR FACUTIES",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "CONTENT AREA",
    url: "/contentarea",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Login",
    url: "/login",
    onlyMobile: true,
  },
  
  {
    id: "6",
    title: "DIH Chatbot",
    url: "dihchatbot",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Centralized Resource Sharing",
  "Cloud Storage Integration",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "ClassBridge",
    text: "Instead of posting the same message in multiple groups, it will share just one group where everyone can access it. This helps keep our discussions focused and prevents unnecessary repetition.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "User Authentication",
    text: "Users must authenticate via username and password, with teachers having the exclusive ability to add new users",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Real-Time Chat",
    text: "Enables real-time communication between teachers and students",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "The platform features a clean, intuitive interface that simplifies navigation for both teachers and students. Users can easily upload documents or start conversations, making collaboration effortless.";

export const collabContent = [
  {
    id: "0",
    title: "User-Friendly Interface",
    text: collabText,
  },
  {
    id: "1",
    title: "Secure Role-Based Access",
  },
  {
    id: "2",
    title: "Real-Time Chat",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "HEAD OF THE DEPARTMENT",
    description: "DR.S.Artheeswari",
    //price: "2",
    features: [
      //"An AI chatbot that can understand your queries",
      //"Personalized recommendations based on your preferences",
      //"Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "2nd YEAR BATCH COORDINATOR",
    description: "Mrs.G.Vasanthi",
    //price: "9.99",
    features: [
      //"An advanced AI chatbot that can understand complex queries",
      //"An analytics dashboard to track your conversations",
      //"Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "3rd YEAR BATCH COORDINATOR",
    description: "Mrs.M.Nithya",
    price: null,
    features: [
      //"An AI chatbot that can understand your queries",
      //"Personalized recommendations based on your preferences",
      //"Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Instead of posting the same message in multiple groups, it will share just one group where everyone can access it. This helps keep our discussions focused and prevents unnecessary repetition.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text:"It share information  here to keep everything organized and accessible,Each day, you can tweak it based on what’s most  relevant or any changes in group activity For all news and updates, share here to ensure everyone stays informed",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "a seamless platform where teachers and students can connect from anywhere. By allowing them to upload and access educational materials such as notes, journals, circulars, and reference books, it fosters a shared digital space for learning. With real-time chat functionality, users can engage in discussions, ask questions, and collaborate remotely.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: " Whether in the classroom or at home, your platform breaks down geographical barriers, enabling continuous interaction and learning anytime, anywhere. ",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
