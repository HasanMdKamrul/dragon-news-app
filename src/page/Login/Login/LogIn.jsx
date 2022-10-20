import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");

  const { logIn } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const logInUser = async () => {
      try {
        await logIn(email, password);
        console.log("user logged in");
      } catch (error) {
        setError(error.message);
      }
    };
    logInUser();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          required
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Text className="text-muted">{error}</Form.Text>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LogIn;
