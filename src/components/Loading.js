import React from "react";
import { Container, Spinner, Image } from "react-bootstrap";
import Logo from "./Logo";

export default function Loading() {

  return (
    <div>
      <Spinner animation="grow" variant="warning">
        <Logo px={32} py={32} />
      </Spinner>
    </div>
  );
}
