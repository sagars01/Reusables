var accord = {
	sideNavBar : "Side Nav Bar",
	topNavBar : "Top Nav Bar" 
	}

//Now this variable will hold the text of the accordion heading. We are generatubg HTML Dynamically. 
var hContent = '<div class="accordion"><label>'+accord.sideNavBar+'<label><span>+<span></div>'; 
$(".ms-core-listMenu-root").parent("div").prepend(hContent);

//Extending jQuery's Power and creating custom function of text swapping.
jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});

//For ULs

$('.accordion').parent('.ms-core-listMenu-verticalBox').css({"padding" : "0px"});//this is project specific don't use it.
 $('.accordion').click(function(){
	$(this).children("span").toggleText('-' , '+');
	$(this).parent("div").find("ul").slideToggle('fast');
	// Add the particular element on which you want to perform the accordion in the find function.
 });

//FOR Tables

$('.accordion').parent('.ms-core-listMenu-verticalBox').css({"padding" : "0px"});
 $('.accordion').click(function(){
	$(this).children("span").toggleText('-' , '+');
	$(this).parent("div").find("table").slideToggle('fast');
	// Add the particular element on which you want to perform the accordion in the find function.
 });
 
/*While playing around with this make sure you re-check the HTML structure because the Chrome engine is messing it up.*/