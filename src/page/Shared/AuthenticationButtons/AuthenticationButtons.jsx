import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";

const AuthenticationButtons = () => {
  return (
    <ButtonGroup vertical>
      <Button
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
