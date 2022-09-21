// import { Navbar, Form, Button, NavDropdown, Dropdown } from "react-bootstrap";
// import { Link, useNavigate  } from "react-router-dom";
// import "./Navbarfunc.css";
// import { useContext, } from "react";
// import UserContext from "../../Context/UserContext";

import "./FlightFilter.css";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";

export default function FlightFilter() {
  return (
    <>
        <Form className="flightFilterContainer">

      <Row className="w-100">
        <Col md>
          <Form.Label>Max hours of flight</Form.Label>
          <FloatingLabel
            controlId="maxHoursFlightSelectGrid"
            label="E.g. 4 Hours"
            >
            <Form.Select aria-label="Floating label select example">
              <option value="2">Two hours</option>
              <option value="3">Three hours</option>
              <option value="4">Four hours</option>
              <option value="5">Five hours</option>
              <option value="6">Six hours</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <Form.Label>Length of trip</Form.Label>

          <FloatingLabel controlId="maxDaysSelectGrid" label="E.g. Three Days">
            <Form.Select aria-label="Floating label select example">
              <option value="1">One day</option>
              <option value="2">Two days</option>
              <option value="3">Three days</option>
              <option value="4">Four days</option>
              <option value="5">Five days</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Max cost ($)</Form.Label>
            <Form.Control type="number" placeholder="E.g.  50" />
          </Form.Group>
        </Col>
      </Row>
            </Form>
    </>
  );
}
