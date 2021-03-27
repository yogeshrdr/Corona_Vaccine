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
    <Windmill usePreferences>
      <App />
    </Windmill>
  </Suspense>
</SidebarProvider>,
document.getElementById('root')
  
);

reportWebVitals();
