import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table_work from '../assets/click-through-rate.png'
const Boxfrst = (prop) => {
    const [styleReverse, setStylereverse] = useState(window.innerWidth < 991 ?
        {
            flexDirection: 'column-reverse',
            alignItems: 'center',
        } :
        { alignItems: 'center', });
    useEffect(() => {
        if (prop.width < 991) {
            setStylereverse({
                flexDirection: 'column-reverse',
                alignItems: 'center',
            });
        } else {
            setStylereverse({
                alignItems: 'center',
            })
        }
    }, [prop]);

    return (
        <div style={styles.background} className=" py-5 container-xl ">
            <Row style={styleReverse}>
                <Col sm={12} lg={6} className="text-start">
                    <Row >
                        <h1 style={{ fontWeight: 600,width:'500px' }}>Higher click-through
                            rates for your product
                        </h1>
                    </Row>
                    <Row >
                        <p style={{ color: '#828282' }}>
                            Don't stop tracking your product and better analyze your customer just too easy steps.
                        </p>
                    </Row>
                </Col>
                <Col sm={12} lg={6}>
                    <img
                        src={Table_work}
                        style={{ maxWidth: '99%', maxHeight: '99%' }}
                        className="d-inline-block align-top my-4"
                    />
                </Col>
            </Row>

        </div>
    );
};
const styles = {
    background: {
        // minHeight: '992px',
        backgroundColor: '#FFFFFF',
    }
};
export default Boxfrst;
