$.validator.addMethod("israeliId", function (value, element) {
    return validateId(value, element);
}, 'מספר תעודת זהות אינו תקין!');
$.validator.addClassRules({
    validateId: { validateId: true }
});
function validateId(value, element) {
    //INPUT VALIDATION
    if (value === "") return true;
    // Just in case -> convert to string
    var iDnum = String(value);
    // Validate correct input
    if ((iDnum.length > 9) || (iDnum.length < 5)) {
        HideLoader();
        return false;
    }
    if (isNaN(iDnum)) {
        HideLoader();
        return false;
    }
    // The number is too short - add leading 0000
    if (iDnum.length < 9) {
        while (iDnum.length < 9) {
            iDnum = '0' + iDnum;
        }
    }
    // CHECK THE ID NUMBER
    var mone = 0, incNum;
    for (var i = 0; i < 9; i++) {
        incNum = Number(iDnum.charAt(i));
        incNum *= (i % 2) + 1;
        if (incNum > 9)
            incNum -= 9;
        mone += incNum;
    }
    if (mone % 10 === 0) {
        return true;
    }
    else {
        HideLoader();
        return false;
    }
}