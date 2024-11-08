import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { ListItemsComponent } from '../Components/ListItemsComponent';
import { Container } from '@mui/material';
import { Navbar } from '../Components/Navbar';

const businessOfCategory = [
  {
    nombre: "Cafetería Central",
    direccion: "Av. Principal 123, Ciudad",
    rubro: "Cafetería",
    horario: "08:00 - 20:00"
  },
  {
    nombre: "Librería Estudiantil",
    direccion: "Calle Secundaria 456, Ciudad",
    rubro: "Librería",
    horario: "09:00 - 18:00"
  },
  {
    nombre: "Restaurante Buen Sabor",
    direccion: "Plaza Mayor 789, Ciudad",
    rubro: "Restaurante",
    horario: "12:00 - 22:00"
  },
  {
    nombre: "Gimnasio Actívate",
    direccion: "Calle Ejemplo 101, Ciudad",
    rubro: "Gimnasio",
    horario: "06:00 - 22:00"
  },
  {
    nombre: "Farmacia Salud Total",
    direccion: "Av. Salud 202, Ciudad",
    rubro: "Farmacia",
    horario: "24 horas"
  },
  {
    nombre: "Cafetería Central",
    direccion: "Av. Principal 123, Ciudad",
    rubro: "Cafetería",
    horario: "08:00 - 20:00"
  },
  {
    nombre: "Librería Estudiantil",
    direccion: "Calle Secundaria 456, Ciudad",
    rubro: "Librería",
    horario: "09:00 - 18:00"
  },
  {
    nombre: "Restaurante Buen Sabor",
    direccion: "Plaza Mayor 789, Ciudad",
    rubro: "Restaurante",
    horario: "12:00 - 22:00"
  },
  {
    nombre: "Gimnasio Actívate",
    direccion: "Calle Ejemplo 101, Ciudad",
    rubro: "Gimnasio",
    horario: "06:00 - 22:00"
  },
  {
    nombre: "Farmacia Salud Total",
    direccion: "Av. Salud 202, Ciudad",
    rubro: "Farmacia",
    horario: "24 horas"
  }
];

export default function About() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <div>
      <Navbar />
      <Container style={{ width: '100%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <List >
          {
            businessOfCategory.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItemsComponent width={width} name={item.nombre} category={item.category} address={item.direccion} schedule={item.rubro} />
                </React.Fragment>
              )
            })
          }
          <Divider variant="inset" component="li" />
        </List>
      </Container>
    </div>
  );
}