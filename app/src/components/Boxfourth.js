import React, { useEffect, useState } from "react";
import Img_item1 from '../assets/power-up-2.png';
import Img_item2 from '../assets/power-up-3.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const BoxfourthMobile = (prop) => {
    return (
        <>
            <div className='bg-light ' style={prop.width < 991 ? {} : { paddingTop: '50px' }}>
                <Row style={{ gap: '10px' }} className="justify-content-center">
                    <Col sm={12} lg={4} >
                        <div class=" mb-5 d-flex flex-wrap justify-content-center" >
                            <img src={Img_item1} class="img-fluid" alt="" />
                            <div class="text-center">
                                <h5 className=" fw-bold" style={{ marginTop: '22px' }}>Yopus orem ipsum oder</h5>
                                <p className=" text-muted text-center" style={prop.width < 991 ? { width: '300px' } : { maxWidth: '800px' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsuma est facilisi mi sed nec ultrices.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={4}>
                        <div class="pb-5 d-flex d-flex flex-wrap  justify-content-center"  >
                            <img src={Img_item2} class="img-fluid" alt="" />
                            <div class="text-center">
                                <h5 className=" fw-bold" style={{ marginTop: '22px' }}>Odee lorem ipsum</h5>
                                <p className=" text-muted text-center" style={prop.width < 991 ? { width: '300px' } : { maxWidth: '800px' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Purus ipsum est facilisi mi sed nec ultrices.</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default BoxfourthMobile;
