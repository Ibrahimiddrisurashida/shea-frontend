import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddProduct from "./screens/AddProduct";
import Products from "./screens/Products";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
        </Switch>
      </Container>
    </main>
  );
}

export default App;
