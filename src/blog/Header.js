import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

import { firebase } from '../config';
import './blog.css';

const customIconUrl = 'https://cdn-icons-png.flaticon.com/512/3439/3439335.png';

function Header(props) {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#555555',
          borderRadius: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={customIconUrl} alt="Custom Icon" style={{ marginRight: '8px', width: '60px', height: '60px', borderRadius: '50%' }} />
          <Typography
            component="h4"
            variant="h4"
            color={'black'}
            align="left"
            noWrap
            id="button"
            sx={{
              color: 'whitesmoke',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              fontWeight: 700,
              fontSize: '24px',
              letterSpacing: '1px',
            }}
          >
            COPCONNECT
          </Typography>
        </div>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="white"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ order: -1 }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <div>
            <Button
              variant='contained'
              onClick={() => changeLanguage('en')}
              sx={{ marginRight: 2, fontSize: '14px', color: 'white' }}
            >
              {t('english')}
            </Button>
            <Button
              variant='contained'
              onClick={() => changeLanguage('hi')}
              sx={{ marginRight: 2, fontSize: '14px', color: 'white' }}
            >
              {t('hindi')}
            </Button>
            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{ fontSize: '14px', backgroundColor: '#4CAF50', color: 'white' }}
            >
              {t('logout')}
            </Button>
          </div>
        </Hidden>
      </Toolbar>

      <Hidden mdUp>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
        >
          <div
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
            <div>
              <IconButton color="black" onClick={() => changeLanguage('en')} sx={{ color: 'black' }}>
                <LanguageIcon />
              </IconButton>
            </div>
            <div>
              <IconButton color="black" onClick={() => changeLanguage('hi')}>
                <LanguageIcon />
              </IconButton>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: 'darkgreen',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'blue';
                  e.target.style.color = '#ecf0f1';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'darkgreen';
                  e.target.style.color = '#ffffff';
                }}
                onClick={handleLogout}
              >
                {t('logout')}
              </button>
            </div>
          </div>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
