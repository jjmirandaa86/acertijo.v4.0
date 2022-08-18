import React from 'react';
import Header from '../Cv/Header';
import Skillshability from '../Cv/Skillshability';
import Skillsprograming from '../Cv/Skillsprograming';
import { ProgressBar, Col, Row, ListGroup, Card } from "react-bootstrap";
import Resumeobjetive from '../Cv/Resumeobjetive';
import Experence from '../Cv/Experence';
import Education from '../Cv/Education';
import Certificate from '../Cv/Certificate';

const Cv = () => {

    function imprSelec(nombre) {
        var ficha = document.getElementById(nombre);
        var ventimp = window.open(' ', 'popimpr');
        ventimp.document.write(ficha.innerHTML);
        ventimp.document.close();
        ventimp.print();
        ventimp.close();
    }

    return (
        <>
            <a onClick={() => { window.print(); }} >Imprimir</a>
            <div id="resume">
                <Header />
                <Row>
                    <Col lg="9">
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Resumeobjetive />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Experence />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Education />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Certificate />
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col lg="3">
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Skillsprograming />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Skillshability />
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>


                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Cv;