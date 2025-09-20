import image1 from "./assets/img/coffee-1.png"
import image2 from "./assets/img/coffee-2.png"
import image3 from "./assets/img/coffee-3.png"
import image4 from "./assets/img/coffee-4.png"


const coffeeMenu = [
  {
    id: 1,
    name: "Classic Cappuccino",
    image: image1,
    price: 45000,
    ingredients: ["Espresso", "Hot Milk"],
    description: "A balanced combination of espresso and milk with a thick layer of milk foam."
  },
  {
    id: 2,
    name: "Latte Art",
    image: image2,
    price: 40000,
    ingredients: ["Espresso", "Hot Milk"],
    description: "A smooth latte with artistic design on milk foam, perfect for mild coffee lovers."
  },
  {
    id: 3,
    name: "Chocolate Mocha",
    image: image3,
    price: 50000,
    ingredients: ["Espresso", "Hot Chocolate"],
    description: "A combination of espresso and chocolate with delicious cream, an excellent choice for sweet flavor lovers."
  },
  {
    id: 4,
    name: "Italian Affogato",
    image: image4,
    price: 55000,
    ingredients: ["Espresso", "Vanilla Ice Cream"],
    description: "A unique combination of hot espresso and cold ice cream, an amazing coffee dessert."
  }
];

export default coffeeMenu
