import contactImg from '../../../public/assets/img/banners/about-banner.jpg';
import BreadCamb from '../shearedComponents/BreadCamb';
import ContactArea from './ContactArea';
import Map from './Map';

const ContactMain = () => {
    return (
        <>
         <BreadCamb bgImg={contactImg} title='Contact Us'/>   
         <ContactArea/>
         <Map/>
        </>
    );
};

export default ContactMain;