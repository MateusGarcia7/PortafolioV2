import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './redux' 
const root = createRoot(document.getElementById('root'));
// Aquí importamos el reducer creado anteriormente


const store = createStore(
		rootReducer,
		composeWithDevTools()
)

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Aquí sólamente encerramos a <App/> */}
      <App />                {/* En el provider */}
    </Provider>
  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

