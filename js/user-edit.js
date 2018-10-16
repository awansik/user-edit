var url = "http://localhost:8080/Users/";

$().ready(() => {

    $("#getuser").click(() => {
        getUserByPrimaryKey($("#userid").val());
    });
    $("#save").click(() => {
        updateUser();
    });

});

function updateUser() {
    var id = $("#pid").val();
    var userName = $("#pusername").val();
    var password = $("#ppassword").val();
    var firstName = $("#pfirstname").val();
    var lastName = $("#plastname").val();
    var phoneNumber = $("#pphonenumber").val();
    var email = $("#pemail").val();
    var reviewer = $("#previewer").val();
    var admin = $("#padmin").val();
    var active = $("#pactive").val();

    var user = {
        id: id,
        userName: username,
        password: password,
        firstName: firstname,
        lastName: lastname,
        phoneNumber: phonenumber,
        email: email,
        reviewer: reviewer,
        admin: admin,
        active: active
    }

    $.post(url+"Change", user)
        .then((resp) => {
            console.log(resp);
        });
}

function getUserByPrimaryKey(id) {
    console.log("getUserByPrimaryKey()");
    $.getJSON(url+"Get/"+id)
        .then((resp) => {
            render(resp.data);
        })
}

function render(user) {
    $("#pid").val(user.id);
    $("#pfname").val(user.firstName);
    $("#plname").val(user.lastName);
    $("#pusername").val(user.userName);
    $("#ppassword").val(user.password);
    $("#pphone").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.reviewer);
    $("#padmin").prop("checked", user.admin);
    $("#pactive").prop("checked", user.active);
}