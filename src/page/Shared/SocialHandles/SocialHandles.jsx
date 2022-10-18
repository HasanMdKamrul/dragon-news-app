import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";

const SocialHandles = () => {
  return (
    <ListGroup>
      <ListGroup.Item className="mb-2 d-flex  align-items-center">
        <AiOutlineFacebook /> Facebook
      </ListGroup.Item>
      <ListGroup.Item className="mb-2 d-flex  align-items-center">
        <AiOutlineWhatsApp /> WhatsApp
      </ListGroup.Item>
      <ListGroup.Item className="mb-2 d-flex  align-items-center">
        <AiOutlineTwitter /> Twitter
      </ListGroup.Item>
      <ListGroup.Item className="mb-2 d-flex  align-items-center">
        <FaTwitch /> Twitch
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SocialHandles;
