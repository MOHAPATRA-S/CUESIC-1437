export default handleOTPValidations = (text, prevInputRef, nextInputRef) => {
    if (text === '') {
        prevInputRef.current.focus();
        return {
            status: false,
            value: text,
            errorText: '*required.'
        }
    } else {
        if (nextInputRef) {
            nextInputRef.current.focus()
            return {
                value: text,
                status: true,
                errorText: ''
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