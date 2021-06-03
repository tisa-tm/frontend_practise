function showEarning(){
    var earning = document.getElementById("earning");
    var earns = 0;
    // assigning earning according to the space offered by the host
    if(document.host.space.value=="Entire House"){
        earns = 100;
    }
    else if(document.host.space.value=="Private Room"){
        earns = 50;
    }
    else if(document.host.space.value=="Shared Room"){
        earns = 5;
    }
    // increasing the earning by 5 points for each guest
    var g = document.host.people.value;
    var guests = parseInt(g);
    console.log(guests);
    earns = earns + (guests*5);
    document.getElementById("earning").innerHTML=earns;
}

$('#left-slide-button').click(
    function(){           
        $('#card-to-scroll').animate(
            {
            scrollLeft: "-=300px"
            }, "slow");

        var scroll = $('#card-to-scroll').scrollLeft();
        // console.log(scroll);

        if(scroll<=300){
            $('#left-slide-button').css('display','none');
        }
    }
);
$('#right-slide-button').click(
    function(){
        $('#card-to-scroll').animate(
            {
            scrollLeft: "+=300px"
            }, "slow");
        $('#left-slide-button').css('display','inline');
    }
);

var width = $('#card-to-scroll-2').width();
var plus = "+="+width+"px";

$('#slide-left').click(
    function(){     
        var width = $('#card-to-scroll-2').width();
        var minus = "-="+width+"px";    
        $('#card-to-scroll-2').animate(
            {
            scrollLeft: minus
            }, "slow");
    }
);
$('#slide-right').click(
    function(){
        var width = $('#card-to-scroll-2').width();
        var plus = "+="+width+"px";
        $('#card-to-scroll-2').animate(
            {
            scrollLeft: plus
            }, "slow");
    }
);