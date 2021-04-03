import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SidebarProvider } from './Users/context/SidebarContext'
import ThemedSuspense from './Users/People/components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import {Provider} from 'react-redux'
import store from './Redux/store'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
  <SidebarProvider>
    <BrowserRouter>
  <Suspense fallback={<ThemedSuspense />}>
    <Windmill usePreferences>
      <App />
    </Windmill>
  </Suspense>
  </BrowserRouter>
</SidebarProvider>

</Provider>,
document.getElementById('root')
  
);

reportWebVitals();
