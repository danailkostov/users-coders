import React from "react";
import { AppBar, Typography, Button, Toolbar, Avatar } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  const isUser = user && isAuthenticated;

  return (
    <AppBar color="inherit" position="static" style={{ marginBottom: "50px" }}>
      <Toolbar style={{ alignSelf: "center" }}>
        {isUser && (
          <>
            <Avatar
              src={user.picture}
              alt={user.name}
              style={{ marginRight: "10px" }}
            />
            <Typography>
              Welcome, <strong>{user.name}</strong>{" "}
            </Typography>
          </>
        )}
        {isUser ? (
          <Button
            color="inherit"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </Button>
        ) : (
          <Button color="inherit" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
