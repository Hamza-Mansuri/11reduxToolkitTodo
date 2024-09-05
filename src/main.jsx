import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {store} from '../src/app/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

  //wese to provider value xpect krta he, lekin hum yaha usko store bolege.

  <Provider store={store}>
    <App />
  </Provider>,
)
