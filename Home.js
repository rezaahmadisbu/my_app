// Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h1>Welcome to our survey site!</h1>
          <p>Take our survey and share your opinions with us.</p>
        </Col>
        <Col md={6}>
          <SurveySection />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <LoginSignupSection />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;