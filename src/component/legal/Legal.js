import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "./Legal.css";

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
      <div class="head-form">
        Si te decidiste por está cirugía bariatríca, puedes interponer una
        acción de tutela. <br />
        LLena los siguiente datos.
      </div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <div class="inputs-form-container">
          <Form.Group as={Row} controlId="idType">
            <Col>
              <Form.Control
                as="select"
                type="text"
                placeholder="Tipo de Documento"
                name="idType"
                value={idType}
                onChange={(e) => onChange(e)}
                required
                className="modified-select"
              >
                <option value="cc">Cédula de Ciudadania</option>
                <option value="ce">Cédula de Extranjeria</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="idNumber">
            <Col className="col-1200-33 col-992-33 col-768-33 col-576-33">
              <Form.Control
                type="text"
                placeholder="Número documento de identidad"
                name="idNumber"
                value={idNumber}
                onChange={(e) => onChange(e)}
                required
                className="form-input"
                pattern="[0-9]*"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="email">
            <Col className="col-1200-33 col-992-33 col-768-33 col-576-33">
              <Form.Control
                type="text"
                placeholder="Correo electrónico"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
                className="form-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="address">
            <Col className="mr-sm-2 col-1200-33 col-992-33 col-768-33 col-576-33">
              <Form.Control
                type="text"
                placeholder="Dirección de notificación"
                name="address"
                value={address}
                onChange={(e) => onChange(e)}
                required
                className="form-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="phone">
            <Col className="col-1200-33 col-992-33 col-768-33 col-576-33">
              <Form.Control
                type="text"
                placeholder="Número de célular"
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                required
                className="form-input"
                pattern="[0-9]*"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="eps">
            <Col>
              <Form.Control
                as="select"
                type="text"
                placeholder="EPS"
                name="eps"
                value={eps}
                onChange={(e) => onChange(e)}
                required
                className="modified-select"
              >
                <option value="sanitas">Sanitas</option>
                <option value="compensar">Compensar</option>
                <option value="capital-salud">Capital Salud</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col
              sm={{ span: 10, offset: 2 }}
              className=" container-button-modified"
            >
              <Button type="submit" className="continue-button-modified">
                Acción de tutela
              </Button>
            </Col>
          </Form.Group>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Legal;
