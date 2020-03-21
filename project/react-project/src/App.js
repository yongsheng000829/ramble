import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routeData from './router/router.config';
import store from './store/store';
import { Provider } from 'react-redux';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.crm.RouteView routeData={routeData} />
      </Router>
    </Provider>
  );
}

export default App;
