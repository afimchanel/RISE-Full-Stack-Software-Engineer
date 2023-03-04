import React, { useEffect, useState } from "react";
import Img_background from '../assets/power-up-1.png';
const Boxthird = (prop) => {
 
    return (
        <>
            <div style={{ backgroundImage: `url(${Img_background})` }}>
                <div className="position-relative overflow-hidden p-3 p-md-5  text-center ">
                    <div className="col my-5 text-white">
                        <h1 className=" fw-normal">Power-up your performance</h1>
                        {(prop.width < 991) ? (
                            <p className="lead fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum est facilisi mi sed nec ultrices, Ullamcorper ut proin arcu mi vel erat.</p>
                        ) : (
                            <>
                                <p className="lead fw-normal">Augue pellentesque egestas ipsum justa, dictum cómmodo in erat a. Vel bibendum consectétur convallis faucibus velit elementum lacus, ac. Rhoncus, risus tellus convallis gravida. Vestibulum odia dapibus ut laoreet. Quis aliquam massa arcu commodo enim, aenean eget at tellus. Blandit viverra nascetur amet tristique nunc laoreet. Massa elit semper nec eleifend tristique tristique. Tempor eu euismod tincidunt vestibulum nulla curabitur habitant. Sit consectetur et amet. scelerisque adipiscing in sed adipiscing neque. Imperdíet in sed et imperdiet gravida facilisi morbi:</p>
                                <p className="lead fw-normal">Egestas lectus amet volutpat turpis orci neque purus elementum. Eu ultrices laoreet facilisis diam sit élementum nunc egestas maecenas. At nisl ut amet, cursus ac imperdiet mauris ridiculus daplbus. Praesent vitae, eu nunc auctor ut pharetra. Adipiscing amet in commodo. duis gravida sem mi. Consectetur et at sagittis vulputate sed orci viverra sem amet Tristique sit rhoncus sit enim cras consectetur quam vel interdum.</p>
                            </>
                        )}

                    </div>
                </div >
            </div >
        </>

    );
};

export default Boxthird;
