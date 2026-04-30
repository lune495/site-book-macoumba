import React, { useEffect, useRef } from 'react';
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom';

import routes from './components/pages/index';

function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedPathRef = useRef('');

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`;

    if (lastTrackedPathRef.current === pagePath) {
      return;
    }

    lastTrackedPathRef.current = pagePath;

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'G-JXQ9LTR9QQ', {
        page_path: pagePath,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [location.pathname, location.search]);

  return null;
}

function App() {

  return (
      // <BrowserRouter  basename="/book_front/">
      <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
         
            {
                routes.map((route, idx) => (
                    <Route exact path={route.path} element={route.component} key={idx} ></Route>
                   
                ))

              }

           </Routes>

      </BrowserRouter>
  );
}

export default App;



