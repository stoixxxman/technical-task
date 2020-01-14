$(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
    //this.value = this.value.replace(/[^0-9\.]/g,'');
    $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
});

$("form").submit(function (e) {
    e.preventDefault();
    let name = $("input[name='name']").val();
    let price = $("input[name='price']").val();

    $(".data-table tbody").append("<tr data-name='" + name + "' data-price='" + price + "'><td>" + name + "</td><td>" + price + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");

    $("input[name='name']").val('');
    $("input[name='price']").val('');
});

$("body").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    let name = $(this).parents("tr").attr('data-name');
    let price = $(this).parents("tr").attr('data-price');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="' + name + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_price" value="' + price + '">');

    $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});

$("body").on("click", ".btn-cancel", function () {
    let name = $(this).parents("tr").attr('data-name');
    let price = $(this).parents("tr").attr('data-price');

    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(price);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function () {
    let name = $(this).parents("tr").find("input[name='edit_name']").val();
    let price = $(this).parents("tr").find("input[name='edit_price']").val();

    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(price);

    $(this).parents("tr").attr('data-name', name);
    $(this).parents("tr").attr('data-price', price);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});
