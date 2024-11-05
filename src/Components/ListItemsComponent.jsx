import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MedicationIcon from '@mui/icons-material/Medication';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ConstructionIcon from '@mui/icons-material/Construction';

export const ListItemsComponent = ({ width, name, category, address, schedule, categoryId }) => {

  const [itemWidth, setItemWidth] = React.useState(width / 3);

  const IconComponent = ({ categoryId }) => {
    console.log(categoryId)
    switch (categoryId) {
      case 0: return (<CoffeeIcon />);
        break;
      case 1: return (<RestaurantIcon />);
        break;
      case 2: return (<MenuBookIcon />);
        break;
      case 3: return (<FitnessCenterIcon />);
        break;
      case 4: return (<MedicationIcon />);
        break;
      case 5: return (<CheckroomIcon />);
        break;
      case 6: return (<ShoppingBagIcon />);
        break;
    }
  }

  return (
    <ListItem alignItems="flex-start" style={{ width: itemWidth, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#000', borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', width: itemWidth * 12 / 100, height: itemWidth * 12 / 100 }}>
        <IconComponent categoryId={categoryId} />
      </div>
      <div style={{ width: itemWidth * 73 / 100, display: 'flex', flexDirection: 'column', padding: itemWidth * 2 / 100, borderRadius: 15, borderWidth: '1px', borderStyle: 'solid' }}>
        <span>{name}</span>
        <span>{address}</span>
        <span>{schedule}</span>
      </div>
    </ListItem>
  )
}