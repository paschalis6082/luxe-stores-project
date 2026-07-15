import nike from "../assets/nike shoes.jpg";
import Addidas from "../assets/Addidas shoes.jpg";
import jordan from "../assets/Jordan shoes.jpg";
import puma from "../assets/Puma shoes.jpg";
import under from "../assets/under-armour shoes.jpg";
import asics from"../assets/asics and brooks shoes.jpg";
import air from"../assets/air.jpg"
import blackshoes from "../assets/Black shoes.jpg";
import canvas from "../assets/canvas.jpg";
import fashionable from "../assets/fashionable.jpg";


const products = [
  {
    id: 1,
    name: "Nike Air Max",
    image: nike,
    price: "₦120,000",
    quality: "100% Original",
    quantityRemaining: 12,
    sizes: [40, 41, 42, 43, 44]
  },

  {
    id: 2,
    name: "Addidas Superstar",
    image: Addidas,
    price: "₦95,000",
    quality: "Premium",
    quantityRemaining: 8,
    sizes: [39, 40, 41, 42]
  },

  {
    id: 3,
    name: "Jordan 4",
    image: jordan,
    price: "₦180,000",
    quality: "Imported",
    quantityRemaining: 5,
    sizes: [41, 42, 43, 44]
  },

  {
    id: 5,
    name: "asics and brooks shoes",
    image: asics,
    price: "₦105,000",
    quality: "Original",
    quantityRemaining: 2,
    sizes: [20, 31, 42, 53]
  },

   {
    id: 4,
    name: "Puma RS-X",
    image: puma,
    price: "₦85,000",
    quality: "Original",
    quantityRemaining: 10,
    sizes: [40, 41, 42, 43]
  },

   {
    id: 6,
    name: "under-armour shoes",
    image: under,
    price: "₦70,000",
    quality: "Original",
    quantityRemaining: 25,
    sizes: [30, 37, 42, 44]
  },

   {
    id: 7,
    name: "Black shoes",
    image:blackshoes,
    price: "₦250,000",
    quality: "Original",
    quantityRemaining: 6,
    sizes: [41, 45, 42, 47]
  },

   {
    id: 8,
    name: "white canvas",
    image:canvas,
    price: "₦60,000",
    quality: "Original",
    quantityRemaining: 3,
    sizes: [40, 33, 42]
  },

   {
    id: 9,
    name: "fashion shoes",
    image: fashionable,
    price: "₦300,000",
    quality: "Original",
    quantityRemaining: 1,
    sizes: [ 43]
  },

   {
    id: 10,
    name: "good air shoes for running",
    image: air,
    price: "₦35,000",
    quality: "Original",
    quantityRemaining: 15,
    sizes: [30, 41, 37, 46]
  }
];

export default products;