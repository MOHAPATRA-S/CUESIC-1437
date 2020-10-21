let password
export function handleValidations(text, type) {

 if (type === 'password') {
        // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter New password.'
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