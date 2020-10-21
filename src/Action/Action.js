import {
    LOGIN,
    SIGNUP,
    VERIFY,
    RESENDOTP,
    CLEAR_DATA,
    FORGOT,
    CHANGEPASSWORD,
    RESETPASSWORD,
    SOCIALLOGIN

   
} from './ActionType';
export const clearAction = payload => {
  
    return { type: CLEAR_DATA, payload }
}
export const SignIn = payload => {
   
    return { type: LOGIN, payload }
}
export const SocialSignIn = payload => {
   
    return { type: SOCIALLOGIN, payload }
}
export const SignUp = payload => {
   
    return { type: SIGNUP, payload }
}

export const Forgotpassword = payload => { 
   
    return { type: FORGOT, payload }
}
export const Verify = payload => { 
   
    return { type: VERIFY, payload }
}

export const changepassword = (payload,Token) => { 
   
    return { type: CHANGEPASSWORD, payload,Token }
}
export const resetpassword = (payload) => { 
   
    return { type: RESETPASSWORD, payload}
}

