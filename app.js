function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    var result = document.getElementById('result');
    var email = document.getElementById('email').value;
    result.innerText = '';
    if (validateEmail(email) && check_size(email)) {
        result.innerText = email + ' is valid .';
        result.style.color = 'green';
    } else {
        result.innerText = email + ' is not valid .';
        result.style.color = 'red';
    }
}

function cls() {
    var result = document.getElementById('result');
    result.innerText = '';
}

function check_size(e) {
    var val = e.split('');
    for (var i = 0; i < val.length; i++) {
        if (val[i] == '@') break;
    }
    if (i < 64) return true;
    else return false;
}