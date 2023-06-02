$(document).ready(function () {
    $('#btnLoad').click(function () {
        // alert("Button was clicked...");

        // Do a AJAX call to get the JSON data and display the HTML on client side

        $.ajax({
            url: 'http://localhost:3000/api/employees',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                if (response.data.length > 0) {
                    console.log(response.data);
                }
            }, error: function (err) {
                console.error(err);
            }
        });
    });
});