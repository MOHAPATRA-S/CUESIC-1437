
export function handleValidations(text, type) {
  
     if (type === 'email') {
         let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
         if (text === '') {
             return {
                 status: false,
                 value: text,
                 errorText: ' Please enter Email.'
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
     }else if(type === 'password') {
         // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
         if (text === '') {
             return {
                 value: text,
                 status: false,
                 errorText: ' Please enter Password.'
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
