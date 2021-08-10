$("#form-control").submit(e => {
    e.preventDefault();

    if($("#title")[0].value.length >= 2 && $("#rating")[0].value <= 10 && $("#rating")[0].value >= 0) {

    
    $("#container").append("<div class='wrap'></div>");
    $(".wrap").last()
    .append($("input")[0].value + " - ")
    .append($("input")[1].value + "/10")
    .append("<button id='remove'>Remove</button");
    $(".wrap").on("click", e => {
        e.target.parentElement.remove();  
        });

    } else if($("#title")[0].value.length < 2) {
        alert("Movie title must be at least 2 characters!");
    } else if($("#rating")[0].value < 0 || $("#rating")[0].value > 10) {
        alert("Rating must be between 0-10!");
    }
    $("input").val('');

});


