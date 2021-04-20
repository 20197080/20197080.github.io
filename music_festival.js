// music_festival.js 
//Author: Juarez Barbosa Junior - Student ID 20197080 

//function to validate the user name with custom overhang error messages
function validateEmail() {    
    var emailAddress = document.forms["emailForm"]["email"].value.trim();
    if (emailAddress == "") {
        jQuery("form").overhang({
            type: "error",
            duration: 3,
            message: "Please provide your email address!"
        });
        return false;
    } else { return true; }
}

//function present a successful login message on the order page
function loginSuccessfulHome() {
    jQuery("body").overhang({
        type: "success",
        duration: 3,
        message: "Welcome to Rock and Pop Festival - April 2021 in Dublin, Ireland!"
    });
}

//function present a successful login message on the order page
function loginSuccessfulLineUp() {
    jQuery("body").overhang({
        type: "success",
        duration: 3,
        message: "Unique line-up with top worldwide DJs!"
    });
}

//function present a successful login message on the order page
function loginSuccessfulTickets() {
    jQuery("body").overhang({
        type: "success",
        duration: 3,
        message: "Early Bird's promo last day, reserve your ticket now!"
    });
}

//function present a successful login message on the order page
function loginSuccessfulContactUs() {
    jQuery("body").overhang({
        type: "success",
        duration: 3,
        message: "Our events team is available 24 x 7 to support your queries!"
    });
}
