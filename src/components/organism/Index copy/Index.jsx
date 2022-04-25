import { Section, Inside } from "./Index.style";
import { Container, Row, Col } from "react-bootstrap";

export default function Index() {
  return (
    <Section>
      <Inside>
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </Inside>
    </Section>
  );
}
