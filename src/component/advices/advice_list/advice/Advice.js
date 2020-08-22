import React from "react";
import Card from "react-bootstrap/Card";

const Advice = (props) => {
  return (
    <React.Fragment>
      <Card className="mb-3 mx-auto shadow-sm">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Advice;
