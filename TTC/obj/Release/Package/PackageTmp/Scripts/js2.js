$("#shirt_selection").on("click", "input", function (e) {
    var selection = e.currentTarget;
    var sizes = $("#tshirt");
    if (selection.value === "Yes") {
        sizes.addClass("show");
    } else {
        sizes.removeClass("show");
    }
});
$(".actions").click(function () {
    $("#welcome").show(drop, 400);
});