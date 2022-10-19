import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { title, _id, details, image_url, author } = news;
  const { img, name, published_date } = author;

  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            roundedCircle
            className="me-2"
            src={img ? img : "N/A"}
            style={{ height: "50px" }}
          />
          <div>
            <h3>{name ? name : "N/A"}</h3>
            <small>{published_date ? published_date : "N/A"}</small>
          </div>
        </div>
        <div>
          <FaShareAlt />
          <FaRegBookmark />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* ** Inage */}
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
