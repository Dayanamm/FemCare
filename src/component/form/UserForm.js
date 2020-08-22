import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { calcIMC } from "../../actions/imc";
import { Redirect } from "react-router-dom";

const UserForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    weightType: "",
    height: "",
    heightType: "",
  });

  const [redirect, setRedirect] = useState(null);

  const {
    firstName,
    lastName,
    age,
    weight,
    weightType,
    height,
    heightType,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const imc = calcIMC(weight, weightType, height, heightType);
    setRedirect("/calculo?imc=" + imc);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <React.Fragment>
      <Row>
        <Col sm={10}>
          <h2>Queremos conocerte</h2>
          <h2>Ingresa tus datos</h2>
        </Col>
      </Row>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group as={Row} controlId="firstName">
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="firstName"
              value={firstName}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="lastName">
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Apellido"
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="age">
          <Col sm={10}>
            <Form.Control
              type="text"
              pattern="[0-9]*"
              placeholder="Edad"
              name="age"
              value={age}
              onChange={(e) => onChange(e)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="weight">
          <Col xs="auto">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="weightMesureType"
              name="weightType"
              value={weightType}
              onChange={(e) => onChange(e)}
              custom
            >
              <option value="kg">Kg</option>
              <option value="lbs">Lbs</option>
            </Form.Control>
          </Col>
          <Col xs="auto">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Peso"
                pattern="[0-9]*"
                name="weight"
                value={weight}
                onChange={(e) => onChange(e)}
                required
              />
            </Col>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="height">
          <Col xs="auto">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="heigthMeasureType"
              name="heightType"
              value={heightType}
              onChange={(e) => onChange(e)}
              custom
            >
              <option value="mts">Mts</option>
              <option value="feet">Fts</option>
            </Form.Control>
          </Col>
          <Col xs="auto">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Altura"
                pattern="[0-9]*"
                name="height"
                value={height}
                onChange={(e) => onChange(e)}
                required
              />
            </Col>
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={8}>
              ¿A sufrido alguna enfermedad ...?
            </Form.Label>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="No"
                name="diseaseRadios"
                id="diseaseRadiosNo"
                checked
              />
              <Form.Check
                type="radio"
                label="Si"
                name="diseaseRadios"
                id="diseaseRadiosYes"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Continuar</Button>
          </Col>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default UserForm;
