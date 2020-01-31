
$(function () {
    $(".draggable").draggable({
        helper: "clone",
        cursor: 'move'
    });
    $(".mainCart").droppable({
        drop: function (event, ui) {
            let title = ui.draggable[0].innerText;
            
            let element = `
            <div class="list">
            <a href="index.html">
                <img class="cartProductImg" src="../asset/images/About-MaRS-Header-896x1120.jpg" alt="">
            </a>
            <p class="pname">
                <span> ${title} </span>
                <span>For 10 Months</span>
            </p>
            <p class="pprice">$20,000 <i class="fas fa-times-circle"></i></p>
        </div>`
            $(".mainCart").append(element).hide().fadeIn(1000);
        }
    });
});

var previousVal = 0;

function servAnim1Up() {
    serviceUpAnimate(0);
}
function servAnim2Up() {
    serviceUpAnimate(1)
}
function servAnim3Up() {
    serviceUpAnimate(2)
}
function servAnim1Down() {
    serviceDownAnimate(0)
}
function servAnim2Down() {
    serviceDownAnimate(1)
}
function servAnim3Down() {
    serviceDownAnimate(2)
}

function serviceUpAnimate(num) {
    let card = document.getElementsByClassName("services_content_shell");
    card[num].style.top = "10%";
}
function serviceDownAnimate(num) {
    let card = document.getElementsByClassName("services_content_shell");
    card[num].style.top = "95%";
}

function navScrolled() {
    var navBar = document.getElementById('navv');
    // var mainHead = document.getElementById('mainHeader');
    // var head1 = document.getElementById('head1');

    let el = document.getElementById("testService");
    let el2 = document.getElementById("testServiceFact");

    if (el !== null) {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.top;
        el.style.transform = `scale(${1 + top * 0.004})`;
        el2.style.transform = `scale(${0.1 + top * 0.002})`;
    }


    var offset = document.documentElement.scrollTop;
    // let scaleCalc = 1 + offset * 0.005;
    // let blurCalc = offset * 0.03;

    if (offset > previousVal) {
        // mainHead.style.filter = `blur(${blurCalc}px)`;
        // head1.style.transform = `scale(${scaleCalc})`;
        navBar.style.padding = "0 12.5%"; navBar.style.left = "0%"; navBar.style.right = "0%"; previousVal = offset;
    } else if (offset < previousVal) {
        // mainHead.style.filter = `blur(${blurCalc}px)`;
        // head1.style.transform = `scale(${scaleCalc})`;
        navBar.style.padding = "0 20px"; navBar.style.left = "12.5%"; navBar.style.right = "12.5%"; previousVal = offset;
    }
}


// contact page
var toggler = true;
// var $ = function (id) {
//     return document.getElementById(id);
// }s
function myFunction() {
    var x = document.getElementById("text");
    if (toggler) {
        x.style.display = "block";
        toggler = false;
    } else {
        x.style.display = "none";
        toggler = true;
    }
}


// you can either use $('form').serialize()

var specialCaseValidator = (val) => {
    let i;
    result = true;
    let data = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">"];
    for (i = 0; i < val.length; i++) {
        if (data.includes(val[i])) {
            result = false;

            return;
        }
    }
    return result;
};

var validations = {
    email: (val) => {
        return val.search("@") >= 0 && val.search(".com") >= 0;
    },
    confirmPassword: (val1, val2) => {

        return val1 === val2 && val1.length >= 1 && val1.length <= 20;
    },

    user: (val) => {
        return val.length <= 20 && val.length >= 1 && specialCaseValidator(val);
    }
}

function checkEmail() {
    var email = $("#txtEmail").val();
    if (validations.email(email)) {
        alert("Well Done Validated..");
    } else {
        document.getElementById("error").innerHTML = "Your Email is not valid";
    }
}



$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-left': '0px', "opacity": "1" }, 1000);
            }

        });
    });
});


// SLIDE AND FADE IN FUNCTION

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadedown').each(function () {

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-top': '0px', "opacity": "1" }, 1000);
            }

        });
    });
});



$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeint').each(function () {

            var bottom_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-left': '0px', "opacity": "1" }, 1000);
            }

        });
    });
});


// NUMBER COUNT ANIMATION


var max = 100;
var currCount = 0;

$(incCounter);
function incCounter() {
    currCount = parseInt($('.counter').html());
    $('.counter').text(currCount + 1);
    if (currCount + 1 != max) {
        setTimeout(incCounter, 50);
    }
}



// form


var modal = document.getElementById('id01');


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).ready(function () {

    $("#ser_cont_she1").mouseenter(servAnim1Up);
    $("#ser_cont_she2").mouseenter(servAnim2Up);
    $("#ser_cont_she3").mouseenter(servAnim3Up);

    $("#ser_cont_she1").mouseleave(servAnim1Down);
    $("#ser_cont_she2").mouseleave(servAnim2Down);
    $("#ser_cont_she3").mouseleave(servAnim3Down);

});

function register() {
    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("r_pass").value;
    if (validations.email(email) && validations.user(user) && validations.confirmPassword(pass, pass2)) {
        alert("Registered ...");
    } else {
        alert("Validation Error");
    }
}
