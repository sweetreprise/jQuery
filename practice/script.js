$( document ).ready(() => console.log("Let's get ready to party with jQuery!"));

$("article img").addClass("image-center");

$("article p").last().remove();

$("#title").css("font-size", function() {
    return Math.random() * 100 + "px"
});

$("ol").append("<li>I am hungry</li>");

$("aside").empty().append("<p>Haha jk lists are gross. Sorry.</p>");

$("input").on('keyup blur change', () => {
    let red = $("input")[0].valueAsNumber;
    let blue = $("input")[1].valueAsNumber;
    let green = $("input")[2].valueAsNumber;
    $("body").css("background-color",() => `rgb(${red}, ${green}, ${blue})`)
});

$("img").on('click', (e) => {
    e.target.remove();
});
