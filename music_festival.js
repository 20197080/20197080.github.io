// music_festival.js 
//Author: Juarez Barbosa Junior - Student ID 20197080 

function validateContactUsDetails() {
    return (validateUserName() && validateEmail() && validatePhoneNumber() && validateMessage);
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

//function to validate the user name with custom overhang error messages
function validateMessage() {

    var message = jQuery("#message").val();
    var messageLength = message.length;

    if (message == "" || messageLength == 0) {
        jQuery("form").overhang({
            type: "error",
            duration: 2,
            message: "Please provide a message!"
        });
        return false;
    } else { return true; }
}

//function present a successful login message on the order page
function loginSuccessfulHome() {
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Welcome to Rock and Pop Festival - April 2021 in Dublin, Ireland!"
    });
}

//function present a successful login message on the order page
function loginSuccessfulLineUp() {
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Unique line-up with top worldwide DJs!"
    });
}

//function present a successful login message on the order page
function loginSuccessfulTickets() {    
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Early Bird's promo last day, reserve your ticket now!"
    });
}

//function present a successful login message on the order page
function loginSuccessfulContactUs() {
    jQuery("body").overhang({
        type: "success",
        duration: 2,
        message: "Our events team is available 24 x 7 to support your queries!"
    });
}
