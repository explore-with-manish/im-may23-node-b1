$(document).ready(function () {
    $('#btnLoad').click(function () {
        // alert("Button was clicked...");

        // Do a AJAX call to get the JSON data and display the HTML on client side
        $('#empTableBody').empty();

        $.ajax({
            url: 'http://localhost:3000/api/employees',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                if (response.data.length > 0) {
                    var tmpl = $.templates('#employeeRowTemplate');
                    var html = tmpl.render(response.data);
                    $('#empTableBody').append(html);

                    // $.each(response.data, function (index, item) {
                    //     var row = $('<tr>');
                    //     var tdId = $('<td>').text(item.id);

                    //     row.append(tdId);

                    //     var tdName = $('<td>').text(item.name);
                    //     row.append(tdName);

                    //     $('#empTableBody').append(row);
                    // });
                }
            }, error: function (err) {
                console.error(err);
            }
        });
    });
});