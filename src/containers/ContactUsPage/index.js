import React, {Fragment} from 'react';
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import ContactUs from "../../components/ContactUs";
import ContactInfoList from "../../components/ContactInfoList";

const ContactUsPage = () => {
    return (
        <Fragment>
            <BreadCrumb
                title="Contact Us"
            />
            <ContactInfoList/>
            <ContactUs/>
            <Footer/>
        </Fragment>
    )
};
export default ContactUsPage;