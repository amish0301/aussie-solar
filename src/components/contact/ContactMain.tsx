import React from 'react';
import BreadCamb from '../shearedComponents/BreadCamb';
import ContactArea from './ContactArea';
import Map from './Map';

const ContactMain = () => {
    return (
        <>
         <BreadCamb title='Contact Us'/>   
         <ContactArea/>
         <Map/>
        </>
    );
};

export default ContactMain;