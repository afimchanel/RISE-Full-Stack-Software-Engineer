import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Work_img1 from '.././assets/how-it-work-1.png';
import Work_img2 from '.././assets/how-it-work-2.png';
import Work_img3 from '.././assets/how-it-work-3.png';
import Work_img4 from '.././assets/how-it-work-4.png';

const Boxsecond = (prop) => {
    const [items, setItems] = useState([
        {
            imgUrl: Work_img1,
            title: 'Lorem ipsum oder',
            deception: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            imgUrl: Work_img2,
            title: 'Odee lorem ipsum',
            deception: 'Velit risus semper proin ac, aliquam tristique justo vulputate augue.'
        },
        {
            imgUrl: Work_img3,
            title: 'Yopus orem ipsum oder',
            deception: 'Maecenas ultricies amet justo, egestas enim tempus diam leo.'
        },
        {
            imgUrl: Work_img4,
            title: 'Momu ipsum lorem',
            deception: 'Mauris odio fames porta fames facilisis cursus enim.'
        }]);

    return (
        <div style={styles.background} className="py-5 ">
            <div className=" p-3 pb-md-4 mx-auto text-center" style={{ maxWidth: '700px' }}>
                <h1 className="display-4 fw-bold">How BetterGoods works?</h1>
            </div>
            <div className="d-flex justify-content-center text-center" >
                <p className=" text-muted" style={prop.width < 991 ? { width: '300px' } : { width: '800px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum est facilisi mi sed nec ultrices. Ullamcorper ut proin arcu mi vel Erat.</p>
            </div>
            <Row className="justify-content-center " style={{ marginRight: '20px', marginLeft: '20px' }} >
                {items.map((item, index) => (
                    <Col sm={12} lg={3}>
                        <Row style={{ justifyContent: 'center' }}>
                            <div style={styles.backgroundImage(item.imgUrl)}></div>
                            <div style={{ width: '300px' }}>
                                <h5 className=" fw-bold" style={{ marginLeft: '22px' }}>{index + 1}.{item.title}</h5>
                                <p className="fs-5 text-muted" style={{ marginLeft: '22px' }}>{item.deception}</p>
                            </div>

                        </Row>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
const styles = {
    background: {
        backgroundColor: 'rgb(241 243 245 / 28%)',
    },
    backgroundImage: (d) => {
        return {
            height: '250px',
            width: '300px',
            // marginBottom: '20px',
            backgroundImage: `url('${d}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
        }
    }
};
export default Boxsecond;
