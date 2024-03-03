let desktopSplashScreen, phoneSplashScreen, loginFormPhone, uid, pwd, loginBtns, loadingIndicators, loginBtnTxts, dialogShadow;

function init(){
    desktopSplashScreen = $("#splash-screen-desktop");
    phoneSplashScreen = $("#splash-screen-phone");
    loginFormPhone = $("#phone .login-form");
    desktopSplashScreen.fadeOut(600);
    phoneSplashScreen.fadeOut(600);

    let initLoginFormPhoneHeight = loginFormPhone[0].offsetHeight;
    setTimeout(() => {
        let bodyHt = document.body.offsetHeight;
        if (bodyHt > initLoginFormPhoneHeight){
            loginFormPhone[0].style.height = bodyHt + 'px';
        }else{
            loginFormPhone[0].style.height = initLoginFormPhoneHeight + "px"
        }
    }, 50);

    window.addEventListener('resize', function(){
        let bodyHt = document.body.offsetHeight;
        if (bodyHt > initLoginFormPhoneHeight){
            loginFormPhone[0].style.height = bodyHt + 'px';
        }else{
            loginFormPhone[0].style.height = initLoginFormPhoneHeight + "px"
        }
    });

    uid = $(".uid");
    pwd = $(".pwd");
    loginBtns = $(".login-btn");
    loadingIndicators = $(".login-btn div");
    loginBtnTxts = $(".login-btn span");
    // loginBtnTxts[0].fadeOut(300);
    dialogShadow = $("#dialog-shadow");
    dialog = $("#dialog");


}

function toggleLoginBtn(formType){
    if(uid[formType].value.length >= 8 && pwd[formType].value.length >= 8){
        loginBtns[formType].disabled = false;
    }else{
        loginBtns[formType].disabled = true;
    }
}

function attemptLogin(formType){
    //Indicate Progress
    loginBtns[formType].style.pointerEvents = "none";
    $(loginBtnTxts[formType]).fadeOut(150);
    setTimeout(() => {
        $(loadingIndicators[formType]).fadeIn(150);
    }, 180);
    setTimeout(() => {

        //show dialog
        dialogShadow.fadeIn(200);
        dialog[0].classList.remove("hidden");
        //set everything back to normal
        $(loadingIndicators[formType]).fadeOut(150);
        setTimeout(() => {
            loginBtns[formType].style.pointerEvents = null;
            $(loginBtnTxts[formType]).fadeIn(150);
        }, 180)
    }, 2000)

}


function redirect(link){
    window.location.href = link;
}

// $($("input")[0]).focus(function() {
//     var height = $("body").css('height');
//     $("body").css('height', height);
// });

// function resizeComps(){

// }