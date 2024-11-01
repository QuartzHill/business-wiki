import * as React from 'react';
import { CardComponent } from '../Components/CardComponent';
import { Container } from '@mui/material';

const categories = [
  {
    categoria: "Cafeterías",
    imagen: require("../assets/restaurante.jpg"),
    descripcion: "Lugares ideales para disfrutar de un café, postres y bocadillos en un ambiente acogedor."
  },
  {
    categoria: "Restaurantes",
    imagen: require("../assets/restaurante.jpg"),
    descripcion: "Comercios donde se ofrecen comidas y bebidas variadas para diferentes gustos y presupuestos."
  },
  {
    categoria: "Librerías",
    imagen: require("../assets/restaurante.jpg"),
    descripcion: "Tiendas que ofrecen una amplia variedad de libros, revistas y artículos de papelería."
  },
  {
    categoria: "Gimnasios",
    imagen: require("../assets/restaurante.jpg"),
    descripcion: "Establecimientos dedicados al acondicionamiento físico, equipados con máquinas y espacios para ejercicio."
  },
  {
    categoria: "Farmacias",
    imagen: require("../assets/restaurante.jpg"),
    descripcion: "Establecimientos que venden medicamentos, productos de salud y cuidado personal."
  },
  {
    categoria: "Tiendas de ropa",
    imagen: require("../assets/restaurante.jpg"),
    descripcion: "Comercios que ofrecen ropa, accesorios y moda para diferentes estilos y edades."
  },
  {
    categoria: "Supermercados",
    imagen: require("../assets/restaurante.jpg"),
    descripcion: "Establecimientos que venden alimentos, productos de limpieza y artículos de uso cotidiano."
  }
];


export default function Home() {
  return (
    <Container>
      <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {
          categories.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <CardComponent category={item.categoria} image={item.imagen} description={item.descripcion} />
              </React.Fragment>
            )
          })
        }
      </Container>
    </Container>
  );
}
