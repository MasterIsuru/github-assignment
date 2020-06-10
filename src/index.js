import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistedStore from './store'
import Routes from './routes'
import 'antd/dist/antd.css';
import './styles/globalStyles.css'
import * as serviceWorker from './utils/serviceWorker'

render(
  <Provider store={persistedStore.store}>
    <PersistGate loading={null} persistor={persistedStore.persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
