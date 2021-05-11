import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UsersContext";

const LoginScreen = ({ history, location }) => {
  const { loginUser, user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (user.token) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };

    loginUser(loginuser);
  }

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 20,
          padding: "20px",
        }}
      >
        <div className="text-center">

        <FiUser size={70} style={ {border:"2px solid #000", borderRadius:40}} />
        </div>
        <Form.Control
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/">     <Button type="submit">LOGIN</Button></Link>
   
      </Form>
    </div>
  );
};

export default LoginScreen;
