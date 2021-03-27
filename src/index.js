import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SidebarProvider } from './Users/context/SidebarContext'
import ThemedSuspense from './Users/People/components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'


ReactDOM.render(
  <SidebarProvider>
  <Suspense fallback={<ThemedSuspense />}>
    <Windmill >
      <App />
    </Windmill>
  </Suspense>
</SidebarProvider>,
document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
