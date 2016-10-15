/**
 * Created by Fay on 2016-09-22.
 */
import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

export default class WorkExperience extends React.Component {
    render() {
        return (
            <div>
                {/* Experience # 1 */}
                <Row>
                    <Col xs={6}>
                        <h4 id="Company">
                            Mojio
                        </h4>
                        <h5 id="Company-Position">
                            - Software Developer
                        </h5>
                    </Col>
                </Row>

                <Row id="Experiences-Row">
                    {/* Small overview about Experience 1 */}
                    <Col xs={6}>
                        <h5>
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                        </h5>
                    </Col>

                    {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                    <Col xs={6}>
                        <Row id="Language-Row">
                            <Button id="Language-Button" disabled="false"
                                    bsSize="small">.coffee</Button>
                            <Button id="Language-Button" disabled="false"
                                    bsSize="small">.java</Button>
                        </Row>
                        <Row id="Framework-Row">
                            <Button id="Framework-Button" disabled="false"
                                    bsSize="small">Mocha</Button>
                            <Button id="Framework-Button" disabled="false"
                                    bsSize="small">Elasticsearch</Button>
                        </Row>
                    </Col>
                </Row>

                {/* Experience # 2 */}
                <Row>
                    <Col xs={6} xsOffset={6}>
                        <h4 id="Company">
                            ABB
                        </h4>
                        <h5 id="Company-Position">
                            - Software Developer
                        </h5>
                    </Col>
                </Row>

                <Row id="Experiences-Row">
                    {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                    <Col xs={6}>
                        <Row id="Language-Row-Left">
                            <Button id="Language-Button-Left" disabled="false"
                                    bsSize="small">.java</Button>
                            <Button id="Language-Button-Left" disabled="false"
                                    bsSize="small">.js</Button>
                        </Row>
                        <Row id="Framework-Row-Left">
                            <Button id="Framework-Button-Left" disabled="false"
                                    bsSize="small">Cordova</Button>
                            <Button id="Framework-Button-Left" disabled="false"
                                    bsSize="small">Appium</Button>
                            <Button id="Framework-Button-Left" disabled="false"
                                    bsSize="small">Elasticsearch</Button>
                        </Row>
                    </Col>

                    {/* Small overview about Experience 2 */}
                    <Col xs={6}>
                        <h5>
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                        </h5>
                    </Col>
                </Row>

                {/* Experience # 3 */}
                <Row>
                    <Col xs={6}>
                        <h4 id="Company">
                            Global Relay
                        </h4>
                        <h5 id="Company-Position">
                            - QA Analyst
                        </h5>
                    </Col>
                </Row>

                <Row id="Experiences-Row">
                    {/* Small overview about Experience 3 */}
                    <Col xs={6}>
                        <h5>
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                            big body of text big body of text
                        </h5>
                    </Col>

                    {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                    <Col xs={6}>
                        <Row id="Language-Row">
                            <Button id="Language-Button" disabled="false"
                                    bsSize="small">.html</Button>
                        </Row>
                        <Row id="Framework-Row">
                            <Button id="Framework-Button" disabled="false"
                                    bsSize="small">JMeter</Button>
                            <Button id="Framework-Button" disabled="false"
                                    bsSize="small">XSS Security</Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}