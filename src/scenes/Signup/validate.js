let password
export function handleValidations(text, type) {

    if (type === 'email') {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if (text === '') {
            return {
                status: false,
                value: text,
                errorText: 'Please enter Email.'
            }
        }
        else if (!emailRegex.test(text)) {
            return {
                status: false,
                value: text,
                errorText: 'Please enter valid Email.'
            }

        }
        else {

            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    } else if (type === 'firstname') {

        if (text === '') {

            return {
                value: text,
                status: false,
                errorText: 'Please enter Name.'
            }
        }
        else if (text.length < 3) {
            return {
                value: text,
                status: false,
                errorText: 'Minimum length should be two.'
            }
        }

        else {

            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }
    else if (type === 'mobilenumber') {

        let phoneRegex = /^((?!(0))[0-9]{10})$/i;

        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter Mobile number.'
            }
        }
        else if (!phoneRegex.test(text)) {
            return {
                status: false,
                value: text,
                errorText: 'Please enter valid Mobile number.'
            }

        }
        else {
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }
    else if (type === 'password') {
        // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter New Password.'
            }
        } else if (text.length < 8) {
            return {
                value: text,
                status: false,
                errorText: 'Minimum length should be 8 characters.'
            }
        }
        else {
            password = text
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    } else if (type === 'confirmpassword') {
       
        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter Password again to confirm.'
            }
        } else if (password !== text) {
            return {
                value: text,
                status: false,
                errorText: 'Password & Confirm Password must be same.'
            }
        } else {
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }
}