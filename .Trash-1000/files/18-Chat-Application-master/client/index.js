import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

//tutaj render to funkcja wyższego rzędu która przyjmuje komponent
//App i rozszerza go.  Render opakowuje komponent aplikacji w dodatkowy
//AppContainer dzięki któremu działa HMR. Cały plik index.js jest plikiem
//wejściowym do Webpacka. Ten render nie ma nic wspólnego z funkcją
//render w React.js. To jest opakowanie dla metody ReactDOM.render()
//a nie wywołanie metody render().
render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(NewApp)
  });
}
