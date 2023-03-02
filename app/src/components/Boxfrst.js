import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table_work from '../assets/click-through-rate.png'
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
const Boxfrst = (prop) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [styleReverse, setStylereverse] = useState({ alignItems: 'center', });
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        if (!styleReverse?.flexDirection && windowSize.innerWidth <= 991) {
            setStylereverse({
                flexDirection: 'column-reverse',
                alignItems: 'center',
            });
        } else if (windowSize.innerWidth > 1000) {
            setStylereverse({
                alignItems: 'center',
            })
            // setSmcurrent(false);
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize]);

    return (
        <div style={styles.background} class=" py-5 container-xl ">
            <Row style={styleReverse}>
                <Col sm={12} lg={6} class="text-start">
                    <Row >
                        <h1 style={{ fontWeight: 600 }}>Higher click-through
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
