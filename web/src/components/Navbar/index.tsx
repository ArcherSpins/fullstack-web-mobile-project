import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import {
  NavbarContainer,
  LogoBlock,
  Navbar,
  Logo,
  ListNavbar,
  UserBlock,
  Li
} from './styled';
import logo from '../../assets/logotype.png';
import * as routes from '../../routes';


export default () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarContainer>
      <LogoBlock>
        <Link to="/">
          <Logo src={logo} alt="logotype" />
        </Link>
      </LogoBlock>
      <Navbar>
        <ListNavbar>
          {
            Object.entries(routes.routes).map((route: [string, string], i) => (
              <Li key={i}>
                <Link to={route[1]}>{route[0].replace(/_\w+/, '')}</Link>
              </Li>
            ))
          }
        </ListNavbar>
        <UserBlock>
          <Button aria-controls="simple-menu" aria-haspopup="true" className="color-white" onClick={handleClick}>
            <Avatar style={{ marginRight: 10 }} src="https://im0-tub-ru.yandex.net/i?id=ff8508b39a55f2612accce5fb31285bd&n=13" alt="user" />
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className="color-white" onClick={handleClose}>
              <Link to={routes.PROFILE_ROUTE}>Profile</Link>
            </MenuItem>
            <MenuItem className="color-white" onClick={handleClose}>My account</MenuItem>
          </Menu>
        </UserBlock>
      </Navbar>
    </NavbarContainer>
  );
}

