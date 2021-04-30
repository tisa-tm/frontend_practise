function validateForm() {
    var x = document.forms['updateForm']['name'].value;
    var y = document.forms['updateForm']['num'].value
    if (x == ""){
        alert("The field cannot be empty");
        return false;
    }
    if (y == ""){
        alert("The field cannot be empty");
        return false;
    }
}

