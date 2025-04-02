export const navItems = [
  { name: "Home", link: "#main" },
  { name: "Contact", link: "#contact" },
  { name: "Certificates", link: "/cert" },
  { name: "Birthdays", link: "/birthdays" },
];

export interface birthday {
  name: string;
  date: number;
  month: number;
  letter: string;
  title: string;
  img: string;
}

// starts from 00-00
export const birthdays: birthday[] = [
  {
    name: "Abhay Mishra",
    date: 26,
    letter:
      "Oye Abhay bhai, janamdin ki badhai ho! Tumhare birthday par itni khushi ho ki dance floor pe chaaro taraf sirf tumhari hi charcha ho. Agli baar party mein cake ke saath kuch extra masti bhi honi chahiye, boss!",
    title: "Birthday Masti for Abhay Bhai",
    img: "/birthdays/abhay.jpg",
    month: 1,
  },
  {
    name: "Aditi Agrawal",
    date: 26,
    letter:
      "Hello gorgeous Aditi, aapka birthday aapke jitna hi khoobsurat ho! Aapki smile dekh kar toh din hi ban jata hai, kya karein. Is saal aapke liye kuch khaas surprise ho sakta hai, just wait and watch!",
    title: "Special Day for Special Aditi",
    img: "/birthdays/aditia.jpg",
    month: 3,
  },
  {
    name: "Aditi walavalkar",
    date: 10,
    letter: "Love u didi 💙",
    title: "Aditi - Sabse Pyaari Birthday Girl",
    img: "/birthdays/aditiw.jpg",
    month: 1,
  },
  {
    name: "Anushka Burge",
    date: 22,
    letter:
      "Anushka ji, aapke birthday pe itni khubsoorti se aapko dekhta hoon ki dil kehta hai, ruk jao! Kaash main aapke birthday pe wahan hota, hum cake ke saath selfie lete. Aapka har din birthday jaisa special ho!",
    title: "Anushka - Mere Dil ki Dhadkan",
    img: "/birthdays/anushka.jpg",
    month: 11,
  },
  {
    name: "Avishka Shreewastav",
    date: 17,
    letter:
      "Avishka ji, aapko dekh kar toh dil garden garden ho jata hai! Birthday pe aapka style dekh kar sab log deewane ho jayenge. Kya main aapko dinner pe le jaaun? Birthday gift lene ka mauka toh do!",
    title: "Avishka - Beauty Queen ka Birthday",
    img: "/birthdays/avishka.jpg",
    month: 2,
  },
  {
    name: "Harshita Mantri",
    date: 29,
    letter:
      "Hello Harshita ji, aapke birthday pe bas yahi kehna chahta hoon ki aapki smile dekh kar din bhi romantic ho jata hai! Kaash main aapke birthday pe cake khilata. Agle saal zaroor milenge, promise!",
    title: "Harshita - Birthday Girl se Pyaar",
    img: "/birthdays/harshita.jpg",
    month: 7,
  },
  {
    name: "Neha Mundhara",
    date: 4,
    letter:
      "Neha ji, aapke birthday pe yeh kehna chahta hoon ki aapse sundar koi nahi is duniya mein! Ek baar dinner date pe chaloge? Promise, wapas late nahi karunga. Aapke saath time spend karna toh sapna hai mera!",
    title: "Neha - Janamdin Mubarak Ho Sweetheart",
    img: "/birthdays/neha.jpg",
    month: 9,
  },
  {
    name: "Prakarsh Deo",
    date: 27,
    letter:
      "Arre Prakarsh bhai, happy wala birthday! Tera birthday hai toh party toh banti hai boss! Cake cut karte waqt haath mat kaanpna, nahi toh video viral kar dunga social media pe!",
    title: "Prakarsh ka Dhamakedar Birthday",
    img: "",
    month: 5,
  },
  {
    name: "Pratik Goyal",
    date: 17,
    letter:
      "Oye Pratik, birthday pe itna style mat marna ki log tujhe hi cake samajh lein! Tere janamdin pe itni masti karenge ki agla birthday tak yaad rahega. Party mein DJ wala scene on karna mat bhoolna!",
    title: "Pratik - Birthday Rockstar",
    img: "/birthdays/pratik.jpg",
    month: 7,
  },
  {
    name: "Shreya walavalkar",
    date: 6,
    letter: "Happy birthday Aii!",
    title: "Shreya - Dil ki Raani ka Birthday",
    img: "/birthdays/shreya.jpg",
    month: 2,
  },
  {
    name: "Shripad Walavalkar",
    date: 2,
    letter: "Happy birthday!",
    title: "Shripad ka Mazedaar Birthday",
    img: "/birthdays/shripad.jpg",
    month: 11,
  },
  {
    name: "Sristry Thakur",
    date: 12,
    letter:
      "Sristry ji, aapke birthday pe bas yahi kehna chahta hoon ki aapke bina duniya adhuri hai! Aapse milne ka ek mauka de do, birthday gift special hoga. Aapki aankhein stars se bhi chamakdar hain!",
    title: "Sristry - Birthday Queen",
    img: "/birthdays/sristy.jpg",
    month: 1,
  },
  {
    name: "Ansu Rejit",
    date: 14,
    letter:
      "Ansu ji, aapke birthday pe bas itna kehna chahta hoon ki aap duniya ki sabse khoobsurat ladki ho! Coffee date pe chalein kya? Promise boring nahi hoga! Aapke saath time spend karna mere liye sabse special hoga.",
    title: "Ansu - Meri Favorite Birthday Girl",
    img: "",
    month: 1,
  },
  {
    name: "Chahat Dev",
    date: 23,
    letter:
      "Hello Chahat ji, aapke birthday pe yeh kehna chahta hoon ki aapse khoobsurat koi nahi! Ek baar dinner date pe chaloge? Kaash main aapke birthday pe aapke saath hota, dil garden garden ho jata!",
    title: "Chahat - Sabse Pyaari Birthday Girl",
    img: "/birthdays/chahat.jpg",
    month: 4,
  },
  {
    name: "Jyoti Burge",
    date: 24,
    letter: "Jyoti Kaki happy birthday",
    title: "Jyoti - Birthday par Chamakti Sitara",
    img: "",
    month: 4,
  },
  {
    name: "Pranav Samant",
    date: 25,
    letter:
      "Arre Pranav bhai, janamdin mubarak ho! Party mein cake face pe lagane wala scene mat karna, photo kheech lunga! Tere birthday pe itni masti karenge ki neighbors complaint karenge, ready rehna!",
    title: "Pranav - Birthday pe Dhamaal",
    img: "",
    month: 5,
  },
  {
    name: "Yogita Samant",
    date: 3,
    letter: "Yogita mavshi happy birthday!",
    title: "Yogita mavshi",
    img: "/birthdays/yogita.jpg",
    month: 6,
  },
  {
    name: "Sahil Gupta",
    date: 25,
    letter:
      "Oye Sahil bhai, birthday pe itna swag mat marna ki log bhool jayein party kisne di hai! Cake cutting time pe dramatic pose dena mat bhoolna, Instagram pe viral hoga pakka! Party mein DJ wala scene on karna!",
    title: "Sahil - Birthday ka Superstar",
    img: "/birthdays/sahil.jpg",
    month: 9,
  },
  {
    name: "Siddhi Parker",
    date: 19,
    letter: "Happy birthday tai!",
    title: "Siddhi",
    img: "/birthdays/siddhi.jpg",
    month: 3,
  },
  {
    name: "Simon Chodhary",
    date: 14,
    letter:
      "Simon bhai, tera birthday Valentine's Day pe? Kya planning hai boss! Cake kaatne ke baad girlfriends ko call karna mat bhoolna! Party mein dance floor pe apni secret moves dikha dena, viral ho jayega!",
    title: "Simon - Valentine's Birthday Boy",
    img: "",
    month: 2,
  },
];

