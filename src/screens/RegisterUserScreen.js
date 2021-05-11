import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import { useHistory, useLocation, Link } from "react-router-dom";
import { UserContext } from "../contexts/UsersContext";
import shea1 from "../image/shea1.jpg"

const RegisterUserScreen = () => {
  const history = useHistory();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { registerUser, user } = useContext(UserContext);

  const redirect = location.search ? location.search.split("=")[1] : "/login";

  useEffect(() => {
    if (user.name) {
      history.push(redirect);
    }
  }, [user, history, redirect])

  function handleSubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }

  return (
    <section
      style={{
        backgroundImage: `url(${shea1})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        gridTemplateColumns: "50%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="justify-center border border-green mt-5 p-3"
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>name</Form.Label>
              <FormControl
                placeholder="enter name"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>email</Form.Label>
              <FormControl
                placeholder="enter email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>password</Form.Label>
              <FormControl
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </FormGroup>
            <Link to="/">
            <Button type="submit">SIGN UP</Button></Link>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default RegisterUserScreen;
