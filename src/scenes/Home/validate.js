let password
export function handleValidations(text, type) {

    if (type === 'email') {
        let emailRegex = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/i;
        if (text === '') {
            return {
                status: false,
                value: text,
                errorText: 'Please enter email or mobile number.'
            }
        }
        else if (!emailRegex.test(text)) {
            return {
                status: false,
                value: text,
                errorText: 'Please enter valid email or mobile number.'
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
                errorText: 'Please enter new password.'
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
    } 
}