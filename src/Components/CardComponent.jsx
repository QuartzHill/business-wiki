import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';


export const CardComponent = ({ category, image, description }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/business`);
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }} style={{ marginBottom: '5%' }} onClick={handleCardClick}>
      <CardMedia
        component="img"
        alt={category}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}