import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { ListItemsComponent } from '../Components/ListItemsComponent';
import { Container } from '@mui/material';
import { Navbar } from '../Components/Navbar';

const businessOfCategory = [
  {
    "id": 1,
    "data": [
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
    ]
  }];


export default function Business() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerWidth);
  const dataCategory = businessOfCategory[0].data;
  const categoryId = businessOfCategory[0].id;

  const initializeWidth = () => {
    const handleResizeWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }

  const initializeHeight = () => {
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
      <Navbar height={height} width={width} />
      <Container style={{ width: '100%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <List >
          {
            dataCategory.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItemsComponent width={width} name={item.nombre} category={item.rubro} address={item.direccion} categoryId={categoryId} />
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