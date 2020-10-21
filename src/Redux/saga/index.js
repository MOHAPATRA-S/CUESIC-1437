import {all,fork} from 'redux-saga/effects';
import {
    SignIn,
    SignUp,
    Verify,
    ForgotPassword,
    ChangePassword,
    ResetPassword,
    SocialLogin
    
} from "./saga"
export function* rootSaga(){
   
   yield all([

    fork(SignIn),
    fork(SignUp),
    fork(Verify),
    fork(ForgotPassword),
    fork(ChangePassword),
    fork(ResetPassword),
    fork(SocialLogin)


   ])
}
