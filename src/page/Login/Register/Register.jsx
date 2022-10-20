import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const { register } = useContext(AuthContext);

  const handleEmail = (event) => {
    event.preventDefault();
    const emailValue = event.target.value;

    if (/^\S+@\S+\.\S+$/.test(emailValue)) {
      setEmail(emailValue);
    } else {
      setError("Please provide a valid email");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // ** register

    const registerUser = async () => {
      try {
        await register(email, password);
        console.log("user created");
        form.reset();
      } catch (error) {
        setError(error.message);
      }
    };

    registerUser();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            required
            name="photoURL"
            type="text"
            placeholder="Photo URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Text className="text-muted">{error}</Form.Text>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Register;
