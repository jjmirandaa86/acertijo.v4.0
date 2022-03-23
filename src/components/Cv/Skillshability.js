import React from 'react'
import { ProgressBar, Col, Row } from "react-bootstrap";

const Skillshability = () => {
    return (
        <>
            <h5>Ability</h5>
            <Row>
                <Col>Javascript</Col>
                <Col><ProgressBar variant={"warning"} now={60} label={60} /></Col>
            </Row>
            <Row>
                <Col>Javascript</Col>
                <Col><ProgressBar variant={"warning"} now={60} label={60} /></Col>
            </Row>
            <Row>
                <Col>Javascript</Col>
                <Col><ProgressBar variant={"warning"} now={60} label={60} /></Col>
            </Row>
        </>
    )
}

export default Skillshability