import './App.css';

import * as React from 'react';
import HomePage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from './pages/Account/account';


function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Routes>
            <Route path ="/" element={<HomePage/>}/>
        {/* <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK+SURBVO3BQW7kQAwEwSxC//9yro88NSBI4/UQjIg/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4qEk/CaVkyScqNyRhN+k8kSxRinWKMUa5eJlKm9KwkkSTlTepPKmJLypWKMUa5RijXLxYUm4Q+UOlS4JJ0k4UbkjCXeofFKxRinWKMUa5WIYlS4JJyqTFGuUYo1SrFEuvlwSTlROktCpfLNijVKsUYo1ysWHqXySyv+k8pcUa5RijVKsUS5eloTflIROpUtCp/JEEv6yYo1SrFGKNUr8wWBJuEPlmxVrlGKNUqxRLh5KQqfSJaFT6ZLQqXRJ6FROktCpdEnoVJ5IQqdykoRO5U3FGqVYoxRrlIuHVN6UhE7lDpUuCZ3KHUnoVDqVJ5LQqTxRrFGKNUqxRrl4WRI6lS4JncpJEjqVLglPJKFT6VROkvCXFGuUYo1SrFHiDx5IwonKSRI6lb8kCZ3KE0noVN5UrFGKNUqxRrl4SKVLQpeETuWOJJyonCShU+mS0KnckYRO5UTlk4o1SrFGKdYo8QdfLAlPqHRJ6FS6JHQqJ0m4Q+WJYo1SrFGKNcrFQ0n4TSqdykkSnkjCNynWKMUapVijXLxM5U1J+KQknKh0SeiS0Kl0Kr+pWKMUa5RijXLxYUm4Q+WOJHQqd6h0SeiScKJyRxJOVJ4o1ijFGqVYo1x8OZUuCZ3KHSpdEp5IwonKm4o1SrFGKdYoF18uCSdJ6FS6JHQqncpJEjqVE5UuCZ3KE8UapVijFGuUiw9T+SSVLgmdyonKSRI6lTtUuiR0Km8q1ijFGqVYo1y8LAm/KQknSehUuiR0KidJ6FSeSEKn8kSxRinWKMUaJf5gjVGsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5R/UIUZ63ue2EIAAAAASUVORK5CYII="></img> */}

            <Route path = "/account" element={<AccountPage/>}/>

          </Routes>
        </Router>
      </header>

    </div>
  );
}




export default App;