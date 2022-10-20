import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AuthenticationButtons = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const googleLogInHandler = () => {
    const logIn = async () => {
      try {
        const result = await providerLogin(googleProvider);
        console.log("User logged in", result.user);
      } catch (error) {
        console.error(error);
      }
    };
    logIn();
  };

  return (
    <ButtonGroup vertical>
      <Button
        onClick={googleLogInHandler}
        className="mb-2 d-flex justify-content-center align-items-center me-5 "
        variant="outline-primary"
      >
        <FaGoogle className="me-1" /> Log in with Google
      </Button>
      <Button
        className="mb-2 d-flex justify-content-center align-items-center me-5 "
        variant="outline-dark"
      >
        <FaGithub className="me-1" />
        Log in with Github
      </Button>
    </ButtonGroup>
  );
};

export default AuthenticationButtons;
