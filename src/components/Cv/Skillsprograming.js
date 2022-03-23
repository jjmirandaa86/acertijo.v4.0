import React from 'react'
import { ProgressBar, Col, Row } from "react-bootstrap";

const Skillsprograming = () => {
    return (
        <>
            <h5>Programing</h5>
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

export default Skillsprograming