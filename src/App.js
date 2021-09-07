import './App.css';
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;