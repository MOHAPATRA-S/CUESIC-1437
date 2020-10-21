
export function handleValidations(text, type) {
    if (type === 'nameofcard') {

        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter name of card.'
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
    else if (type === 'cardnumber') {

        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter card number.'
            }
        }
       
        else {
          
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    } else if (type === 'expiredate') {

        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter expire date.'
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

    else {

        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter cvv.'
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
}