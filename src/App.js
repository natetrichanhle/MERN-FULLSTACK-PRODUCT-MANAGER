import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/product/">
          <Main />
        </Route>
        <Route exact path="/product/:id">
          <Detail />
        </Route>
        <Route path="/product/:id/edit">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;


