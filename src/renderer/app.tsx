import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Application from './components/Application';
import store from './store';
import './app.scss';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const roboto = document.createElement('link');
roboto.setAttribute('rel',"stylesheet");
roboto.setAttribute('href',"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
document.body.appendChild(roboto);

const icons = document.createElement('link');
roboto.setAttribute('rel',"stylesheet");
roboto.setAttribute('href',"https://fonts.googleapis.com/icon?family=Material+Icons");
document.body.appendChild(icons);


import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component />
            </ThemeProvider>
            </Provider>
        </AppContainer>,
        mainElement
    );
};

render(Application);
