import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const headerStyles: any = makeStyles((theme: Theme) => createStyles({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}),
);

function HeaderContent() {
    const headerclasses = headerStyles();
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={headerclasses.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={headerclasses.title}>
            PhotoStore
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default HeaderContent;