import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";


const data = {
    title: <h2 className="pl-4 pt-3">FAQ (How it works)</h2>,
    rows: [
        {
            title: <h5 className='font-weight-normal pl-4'>How can I register an account?</h5>,
            content: `For registration visit our website www.winstore.pk or our mobile app. Go to login page, click signup option and enter your Name, Email, Phone number, Delivery Address, Card details (optional). A confirmation email will be sent on your registered email. Please click the link in the email to confirm your account. <a href="/register">Register </a>`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What can I do if i forget my password?</h5>,
            content:
                "If you forget your password please follow these steps; Click forgot password on the sign in page, Fill in the registered email and click submit, You will receive an email on the registered email account, Click on the given link in email to change password. (Call our customer service representative on the given helpline and a link will be sent on your registered email to reset your password.)",
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What Payment Methods can I use</h5>,
            content: `WINstore have the following payment methods through which you can make a payment: <br />
            Credit/Debit Card (VISA/MasterCard) <br />
            COD (Cash on delivery across Lahore)`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>How do I place an order?</h5>,
            content: `Visit our website www.winstore.pk or Winstore App and register an account. Browse through categories and subcategories to find your desired product, you can also search for a product on the search bar. After choosing the product add the product to cart and click on the checkout button. Fill in your details i.e. preferred address and payment method. Click on place order and you will receive a confirmation email with your order details and order ID.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>How can I track my order?</h5>,
            content: `You will receive regular updates about your order status via email, SMS and calls by our customer service representatives. Our rider will also contact you on your registered number when he picks up your order for delivery.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>How do I cancel my order?</h5>,
            content: `You can cancel your order at the time of confirmation call from our customer service department. After order confirmation your order can not be cancelled.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>Can I change my delivery address?</h5>,
            content: `Yes, your delivery address can be changed when customer service representative calls for order confirmation.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What if I do not receive my order in time?</h5>,
            content: `In case your order is delayed due to unforeseen reasons our customer service representative will keep you updated.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What is the delivery/shipping charges?</h5>,
            content: `Shipping charges may vary according to the products.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What is the promised delivery time?</h5>,
            content: `Our estimated delivery time is 1 to 2 working days.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What if I have a complaint regarding my order or delivery service?</h5>,
            content: `You can call our customer service representative anytime between 9 AM to 12 AM 7 days a week for complaints/feedback/queries OR please write on to register your complaint. We will be more than happy to help you.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What if I receive wrong articles in my order?</h5>,
            content: `Winstore.pk makes sure that orders are double checked before they are dispatched. But if this unfortunate event takes place, we are here to help, just call our customer representative on our helpline 03 111 666 144 within regular working hours OR write on . Our customer service representative will resolve your issue as soon as possible with an appropriate solution.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What if I receive a damaged/expired order?</h5>,
            content: `Incase you receive a damaged or expired product, call 03 111 666 144 or whatsapp 03171777015 our customer service representative on the given number. Our customer service representative will ask for the images of the damaged or expired article for proof via whatsapp or email along with the order number and then register your complaint. You will be contacted shortly by our team with a solution.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What if I want to return my order?</h5>,
            content: `Order can only be returned in case of damage. Otherwise we do not have a return policy.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>Do you ship outside Pakistan?</h5>,
            content: `Sorry, right now we are not offering shipping outside Pakistan.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>In case I receive a wrong product in my order,do I have to return all products?</h5>,
            content: `No, you do not have to return your whole order. Just return the defective or wrong product and you will receive a coupon code of that value.`,
        },
        {
            title: <h5 className='font-weight-normal pl-4'>What are the reasons for delivery delays?</h5>,
            content: `There can be many reasons behind a delivery delay,for example bad weather, inaccurate delivery address, no-go zones,law & order situation and road blocks etc. Our customer services team will keep you posted in any of such situations.`,
        },
        {
            title: <h5 className="pl-4 font-weight-normal">We’re Here to Help ! Contact us</h5>,
            content: <p className="pl-3">current version is 1.2.1 <br /> <a href="/contact">Contact Us </a></p>,
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "dark",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "green",
    rowTitleTextSize: 'large',
    // rowTitlePaddingLeft: '50px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '20px',
    rowContentPaddingRight: '60px',
    transitionDuration: "0.6s",
    timingFunc: "ease"
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true,
};


function faq() {
    
    return (
        <div>
            <section>
                <div className="container text-dark my-5 p-3">
                    <Faq
                        data={data}
                        styles={styles}
                        // config={config}
                        className="text-dark"
                    />
                </div>
            </section>
        </div>
    )
}

export default faq
