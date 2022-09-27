export const productos = [
    {
      nombre: "Remeras de bandas",
      imagen: "https://i.ibb.co/XJw53Sq/Sin-t-tulo3.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "remeras",
      precio: 2000,
      stock: 5,
    },
    {
      nombre: "Barbijos",
      imagen: "https://i.ibb.co/TqkK0wN/Sin-t-tulo4.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "cuidado",
      precio: 300,
      stock: 7,
    },
    {
      nombre: "Remeras personalizadas",
      imagen: "https://i.ibb.co/4jJBvWc/sin-titulo5.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "remeras",
      precio: 1500,
      stock: 8,
    },
    {
      nombre: "Remeras personalizadas",
      imagen: "https://i.ibb.co/DQcjRvf/sin-titulo6.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "remeras",
      precio: 1500,
      stock: 3,
    },
    {
      nombre: "Barbijos",
      imagen: "https://i.ibb.co/p04Z84y/sin-titulo7.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "cuidado",
      precio: 200,
      stock: 2,
    },
    {
      nombre: "Pedidos especiales",
      imagen: "https://i.ibb.co/8MDVDhb/musculosa.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "especiales",
      precio: 1800,
      stock: 7,
    },
    {
      nombre: "Pedidos especiales",
      imagen: "https://i.ibb.co/gWJzxsh/vampires.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "especiales",
      precio: 1200,
      stock: 11,
    },
    {
      nombre: "Pedidos especiales",
      imagen: "https://i.ibb.co/vQk7BKK/deftones.jpg",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto doloribus neque tenetur maxime nemo in omnis! Aperiam perferendis molestiae nemo expedita dignissimos nobis, soluta provident ad veniam, neque eius.",
      categoria: "especiales",
      precio: 3000,
      stock: 5,
    },
  ];

  export const data = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
      if (condition) {
        resolve(productos);
      } else {
        reject("Algo salio mal");
      }
    }, 3000);
  });