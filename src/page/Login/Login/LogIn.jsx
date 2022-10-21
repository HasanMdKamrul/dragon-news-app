import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  console.log(error);

  const from = location.state?.from?.pathname || "/";

  const { logIn, user, setLoading } = useContext(AuthContext);
  console.log(user);

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const logInUser = async () => {
      try {
        const result = await logIn(email, password);
        console.log("user logged in");
        if (result.user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Please verify your email address");
        }
        form.reset();
        setError("");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
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

      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default LogIn;
