function loginFunction() {

    const username = document.forms.login.username.value;
    const password = document.forms.login.password.value;

    if (username && password) {

        fetch("/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.response === true) {
                    window.location.reload();
                } else {
                    alert(data.response);
                }
            });

        return;

    } else {
        alert("You have to provide username and password.");
        return;
    }

}


function registerFunction() {

    const username = document.forms.register.username.value;
    const password = document.forms.register.password.value;

    if (username && password) {
        //password validation
        if (password.length < 8) {
            alert("Password must be longer than 8 characters.");
            return false;

        } else {

            fetch("/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.response === true) {
                        // go to the home page after successfully singing up
                        window.location.replace("/");
                    } else {
                        alert(data.response);
                    }
                });

            return;

        }

    } else {
        alert("You have to provide username and password.");
        return false;
    }

}