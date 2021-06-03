$('#left-slide-button-1').click(
    function(){           
        $('#card-to-scroll-1').animate(
            {
            scrollLeft: "-=300px"
            }, "slow");
    }
);
$('#right-slide-button-1').click(
    function(){
        $('#card-to-scroll-1').animate(
            {
            scrollLeft: "+=300px"
            }, "slow");
    }
);
$('#left-slide-button-2').click(
    function(){           
        $('#card-to-scroll-2').animate(
            {
            scrollLeft: "-=300px"
            }, "slow");
    }
);
$('#right-slide-button-2').click(
    function(){
        $('#card-to-scroll-2').animate(
            {
            scrollLeft: "+=300px"
            }, "slow");
    }
);
//to show user menu dropdown
$('#user-menu-dropdown-button').click(
    function(){
        $('.dropdown-content').toggleClass("show-dropdown-content");
    }
);