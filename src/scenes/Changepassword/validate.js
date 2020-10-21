let password
let oldpassword
export function handleValidations(text, type) {
    if (type === 'oldpassword') {
        // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter your Old Password.'
            }
        } else if (text.length < 8) {
            return {
                value: text,
                status: false,
                errorText: 'Minimum length should be 8 characters.'
            }
        }
        else {
            oldpassword = text
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
        else if (oldpassword === text) {
            return {
                value: text,
                status: false,
                errorText: "Old password and New Password can't be same"
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