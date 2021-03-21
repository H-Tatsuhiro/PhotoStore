import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Link } from '@material-ui/core';
import firebase from 'firebase';

type UserType = string | null;

const headerStyles: any = makeStyles((theme: Theme) => createStyles({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    username: {
        marginRight: theme.spacing(2),
    }
}),
);

const HeaderLogButton:React.FunctionComponent<{isLogin: Boolean}> = ({isLogin}) => {
  if (isLogin) {
    return <Button color="inherit" onClick={() => {firebase.auth().signOut()}}>Logout</Button>
  }
  else {
    return <Button color="inherit" href="/login">Login</Button>
  }
}

function HeaderContent(props: any) {
    const headerclasses = headerStyles();
    let [username, setUsername] = useState<UserType>("Loading...");
    let [isLogin, setLogin] = useState<Boolean>(false);

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUsername(user.displayName);  
          setLogin(true);
        }
        else {
          setUsername("Not Signin");
          setLogin(false);
        }
      })
    }, [username]);
  
    // eslint-disable-next-line
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={headerclasses.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={headerclasses.title}>
            <Link href="/top"  color="inherit">
              PhotoStore
            </Link>
          </Typography>
          <Typography variant="h6" className={headerclasses.username}>
            {username}
          </Typography>
          <HeaderLogButton isLogin={isLogin} />
        </Toolbar>
      </AppBar>
    )
}

export default HeaderContent;