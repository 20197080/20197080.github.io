// music_festival.js 
//Author: Juarez Barbosa Junior - Student ID 20197080 

function validateContactUsDetails() {
    return (validateUserName() && validateEmail() && validateEmailFormat() && validatePhoneNumber() && validateMessage());
}

function validatePaymentDetails(){
    
}

//function to validate the user name with custom overhang error messages
function validateUserName() {

    var name = jQuery("#name").val();

    if (name == "") {
        jQuery("form").overhang({
            type: "error",
            duration: 2,
            message: "Please provide your Name!"
        });
        return false;
    } else { return true; }
}

function validateEmailFormat() {

    var emailAddress = jQuery("#email").val();

    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress))) {
        jQuery("form").overhang({
            type: "error",
            duration: 2,
            message: "Please provide a valid email format!"
        });
        return false;
    } else { return true; }
}

//function to validate the user name with custom overhang error messages
function validateEmail() {

    var emailAddress = jQuery("#email").val();

    if (emailAddress == "") {
        jQuery("form").overhang({
            type: "error",
            duration: 2,
            message: "Please provide your email address!"
        });
        return false;
    } else { return true; }
}

//function to validate the user name with custom overhang error messages
function validatePhoneNumber() {

    var phoneNumber = jQuery("#phone").val();

    if (phoneNumber == "") {
        jQuery("form").overhang({
            type: "error",
            duration: 2,
            message: "Please provide your phone number!"
        });
        return false;
    } else { return true; }
}

//function to validate the user name with custom overhang error messages
function validateEmailSubscribe() {

    var emailAddress = jQuery("#email").val();

    if (emailAddress == "" || emailAddress == "Sign-up for updates: enter your email address here") {
        jQuery("form").overhang({
            type: "error",
            duration: 2,
            message: "Please provide your email address!"
        });
        return false;
    } else { return true; }
}

//function - help to remove white spaces from fields
function removeWhiteSpaces(str) {
    return str.replace(/\s/g, '');
}

//function to validate the user name with custom overhang error messages
function validateMessage() {

    var message = removeWhiteSpaces(jQuery("#message").val());

    if (message == '') {
        jQuery("form").overhang({
            type: "error",
            duration: 2,
            message: "Please provide a valid message!"
        });
        return false;
    }
    else {
        return true;
    }





    if (message == "" || messageLength == 0) {

    } else { return true; }
}

//function present a successful login message on the order page
function showMessageBannerForHome() {
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Welcome to Rock and Pop Festival - April 2021 in Dublin, Ireland!"
    });
}

//function present a successful login message on the order page
function showMessageBannerForLineUp() {
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Unique line-up with top worldwide DJs!"
    });
}

//function present a successful login message on the order page
function showMessageBannerForTickets() {
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Early Bird's promo last day, reserve your ticket now!"
    });
}

//function present a successful login message on the order page
function showMessageBannerForContactUs() {
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Our events team is available 24 x 7 to support your queries!"
    });
}
