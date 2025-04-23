import React, { useRef } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link

} from "react-router-dom";


import Rajafooter from '../../../../raja/nic/src/component/rajafooter';
import Rajaheader from '../../../../raja/nic/src/component/rajaheader';
import Home from './home';


export default function Route_Nic() {
    const contactkRef = useRef(null);
    const aboutkRef = useRef(null);
    const serviceRef = useRef(null); 
    const newef = useRef(null); 
    const scrollToContact = () => {
      contactkRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToService = () => {
      serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTonew = () => {
    newef.current.scrollIntoView({ behavior: 'smooth' });
};
const scrollToabout = () => {
    aboutkRef.current.scrollIntoView({ behavior: 'smooth' });
};
    return (

        <>
            <BrowserRouter>
            <Rajaheader scrollTonew={scrollTonew} scrollToContact={scrollToContact} scrollToService={scrollToService} scrollToabout={scrollToabout} />
                <Routes>

                    {/* <Route exact path='/' element={<Home workRef={workRef} qnRef={qnRef} serviceRef={serviceRef} />} /> */}
                    <Route exact path='/egov/' element={<Home newef={newef} aboutkRef={aboutkRef} contactkRef={contactkRef} serviceRef={serviceRef}  />} />


                </Routes>
                <Rajafooter />
            </BrowserRouter>
           
        </>


    )
}
