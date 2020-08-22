import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserForm = (props) => {
  const { cancel, errors, submit } = props;

  function handleSubmit(event) {
    event.preventDefault();
    //submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    //cancel();
  }

  return (
    <React.Fragment>
      <Row>
        <Col sm={10}>
          <h2>Queremos conocerte</h2>
          <h2>Ingresa tus datos</h2>
        </Col>
      </Row>
      <Form>
        <Form.Group as={Row} controlId="firstName">
          <Col sm={10}>
            <Form.Control type="text" placeholder="Nombre" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="lastName">
          <Col sm={10}>
            <Form.Control type="text" placeholder="Apellido" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="age">
          <Col sm={10}>
            <Form.Control type="text" placeholder="Edad" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="weight">
          <Col xs="auto">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="weightMesureType"
              custom
            >
              <option value="kg">Kg</option>
              <option value="lbs">Lbs</option>
            </Form.Control>
          </Col>
          <Col xs="auto">
            <Col sm={10}>
              <Form.Control type="text" placeholder="Peso" />
            </Col>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="height">
          <Col xs="auto">
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="heigthMeasureType"
              custom
            >
              <option value="cms">Cm</option>
              <option value="feet">Fts</option>
            </Form.Control>
          </Col>
          <Col xs="auto">
            <Col sm={10}>
              <Form.Control type="text" placeholder="Altura" />
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
