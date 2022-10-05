import dashboard_icon from "../assets/dashboard_icon.svg";
import MkoloGrey from "../assets/MkoloGrey.svg";
import earlypay from "../assets/earlypay.svg";
import paybills_icon from "../assets/paybills_icon.svg";
import debitcards from "../assets/debitcards_icon.svg";
import profilepage_icon from "../assets/profilepage_icon.svg";
import settings_icon from "../assets/settings_icon.svg";
import netflix from "../assets/netflix.svg";
import receive_icon from "../assets/receive_icon.svg";
import sent_icon from "../assets/sent_icon.svg";
import pending_icon from "../assets/pending_icon.svg";

// Sidebar

export const sideMenubar = [
  {
    id: 1,
    image: dashboard_icon,
    title: "Dashboard",
    link: "./",
  },
  {
    id: 2,
    image: MkoloGrey,
    title: "Mkolo",
    link: "./mkolo",
  },
  {
    id: 3,
    image: earlypay,
    title: "EarlyPay",
    link: "./earlypay",
  },
  {
    id: 4,
    image: paybills_icon,
    title: "Pay Bills",
    link: "./paybills",
  },
  {
    id: 5,
    image: debitcards,
    title: "Debit Cards",
    link: "./debitcards",
  },
  {
    id: 6,
    image: profilepage_icon,
    title: "Profile",
    link: "./profilepage",
  },
  {
    id: 7,
    image: settings_icon,
    title: "Settings",
    link: "./settings",
  },
];

// Cards array

export const cards = [
  {
    id: 1,
    text: "Available Balance",
    tier: true,
    interest: false,
  },
  {
    id: 2,
    text: "Car Purchase Plan",
    css: "style1",
    tier: false,
    interest: true,
  },
  {
    id: 3,
    text: "Birthday Plan",
    css: "style2",
    tier: false,
    interest: true,
  },
];

// Today listing

export const todayList = [
  {
    id: 1,
    text: "Paid for",
    brand: "Netflix",
    amounts: "-3,000.00",
    icons: netflix,
  },
  {
    id: 2,
    text: "Received from",
    brand: "Ayoola Adeniji",
    amounts: "+3,000.00",
    icons: receive_icon,
  },
  {
    id: 3,
    text: "Sent Money with Mtag",
    brand: "Car Repair",
    amounts: "-3,000.00",
    icons: sent_icon,
  },
];

// Sept18  listing

export const septList = [
  {
    id: 1,
    text: "Paid for",
    brand: "Netflix",
    amounts: "-3,000.00",
    icons: netflix,
  },
  {
    id: 2,
    text: "Payme Request to Adeniji Ayoola",
    brand: "Status:",
    span: "Pending",
    amounts: "+3,000.00",
    icons: pending_icon,
  },
  {
    id: 3,
    text: "Tranfer with Mtag",
    brand: "Car Repair",
    amounts: "-3,000.00",
    icons: sent_icon,
  },
  {
    id: 4,
    text: "Paid for",
    brand: "Netflix",
    amounts: "-3,000.00",
    icons: netflix,
  },
  {
    id: 5,
    text: "Recieved  From",
    brand: "Ayoola Adeniji",
    amounts: "+3,000.00",
    icons: receive_icon,
  },
];
