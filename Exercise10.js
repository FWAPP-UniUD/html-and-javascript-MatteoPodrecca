function endisablefieldset() {
    if ((document.getElementById("ck1").checked == false) && (document.getElementById("ck2").checked == false) && (document.getElementById("ck3").checked == false)) {
        document.getElementById("fieldset").disabled = true;
    } else {
        document.getElementById("fieldset").disabled = false;
    }
}