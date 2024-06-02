import React from "react";
import { Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Card
        bg={"primary"}
        key={"primary"}
        style={{ width: "18rem", color: "white", fontSize: "2rem" }}
        className="m-2"
      >
        <Card.Header>Total Employees</Card.Header>
        <Card.Body>
          <Card.Text>150</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg={"light"}
        key={"light"}
        style={{ width: "18rem", color: "black", fontSize: "2rem" }}
        className="m-2"
      >
        <Card.Header>Present</Card.Header>
        <Card.Body>
          <Card.Text>140</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg={"success"}
        key={"success"}
        style={{ width: "18rem", color: "white", fontSize: "2rem" }}
        className="m-2"
      >
        <Card.Header>On Leave</Card.Header>
        <Card.Body>
          <Card.Text>5</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg={"dark"}
        key={"dark"}
        style={{ width: "18rem", color: "white", fontSize: "2rem" }}
        className="m-2"
      >
        <Card.Header>New Employees</Card.Header>
        <Card.Body>
          <Card.Text>10</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
