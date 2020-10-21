import { takeLatest, put } from 'redux-saga/effects';
import API from "../../services/api/rest"
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    LOADER,
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    VERIFY,
    FORGOT,
    FORGOT_FAILURE,
    FORGOT_SUCCESS,
    CHANGEPASSWORD_FAILURE,
    CHANGEPASSWORD_SUCCESS,
    CHANGEPASSWORD,
    RESETPASSWORD,
    RESETPASSWORD_FAILURE,
    RESETPASSWORD_SUCCESS,
    SOCIALLOGIN,
    SOCIALLOGIN_FAILURE,
    SOCIALLOGIN_SUCCESS

} from '../../Action/ActionType';
// Login

export function* signin(params) {
    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "logIn", 'POST')
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: LOGIN_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: LOGIN_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: LOGIN_FAILURE, message: res.data })
    }
}

export function* SignIn() {

    try {
        yield takeLatest(LOGIN, signin);
    }
    catch (ex) {
        yield put({ type: LOGIN_FAILURE, message: ex })
    }
}


// SocialLogin

export function* sociallogin(params) {
    yield put({ type: LOADER, loading: true })
    console.log("responseof params", params)
    const res = yield API(params.payload, "socialLogin", 'POST')
    console.log("responseof login", res)
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SOCIALLOGIN_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SOCIALLOGIN_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: SOCIALLOGIN_FAILURE, message: res.data })
    }
}

export function* SocialLogin() {

    try {
        yield takeLatest(SOCIALLOGIN, sociallogin);
    }
    catch (ex) {
        yield put({ type: SOCIALLOGIN_FAILURE, message: ex })
    }
}

// Signup

export function* signup(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "signUp", 'POST',)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SIGNUP_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SIGNUP_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: SIGNUP_FAILURE, message: res.data })
    }
}
export function* SignUp() {
    try {
        yield takeLatest(SIGNUP, signup);
    }
    catch (ex) {
        yield put({ type: SIGNUP_FAILURE, message: ex })
    }

}

// forgotpassword

export function* forgotpassword(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "forgotPassword", 'POST',)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: FORGOT_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: FORGOT_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: FORGOT_SUCCESS, message: res.data })
    }
}
export function* ForgotPassword() {
    try {
        yield takeLatest(FORGOT, forgotpassword);
    }
    catch (ex) {
        yield put({ type: FORGOT_FAILURE, message: ex })
    }

}
// verify

export function* verify(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "otpVerify", 'POST',)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: VERIFY_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: VERIFY_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: VERIFY_SUCCESS, message: res.data })
    }
}
export function* Verify() {
    try {
        yield takeLatest(VERIFY, verify);
    }
    catch (ex) {
        yield put({ type: VERIFY_FAILURE, message: ex })
    }

}

// changepassword

export function* changepassword(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "changePassword", 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: CHANGEPASSWORD_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: CHANGEPASSWORD_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: CHANGEPASSWORD_SUCCESS, message: res.data })
    }
}
export function* ChangePassword() {
    try {
        yield takeLatest(CHANGEPASSWORD, changepassword);
    }
    catch (ex) {
        yield put({ type: CHANGEPASSWORD_FAILURE, message: ex })
    }

}


// changepassword

export function* resetpassword(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, "resetPassword", 'POST',)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: RESETPASSWORD_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: RESETPASSWORD_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: RESETPASSWORD_SUCCESS, message: res.data })
    }
}
export function* ResetPassword() {
    try {
        yield takeLatest(RESETPASSWORD, resetpassword);
    }
    catch (ex) {
        yield put({ type: RESETPASSWORD_FAILURE, message: ex })
    }

}



