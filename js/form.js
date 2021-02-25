
function onSubClick(event) {
    event.preventDefault();

    let firstName = document.getElementById("id_first").value;
    let lastName = document.getElementById("id_last").value;
    let email = document.getElementById("id_mail").value;
    let massage = document.getElementById("id_massage").value;

    let subSpan = document.getElementById('subSpan').innerHTML;

    document.getElementById('name').innerHTML = '';
    document.getElementById('last').innerHTML = '';
    document.getElementById('mail').innerHTML = '';
    document.getElementById('mas').innerHTML = '';

    if (firstName < 2) {
        document.getElementById('name').innerHTML = "Your First Name Is Too Short!"
       return document.getElementById('name').style.color =  "red";
    }
    if (lastName < 2) {
         document.getElementById('last').innerHTML = "Your Last Name Is Too Short!"
        return document.getElementById('last').style.color =  "red";
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1  ) {
        document.getElementById('mail').innerHTML = "Please enter valid email!"
        return document.getElementById('mail').style.color =  "red";
    }
    if (massage < 2) {
        document.getElementById("mas").innerHTML = "Please write your message!"
        return document.getElementById("mas").style.color =  "red";
    }
    document.getElementById("id_first").value = '';
    document.getElementById("id_last").value= '';
    document.getElementById("id_mail").value = '';
    document.getElementById("id_massage").value = '';
    document.getElementById('subSpan').innerHTML = "Your message has been sent";
    return document.getElementById('subSpan').style.color =  "green";
    
}
