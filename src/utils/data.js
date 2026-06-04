import watchImg from "../assets/watch.png";
import Img4 from "../assets/4.png";
import laptopImg from "../assets/laptop.png";
import goproImg from "../assets/camera.png";
import headphoneImg from "../assets/headset.png";
import canonImg from "../assets/phone.png";
import chairImg from "../assets/chair.png";
import sofaImg from "../assets/sofa.png";
import dishesImg from "../assets/dishes.png";
import potImg from "../assets/pot.png";
import mixerImg from "../assets/mixer.png";
import blenderImg from "../assets/blender.png";
import holderImg from "../assets/holder.png";
import plantImg from "../assets/plant.png";
import kettleImg from "../assets/cattle.png";
import headsetImg from "../assets/headset2.png";
import tabletImg from "../assets/iphone.png";
import phoneImg from "../assets/phoneImage.png";
import tshirtImg from "../assets/tshirt.png";
import jacketImg from "../assets/jacket.png";
import suitImg from "../assets/suit.png";
import walletImg from "../assets/wallet.png";
import bagImg from "../assets/bag.png";
import shortsImg from "../assets/shorts.png";

import hubImg from "../assets/bg1.png";
import customImg from "../assets/bg2.png";
import shippingImg from "../assets/bg3.png";
import monitorImg from "../assets/bg4.png";

// --- Flags Images Imports ---
import aeFlag from "../assets/ae.png";
import auFlag from "../assets/au.png";
import usFlag from "../assets/us.png";
import ruFlag from "../assets/ru.png";
import itFlag from "../assets/it.png";
import dkFlag from "../assets/dk.png";
import frFlag from "../assets/fr.png";
import cnFlag from "../assets/cn.png";
import gbFlag from "../assets/gb.png";

export const dealsData = [
  { id: 1, title: "Smart watches", discount: "-25%", img: watchImg },
  { id: 2, title: "Laptops", discount: "-15%", img: laptopImg },
  { id: 3, title: "GoPro cameras", discount: "-40%", img: goproImg },
  { id: 4, title: "Headphones", discount: "-25%", img: headsetImg },
  { id: 5, title: "Canon cameras", discount: "-25%", img: canonImg },
];

export const homeOutdoorData = [
  { id: 1, title: "Soft chairs", price: "19", img: chairImg },
  { id: 2, title: "Sofa & chair", price: "19", img: sofaImg },
  { id: 3, title: "Kitchen dishes", price: "19", img: dishesImg },
  { id: 4, title: "Smart watches", price: "19", img: potImg },
  { id: 5, title: "Kitchen mixer", price: "100", img: mixerImg },
  { id: 6, title: "Blenders", price: "39", img: blenderImg },
  { id: 7, title: "Home appliance", price: "19", img: holderImg },
  { id: 8, title: "Coffee maker", price: "10", img: plantImg },
];

export const electronicsData = [
  { id: 1, title: "Smart watches", price: "19", img: watchImg },
  { id: 2, title: "Cameras", price: "89", img: canonImg },
  { id: 3, title: "Headphones", price: "10", img: headphoneImg },
  { id: 4, title: "Smart watches", price: "90", img: kettleImg },
  { id: 5, title: "Gaming set", price: "35", img: headsetImg },
  { id: 6, title: "Laptops & PC", price: "340", img: laptopImg },
  { id: 7, title: "Smartphones", price: "19", img: tabletImg },
  { id: 8, title: "Electric kettle", price: "240", img: phoneImg },
];

