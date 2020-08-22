import React from "react";
import AdviceList from "./advice_list/AdviceList";
import logo from "./topLogo.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Advices = () => {
  const advices = [
    { id: 1, title: "Consejo 1", text: "Texto consejo 1" },
    { id: 2, title: "Consejo 2", text: "Texto consejo 3" },
    { id: 3, title: "Consejo 3", text: "Texto consejo 3" },
  ];

  return (
    <React.Fragment>
      <Container className="bg-light text-dark">
        <Row>
          <Col>
            <Image className="mb-3 img-fluid" src={logo} rounded />
          </Col>
          <Col md={12} lg={12} xl={12}>
            <AdviceList advices={advices} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Advices;
