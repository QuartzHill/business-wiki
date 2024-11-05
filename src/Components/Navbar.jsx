import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.png';

export const Navbar = ({ width, height }) => {

  const [drawer, setDrawer] = useState(false);
  const navigate = useNavigate();

  /*
  const toggleDrawer = (newOpen) => () => {
    setDrawer(newOpen);
  };
*/

  const handleAboutClick = () => {
    navigate(`/About`);
  };

  const handleLogoClick = () => {
    navigate(`/business-wiki`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: height * 5 / 100, width: width, marginRight: width * 5 / 100, alignItems: 'center', alignContent: 'center' }}>
            <div style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
              <img src={banner} height={height * 20 / 100} width={height * 20 / 100} />
            </div>
            <div style={{ height: height * 4 / 100, width: width * 10 / 100, textAlign: 'center', cursor: 'pointer', alignContent: 'center', transition: '0.3s', '&:hover': { boxShadow: 20, transform: 'translateY(-5px)' }, }}
              onClick={handleAboutClick}>
              <Typography variant="h8" component="div" sx={{ color: '#000', }}>
                Acerca de
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}