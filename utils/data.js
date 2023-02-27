import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Marisabel",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Nicolas",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Top Pulidonow",
      slug: "Top",
      category: "Tops",
      image: "https://i.ibb.co/gD34wBJ/IMG-7324.jpg",
      brand: "Pulidonow",
      price: 20.0,
      countInStock: 20,
      description: "Popular",
      getImageSize: "https://i.ibb.co/wwPYBwJ/slider3.jpg",
    },
    {
      name: "Top Pulidonow 2",
      slug: "Top 2",
      category: "Tops",
      image: "https://i.ibb.co/wwPYBwJ/slider3.jpg",
      brand: "Levi's",
      price: 20.0,
      countInStock: 0,
      description: "Popular",
      getImageSize: "https://i.ibb.co/wwPYBwJ/slider3.jpg",
    },
    {
      name: "Top Pulidonow 3",
      slug: "Top 3",
      category: "Tops",
      image: "https://i.ibb.co/KhJXdNM/1.jpg",
      brand: "Shein",
      price: 20.0,
      countInStock: 20,
      description: "Popular",
      getImageSize: "https://i.ibb.co/wwPYBwJ/slider3.jpg",
    },
    {
      name: "Top Pulidonow 4",
      slug: "Top 4",
      category: "Tops",
      image: "https://i.ibb.co/jv23Dtm/15.jpg",
      brand: "Nike",
      countInStock: 20,
      description: "Popular",
      getImageSize: "https://i.ibb.co/wwPYBwJ/slider3.jpg",
    },
  ],
};

export default data;
