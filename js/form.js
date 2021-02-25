
function onSubClick(event) {
    event.preventDefault();

    var firstName = document.getElementById("id_first").value;
    var lastName = document.getElementById("id_last").value;
    var email = document.getElementById("id_mail").value;
    var massage = document.getElementById("id_massage").value;

    if (firstName.length < 2) {
        alert("Your First Name Is Too Short!")
    } else if (lastName.length < 2) {
        alert("Your Last Name Is Too Short!")
    } else if (email.indexOf("@") == -1) {
        alert("Please enter valid email!");
    } else if (massage.length < 2) {
        alert("Please write your message!")
    } else {
       
        alert("Your message has been sent");
        document.getElementById("id_form").submit();
        
    }

}
