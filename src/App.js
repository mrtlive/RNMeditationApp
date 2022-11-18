import React from 'react';
import AuthProvider from './AuthProvider';
import Root from './Root';
import store, {persistor} from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
