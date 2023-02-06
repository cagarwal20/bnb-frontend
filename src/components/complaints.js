import React , {Component} from "react";
import { ReactDOM } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Complaint() {
  return (
    <Card style={{ width: '18rem' ,height: '100rem'}}>
      <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Complaint;