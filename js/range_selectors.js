/* JS for Range Selectors*/
$(document).ready(function () {
    $('#flat-slider').slider({
        orientation: 'horizontal',
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        create: function () {
            $('#slider_legend_1').text($(this).slider("values")[0]);
            $('#slider_legend_2').text($(this).slider("values")[1]);
        },
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            $('#slider_legend_1').text(ui.values[0]);
            $('#slider_legend_2').text(ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#flat-slider").slider("values", 0) +
        " - $" + $("#flat-slider").slider("values", 1));
});