import React, { useState, useEffect } from "react";
import { CardComponent } from '../Components/CardComponent';
import { Container } from '@mui/material';
import { Navbar } from '../Components/Navbar';

const categories = [
  {
    id: 0,
    categoria: "Cafeterías",
    imagen: require("../assets/coffee.jpg"),
    descripcion: "Lugares ideales para disfrutar de un café, postres y bocadillos en un ambiente acogedor."
  },
  {
    id: 1,
    categoria: "Restaurantes",
    imagen: require("../assets/restaurant.jpg"),
    descripcion: "Comercios donde se ofrecen comidas y bebidas variadas para diferentes gustos y presupuestos."
  },
  {
    id: 2,
    categoria: "Librerías",
    imagen: require("../assets/library.jpg"),
    descripcion: "Tiendas que ofrecen una amplia variedad de libros, revistas y artículos de papelería."
  },
  {
    id: 3,
    categoria: "Gimnasios",
    imagen: require("../assets/gym.jpg"),
    descripcion: "Establecimientos dedicados al acondicionamiento físico, equipados con máquinas y espacios para ejercicio."
  },
  {
    id: 4,
    categoria: "Farmacias",
    imagen: require("../assets/drugstore.jpg"),
    descripcion: "Establecimientos que venden medicamentos, productos de salud y cuidado personal."
  },
  {
    id: 5,
    categoria: "Tiendas de ropa",
    imagen: require("../assets/clothes.jpg"),
    descripcion: "Comercios que ofrecen ropa, accesorios y moda para diferentes estilos y edades."
  },
  {
    id: 6,
    categoria: "Supermercados",
    imagen: require("../assets/supermarket.jpg"),
    descripcion: "Establecimientos que venden alimentos, productos de limpieza y artículos de uso cotidiano."
  }
];

export default function Home() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerWidth);

  const initializeWidth = () =>{
    const handleResizeWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }

  const initializeHeight = () =>{
    const handleResizeHeight = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResizeHeight);
    return () => window.removeEventListener("resize", handleResizeHeight);
  }

  useEffect(() => {
    initializeWidth();
    initializeHeight();

  }, []);

  return (
    <div>
      <Navbar width={width} height={height} />
      <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', height: '90%', marginTop: '5%' }}>
        {
          categories.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <CardComponent category={item.categoria} image={item.imagen} description={item.descripcion} categoryId={item.id} />
              </React.Fragment>
            )
          })
        }
      </Container>
    </div>
  );
}