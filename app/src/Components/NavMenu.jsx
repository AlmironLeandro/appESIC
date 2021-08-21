import React, { useState } from 'react';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import StoreIcon from '@material-ui/icons/Store';
import BusinessIcon from '@material-ui/icons/Business';

// Assets


// Styles
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    img: {
        height: 'auto',
        width: 50,
        marginLeft: theme.spacing(1)
    },
    appBar: {
        backgroundColor: blue[400]
    },
    list: {
        width: 250,
    }
}));

const NavMenu = ({ history }) => {
     
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const rol = localStorage.getItem('akeron-rol');

    const toggleDrawer = evt => {
        if (evt && evt.type === 'keydown' && (evt.key === 'Tab' || evt.key === 'Shift')) {
            return;
        }

        setOpen(state => setOpen(!state));
    };

    const logout = () => {
        localStorage.removeItem('akeron-token');
        localStorage.removeItem('akeron-username');
        localStorage.removeItem('akeron-expires');
        localStorage.removeItem('akeron-rol');
        localStorage.removeItem('akeron-name');
        localStorage.removeItem('akeron-sucursal');
        history.push('/');
    }

    return (
        <header>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <IconButton onClick={() => toggleDrawer(true)} color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Typography>
                    <img className={classes.img} src={logo} alt={logo} />
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
            >
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItem>
                        {(rol == 1) &&
                            <ListItem button component={Link} to="/companies">
                            <ListItemIcon><BusinessIcon /></ListItemIcon>
                                <ListItemText primary="Empresas" />
                            </ListItem>
                        }
                        {(rol == 2) &&
                            <ListItem button component={Link} to="/sucursales">
                            <ListItemIcon><BusinessIcon /></ListItemIcon>
                                <ListItemText primary="Sucursales" />
                            </ListItem>

                           
                        }
                        {(rol == 2 || rol == 3) &&
                            <ListItem button component={Link} to="/depositos">
                            <ListItemIcon><StoreIcon /></ListItemIcon>
                                <ListItemText primary="Depositos" />
                            </ListItem>


                        }

                        {(rol == 2 || rol == 3) &&
                            <ListItem button component={Link} to="/usersAPP">
                                <ListItemIcon><HowToRegIcon /></ListItemIcon>
                                <ListItemText primary="Usuarios" />
                            </ListItem>


                        }
                        
                        
                    </List>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to="/change-password">
                            <ListItemIcon><LockIcon /></ListItemIcon>
                            <ListItemText primary="Cambiar Contrase&ntilde;a" />
                        </ListItem>
                        <ListItem button onClick={logout}>
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary="Cerrar Sesi&oacute;n" />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </header>
    );
}

export default NavMenu;