// --- Recommended Items Data Export ---
export const recommendedData = [
  {
    id: 1,
    price: "10.30",
    title: "T-shirts with multiple colors, for men",
    img: tshirtImg,
  },
  {
    id: 2,
    price: "10.30",
    title: "Jeans shorts for men blue color",
    img: jacketImg,
  },
  {
    id: 3,
    price: "12.50",
    title: "Brown winter coat medium size",
    img: suitImg,
  },
  {
    id: 4,
    price: "34.00",
    title: "Jeans bag for travel for men",
    img: walletImg,
  },
  { id: 5, price: "99.00", title: "Leather wallet", img: bagImg },
  {
    id: 6,
    price: "9.99",
    title: "Canon camera black, 100x zoom",
    img: shortsImg,
  },
  {
    id: 7,
    price: "8.99",
    title: "Headset for gaming with mic",
    img: headsetImg,
  },
  {
    id: 8,
    price: "10.30",
    title: "Smartwatch silver color modern",
    img: bagImg,
  },
  {
    id: 9,
    price: "10.30",
    title: "Blue wallet for men leather metarfial",
    img: potImg,
  },
  {
    id: 10,
    price: "80.95",
    title: "Jeans bag for travel for men",
    img: kettleImg,
  },
];
// --- Inquiry Form Select Options ---
export const quantityTypes = [
  { id: 1, label: "Pcs", value: "pcs" },
  { id: 2, label: "Liters", value: "liters" },
  { id: 3, label: "Kg", value: "kg" },
  { id: 4, label: "Boxes", value: "boxes" },
];

export const servicesData = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    img: hubImg,
    iconType: "search",
  },
  { id: 2, title: "Customize Your Products", img: customImg, iconType: "box" },
  {
    id: 3,
    title: "Fast, reliable shipping by ocean or air",
    img: shippingImg,
    iconType: "send",
  },
  {
    id: 4,
    title: "Product monitoring and inspection",
    img: monitorImg,
    iconType: "shield",
  },
];

// --- Suppliers by Region Data Export ---
export const regionsData = [
  { id: 1, name: "Arabic Emirates", site: "shopname.ae", flag: aeFlag },
  { id: 2, name: "Australia", site: "shopname.com.au", flag: auFlag },
  { id: 3, name: "United States", site: "shopname.com", flag: usFlag },
  { id: 4, name: "Russia", site: "shopname.ru", flag: ruFlag },
  { id: 5, name: "Italy", site: "shopname.it", flag: itFlag },
  { id: 6, name: "Denmark", site: "denmark.com.dk", flag: dkFlag },
  { id: 7, name: "France", site: "shopname.com.fr", flag: frFlag },
  { id: 8, name: "Arabic Emirates", site: "shopname.ae", flag: aeFlag }, // Figma mein repeat hy
  { id: 9, name: "China", site: "shopname.com.cn", flag: cnFlag },
  { id: 10, name: "Great Britain", site: "shopname.co.uk", flag: gbFlag },
];

// Apni imported image variables top par waise hi rkhna bhae
export const listingProductsData = [
  {
    id: 1,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: "1128.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    img: phoneImg, // Red Phone Image
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: "1128.00",
    rating: 5.9,
    orders: 89,
    shipping: "Free Shipping",
    img: Img4,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: null, // Image mein iski old price nahi hy
    rating: 7.5,
    orders: 42,
    shipping: "Free Shipping",
    img: canonImg,
    description:
      "Great smartphone setup with premium dual focus matrix control layout for high end business portfolios.",
  },
  {
    id: 4,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: "1128.00",
    rating: 7.5,
    orders: 120,
    shipping: "Free Shipping",
    img: tabletImg, // Tablet/iPad Image
    description:
      "High-end developer tablet with premium liquid cooling system, ultra responsive glass screen design.",
  },
  {
    id: 5,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: "1128.00",
    rating: 7.5,
    orders: 210,
    shipping: "Free Shipping",
    img: goproImg,
    description:
      "Immersive optical engineering with deep custom focus tech designed for prolonged professional studio use.",
  },
  {
    id: 6,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: null, // Iski bhi old price screen par missing hy
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    img: Img4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 7,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: "1128.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    img: laptopImg, // Laptop Image
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 8,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: "1128.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    img: watchImg, // Smart Watch Image
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 9,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "99.50",
    oldPrice: null, // Blank old price area
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    img: phoneImg, // Red Phone Image row end
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];
