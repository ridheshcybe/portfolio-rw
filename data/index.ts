export const navItems = [
  { name: "Home", link: "#main" },
  { name: 'Certificates', link: '#cert' },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
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
    orgUrl: "https://www.harvard.edu", orgName: "Harvard",
    path: "/cert/cs50.jpg", timeAdded: "7 July 2024",
    size: 0,
  },
  {
    id: 1,
    orgUrl: "https://learn.opswatacademy.com/certifications/f904148a-9764-11ed-98f7-02dd896aace5",
    orgName: "opswatacademy", path: "/cert/cip.png",
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
  }
]

export const socialMedia = [
  {
    id: 1,
    href: 'https://github.com/ridheshcybe',
    img: "/git.svg",
  },
  {
    id: 2,
    href: 'https://instagram.com/ridheshcybe',
    img: "/insta.svg",
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/in/ridhesh-w-322165333/',
    img: "/link.svg",
  },
];
