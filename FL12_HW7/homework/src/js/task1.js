let email = prompt('Enter your email', '');

const emailLength = 5;
const passwordLength = 6;

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < emailLength) {
    alert('I don’t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Enter your password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass') {
        let changePassword = confirm('Do you want to change your password?');
        if (changePassword === false) {
            alert('You have failed the change');
        } else if (changePassword === true) {
            let oldPassword = prompt('Enter your old password');
            if (oldPassword === '' || oldPassword === null) {
                alert('Canceled');
            } else if (email === 'user@gmail.com' && oldPassword === 'UserPass' ||
                email === 'admin@gmail.com' && oldPassword === 'AdminPass') {
                let newPassword = prompt('Enter new password');
                if (newPassword === '' || newPassword === null) {
                    alert('Canceled');
                } else if (newPassword.length < passwordLength) {
                    alert('It’s too short password. Sorry');
                } else {
                    let newPasswordAgain = prompt('Enter new password again');
                    if (newPasswordAgain === '' || newPasswordAgain === null) {
                        alert('You wrote the wrong password.');
                    } else if (newPasswordAgain.length < passwordLength) {
                        alert('You wrote the wrong password');

                    } else {
                        alert('You have successfully changed your password');
                    } 
                }
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}






