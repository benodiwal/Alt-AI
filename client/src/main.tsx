import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='749835838621-qf3jrqeb8lio9blml1pdci3sfenodpl0.apps.googleusercontent.com'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
