// music_festival.js 
//Author: Juarez Barbosa Junior - Student ID 20197080 

//function to validate the user details - delegates validation to specific username and password
//validation functions
function validateUserDetails() {
    //calls the validation function for user name not empty, password not empty and password length >=9
    return (validateUserName() && validatePassword());
}

//function to validate the user name with custom overhang error messages
function validateUserName() {
    //user name validation - not empty
    var userName = document.forms["loginForm"]["userName"].value.trim();
    if (userName == "") {
        jQuery("form").overhang({
            type: "error",
            duration: 3,
            message: "Please provide your user name!"
        });
        return false;
    } else { return true; }
}

//function to validate the password with custom overhang error messages
function validatePassword() {
    //password validation - not empty
    var password = document.forms["loginForm"]["password"].value.trim();
    if (password == "") {
        jQuery("form").overhang({
            type: "error",
            duration: 3,
            message: "Please provide your password!"
        });
        return false;
    }
    //password validation - length >= 9
    if (password.length < 9) {
        jQuery("form").overhang({
            type: "error",
            duration: 3,
            message: "Please check your password. It must have 9 characters at least!"
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

//function that comprises the order calculations and presents the total bill amount
// delegates bill calculation and discount verifications to the calculateBill and validateDiscountCode
//functions
function completeOrder() {

    //burger has to be selected first
    var selectedBurgerValue = $('#noFussBurger').val();
    if (selectedBurgerValue == null) {
        jQuery("form").overhang({
            type: "error",
            duration: 3,
            message: "We can't proceed with your order. You have to select a burger first!"
        });
        return false;
    }

    //calculate bill
    var totalBill = calculateBill();
    //check if a discount code has been informed
    var isDiscountCodeApplied = validateDiscountCode();

    if (isDiscountCodeApplied) {
        totalBill = totalBill * 0.9;
    }
    //inform the total bill
    jQuery("#billAmount").text(totalBill);

}

//calculates the total bill without applying a discount at this point
//notifies the selection of supersize burger
function calculateBill() {

    var quantity = jQuery('#quantity').val();

    var selectedBurgerValue = $('#noFussBurger').val();

    if (selectedBurgerValue == 17.50) {

        jQuery("form").overhang({
            type: "info",
            duration: 3,
            message: "Supersize selected!"
        });

    }

    var totalBill = selectedBurgerValue * quantity;
    return totalBill;

}

//function that validates and verifies the discount code
function validateDiscountCode() {
    //retrieve the discount code to check to see if one has been provided
    var discountCode = jQuery('#discountCode').val();

    if (discountCode != "") {            //check to see if a discount code will be applied
        var isDiscounted = true;
    } else {

        $("body").overhang({
            type: "confirm",
            message: "No discount code provided. Do you want to provide it?",
            overlay: true,
            callback: function (value) {
                var response = value ? "Yes" : "No";
                if (response == "Yes") {
                    isDiscounted = true;
                } else {
                    isDiscounted = false;
                }
            }
        });
    }

    //wants to avail the discount code
    if (isDiscounted) {
        //discount code can't be empty
        if (discountCode == "") {

            jQuery("form").overhang({
                type: "error",
                duration: 3,
                message: "Please provide your discount code before proceeding with a discount!"
            });
            return false;
        }
        //invalid discount code
        if (discountCode != "tacotopping") {

            jQuery("form").overhang({
                type: "error",
                duration: 3,
                message: "Please provide a valid discount code!"
            });

            return false;
        }
        return true;
    }
    return false;
}
