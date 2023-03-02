import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table_work from '../assets/click-through-rate.png'

const Boxfrst = (prop) => {
    return (
        <div style={styles.background} class=" py-5 container-xl ">
            <Row style={{ alignItems: 'center' }}>
                {/* TODO: flex-direction reverse */}
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
                        className="d-inline-block align-top"
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
