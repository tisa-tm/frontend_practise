 // to change the sub-navigation
 $('#experiences-button').click(
    function(){
        $('#places-to-stay').hide();
        $('#places-to-stay-button').css( "border-bottom","none");
        $('#experiences').show();
        $(this).css( "border-bottom","2px solid white");
    });
$('#places-to-stay-button').click(
    function(){
        $('#experiences').hide();
        $('#experiences-button').css( "border-bottom","none");
        $('#places-to-stay').show();
        $('#places-to-stay-button').css( "border-bottom","2px solid white");
    }               
);
//to change the search button in sub-navigation
$('#search-button').click(
    function(){
        $(this).removeClass("search-button-round")
        $(this).addClass("search-button-wide");
        $(this).html("<img src='images/search.png' alt='Search Button' height='30' width='30'><span>Search</span>");
    }
)
$('#search-button-2').click(
    function(){
        $(this).removeClass("search-button-round")
        $(this).addClass("search-button-wide");
        $(this).html("<img src='images/search.png' alt='Search Button' height='30' width='30'><span>Search</span>");
    }
)
//to show user menu dropdown
$('#user-menu-dropdown-button').click(
    function(){
        $('.dropdown-content').toggleClass("show-dropdown-content");
    }
);

$('#popular-destinations-button').click(
    function(){
        $('.inspiration-button').css('border-bottom','none');
        $(this).css('border-bottom','3px solid black');
        $('#popular-destinations').show();
        $('#art-and-culture').hide();
        $('#mountain-cabin').hide();
        $('#outdoor-adventure').hide();
    }
);
$('#outdoor-adventure-button').click(
    function(){
        $('.inspiration-button').css('border-bottom','none');
        $(this).css('border-bottom','3px solid black');
        $('#popular-destinations').hide();
        $('#art-and-culture').hide();
        $('#mountain-cabin').hide();
        $('#outdoor-adventure').show();
    }
);
$('#mountain-cabin-button').click(
    function(){
        $('.inspiration-button').css('border-bottom','none');
        $(this).css('border-bottom','3px solid black');
        $('#popular-destinations').hide();
        $('#art-and-culture').hide();
        $('#mountain-cabin').show();
        $('#outdoor-adventure').hide();
    }
);
$('#art-and-culture-button').click(
    function(){
        $('.inspiration-button').css('border-bottom','none');
        $(this).css('border-bottom','3px solid black');
        $('#popular-destinations').hide();
        $('#art-and-culture').show();
        $('#mountain-cabin').hide();
        $('#outdoor-adventure').hide();
    }
);
$(document).scroll(function(){
    var y = window.scrollY;
    if(y>30){
        $('.small-navigation').css('background','gainsboro');
    }
    else{
        $('.small-navigation').css('background','transparent');
    }
});