import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //   console.log(accepted);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { register, userProfileUpdate } = useContext(AuthContext);

  const handleEmail = (event) => {
    event.preventDefault();
    const emailValue = event.target.value;

    if (/^\S+@\S+\.\S+$/.test(emailValue)) {
      setEmail(emailValue);
    } else {
      setError("Please provide a valid email");
    }
  };

  const userProfileUpdater = async (profile) => {
    try {
      await userProfileUpdate(profile);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const profile = {
      displayName: name,
      photoURL,
    };

    // ** register

    const registerUser = async () => {
      try {
        await register(email, password);
        console.log("user created");
        form.reset();
        setError("");
        userProfileUpdater(profile);
        navigate(from, { replace: true });
      } catch (error) {
        setError(error.message);
      }
    };

    registerUser();
  };

  const handleAccept = (event) => {
    setAccepted(event.target.checked);
  };

  const passwordShowHandler = () => {
    setShowPassword(!showPassword);
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
          {showPassword ? (
            <Form.Control
              className="d-inline"
              required
              name="password"
              type="password"
              placeholder="Password"
            />
          ) : (
            <Form.Control
              className="d-inline"
              required
              name="password"
              type="text"
              placeholder="Password"
            />
          )}
          {showPassword ? (
            <FaEye
              onClick={passwordShowHandler}
              style={{ marginLeft: "-30px" }}
            />
          ) : (
            <FaEyeSlash
              onClick={passwordShowHandler}
              style={{ marginLeft: "-30px" }}
            />
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccept}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">terms and conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
