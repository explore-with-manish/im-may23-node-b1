$(document).ready(function () {

    $.post('http://localhost:3000/account/getToken', { username: 'indiamart', password: 'indiamart' }, function (data, status) {
        if (data.success) {
            window.sessionStorage.setItem('tk', data.token);
        } else {
            console.error(data.message);
        };
    })

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
                }
            }, error: function (err) {
                console.error(err);
            }, beforeSend: function (xhr) {
                xhr.setRequestHeader('x-access-token', window.sessionStorage.getItem('tk'));
            }
        });
    });
});