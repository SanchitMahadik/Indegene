$(document).ready(function () {
    $(".menu").hide();
    $("#menu-list").click(function () { 
        $(".menu").slideToggle("slow");
    });
});