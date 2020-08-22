import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

const Legal = () => {
  const [formData, setFormData] = useState({
    idType: "",
    idNumber: "",
    email: "",
    address: "",
    phone: "",
    eps: "",
  });

  const { idType, idNumber, email, address, phone, eps } = formData;

  const [redirect, setRedirect] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setRedirect("/pdf");
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h3>
            Si te decidiste por está cirugía bariatríca, puedes interponer una
            acción de tutela.
          </h3>
          <h3>LLena los siguiente datos.</h3>
        </Col>
      </Row>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group as={Row} controlId="idType">
          <Col sm={10}>
            <Form.Control
              as="select"
              type="text"
              placeholder="Tipo de Documento"
              name="idType"
              value={idType}
              onChange={(e) => onChange(e)}
              required
            >
              <option value="cc">Cédula de Ciudadania</option>
              <option value="ce">Cédula de Extranjeria</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="idNumber">
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Número documento de identidad"
              name="idNumber"
              value={idNumber}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="email">
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Correo electrónico"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="address">
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Dirección de notificación"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="phone">
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Número de célular"
              name="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="eps">
          <Col sm={10}>
            <Form.Control
              as="select"
              type="text"
              placeholder="EPS"
              name="eps"
              value={eps}
              onChange={(e) => onChange(e)}
              required
            >
              <option value="sanitas">Sanitas</option>
              <option value="compensar">Compensar</option>
              <option value="capital-salud">Capital Salud</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Acción de tutela</Button>
          </Col>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default Legal;
