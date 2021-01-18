import { makeStyles } from '@material-ui/core';
import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import facebookConfig from '../../config/facebook-config';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FacebookProvider appId={facebookConfig.appId}>
        <LoginButton
          scope="email"
        >
          Login

        </LoginButton>
      </FacebookProvider>
    </div>
  );
};

export default Login;
