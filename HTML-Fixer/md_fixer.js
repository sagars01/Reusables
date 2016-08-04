// JavaScript source code

function hResolver() {
    $("#infoCenter-page .infoCentWrap").removeClass("col-md-2 infoCentWrap").addClass("col-md-3 col-lg-2 infoCentWrap");//Remove and add class on a fly.
    $("#infoCenter-page .infoCentWrap").parent(".row").find(".col-md-10").removeClass("col-md-10").addClass("col-md-9 col-lg-10");//Find new next div which is not inside the current div but have common parent div.
    $("#searchInputBox").removeClass().addClass("col-md-10 col-lg-6");//Remove and add class which are compliant to Bootstrap thus fixing the html structure.
    $("#infoCenter-page").parents("#s4-workspace").find("#searchInputBox").removeClass().addClass("col-md-10 col-lg-6"); //Change the first selector and then you can traverse throughout the DOM tree and select your class.
}

hResolver(); // You can call this function only wherever needed, so that the global namespace is clean.
