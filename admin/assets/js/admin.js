
"use strict";

document.addEventListener( "click", function (e) {
    let target = e.target;
    if (target.classList.contains('notice-dismiss') && target.parentNode.classList.contains('aab__admin-notice')) {
        // setCookie 
        aabSetCookie( 'aab_notice_dismiss', "1", 60*60*24*30 );
    }

});

function aabSetCookie(cname, cvalue, experyInSeconds) {
    const d = new Date();
    d.setTime(d.getTime() + 1000 * experyInSeconds );
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}