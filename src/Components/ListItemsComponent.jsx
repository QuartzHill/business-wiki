import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const ListItemsComponent = ({ name, category, address, schedule }) => {
    return (
      <ListItem alignItems="flex-start" style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'red' }}>
        <div style={{ backgroundColor: 'gray', borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%', height: '50px', }}>
          <RestaurantIcon />
        </div>
        <ListItemText
          style={{ width: '77%', backgroundColor: 'green' }}
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {address}
                {schedule}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    )
  }