export type Card = {
  id: number;
  orgUrl: string;
  orgName: string;
  path: string;
  timeAdded: string;
  size: number;
};

export const certificates: Card[] = [
  {
    id: 0,
    orgUrl: "https://www.harvard.edu",
    orgName: "Harvard",
    path: "/cert/cs50.jpg",
    timeAdded: "7 July 2024",
    size: 0,
  },
  {
    id: 1,
    orgUrl: "https://www.harvard.edu",
    orgName: "Harvard",
    path: "/cert/CS50P.png",
    timeAdded: "18 Jan 2025",
    size: 0,
  },
  {
    id: 2,
    orgUrl:
      "https://learn.opswatacademy.com/certifications/f904148a-9764-11ed-98f7-02dd896aace5",
    orgName: "opswatacademy",
    path: "/cert/cip.png",
    timeAdded: "24 October 2024",
    size: 0,
  },
  {
    id: 3,
    orgUrl: "https://moonshot.scaler.com/s/sl/UJmWATrlng",
    orgName: "Scaler",
    path: "/cert/s.png",
    timeAdded: "28 November 2024",
    size: 0,
  },
];

export const socialMedia = [
  {
    id: 1,
    href: "https://github.com/ridheshcybe",
    img: "/git.svg",
  },
  {
    id: 2,
    href: "https://instagram.com/ridheshcybe",
    img: "/insta.svg",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/ridhesh-w-322165333/",
    img: "/link.svg",
  },
];
