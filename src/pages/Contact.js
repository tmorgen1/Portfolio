import React from 'react';
import ContactItem from "../components/ContactItem";
import phone from '../images/phone.svg';
import email from '../images/emailme.svg';
import location from '../images/location.svg';
import PageTitle from "../components/PageTitle";

function ContactPage() {
    return (
        <>
            <div className="title">
                <PageTitle title={'Contact Me'} span={'Contact Me'}/>
            </div>
            <div className="ContactPage">
                <div className="contactSection">
                    <ContactItem icon={phone} text={'678-416-0308'} title={'Phone'}/>
                    <ContactItem icon={email} text={'thomasrmorgenstern@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text={'Luthersville, Georgia'} title={'Location'}/>
                </div>
            </div>
        </>
    )
}

export default ContactPage;