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
    SOCIALLOGIN_SUCCESS,
    STATICCONTENT,
    STATICCONTENT_FAILURE,
    STATICCONTENT_SUCCESS,
    CONTACTUS,
    CONTACTUS_FAILURE,
    CONTACTUS_SUCCESS,
    GETPROFILE,
    GETPROFILE_FAILURE,
    GETPROFILE_SUCCESS,
    EDITPROFILE,
    EDITPROFILE_FAILURE,
    EDITPROFILE_SUCCESS,
    GENERATECODE,
    GENERATECODE_FAILURE,
    GENERATECODE_SUCCESS,
    ADDNEWCARD,
    ADDNEWCARD_FAILURE,
    ADDNEWCARD_SUCCESS,
    DELETEACCOUNT,
    DELETEACCOUNT_FAILURE,
    DELETEACCOUNT_SUCCESS,
    GETPAYMENTLIST,
    GETPAYMENTLIST_FAILURE,
    GETPAYMENTLIST_SUCCESS,
    INVITE,
    INVITE_FAILURE,
    INVITE_SUCCESS,
    JOIN_FAILURE,
    JOIN_SUCCESS,
    JOIN,
    SAVESESSIONDETAILS,
    SAVESESSIONDETAILS_FAILURE,
    SAVESESSIONDETAILS_SUCCESS,
    RESENDOTP,
    RESENDOTP_FAILURE,
    RESENDOTP_SUCCESS,
    JOINMEMBER,
    JOINMEMBER_FAILURE,
    JOINMEMBER_SUCCESS,
    REMOVEJOINMEMBER,
    REMOVEJOINMEMBER_FAILURE,
    REMOVEJOINMEMBER_SUCCESS,
    ADDSONG,
    ADDSONG_FAILURE,
    ADDSONG_SUCCESS,
    REMOVESONG,
    REMOVESONG_FAILURE,
    REMOVESONG_SUCCESS,
    GETQUEUELIST,
    GETQUEUELIST_FAILURE,
    GETQUEUELIST_SUCCESS,
    GETAPPLINKHISTORY_FAILURE,
    GETAPPLINKHISTORY_SUCCESS,
    GETAPPLINKHISTORY,
    ADDMORESONG,
    ADDMORESONG_FAILURE,
    ADDMORESONG_SUCCESS,
    SAVEPLAYLIST,
    SAVEPLAYLIST_FAILURE,
    SAVEPLAYLIST_SUCCESS,
    GETPLAYLIST,
    GETPLAYLIST_FAILURE,
    GETPLAYLIST_SUCCESS,
    PAYMENTPROCESS,
    PAYMENTPROCESS_FAILURE,
    PAYMENTPROCESS_SUCCESS,
    LIMIT_SUCCESS,
    RECENTLYPLAYED,
    RECENTLYPLAYED_FAILURE,
    RECENTLYPLAYED_SUCCESS,
    GETSUBSCRIPTIONLIST,
    GETSUBSCRIPTIONLIST_FAILURE,
    GETSUBSCRIPTIONLIST_SUCCESS,
    LINKLIBRARY,
    LINKLIBRARY_FAILURE,
    LINKLIBRARY_SUCCESS,
    DEZEERSONGLIST_SUCCESS,
    DEZEERSONGLIST_FAILURE,
    DEZEERSONGLIST
} from '../../Action/ActionType';

// Login
export function* signin(params) {
    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "user/logIn", 'POST')
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
    const res = yield API(params.payload, "user/socialLogin", 'POST')
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
    const res = yield API(params.payload, "user/signUp", 'POST',)
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
    const res = yield API(params.payload, "user/forgotPassword", 'POST',)
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
        yield put({ type: FORGOT_FAILURE, message: res.data })
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
    const res = yield API(params.payload, "user/otpVerify", 'POST',)
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
        yield put({ type: VERIFY_FAILURE, message: res.data })
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

// resend
export function* resend(params) {
    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "user/forgotPassword", 'POST',)
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: RESENDOTP_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: RESENDOTP_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: RESENDOTP_FAILURE, message: res.data })
    }
}
export function* ResendOtp() {
    try {
        yield takeLatest(RESENDOTP, resend);
    }
    catch (ex) {
        yield put({ type: RESENDOTP_FAILURE, message: ex })
    }
}

// changepassword
export function* changepassword(params) {
    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, "user/changePassword", 'POST', params.Token)

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
        yield put({ type: CHANGEPASSWORD_FAILURE, message: res.data })
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

    const res = yield API(params.payload, "user/resetPassword", 'POST',)

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
        yield put({ type: RESETPASSWORD_FAILURE, message: res.data })
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



//staticapi

export function* staticapi(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API("", `static/viewStaticPage/${params.payload}`, 'GET',)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: STATICCONTENT_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: STATICCONTENT_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: STATICCONTENT_FAILURE, message: res.data })
    }
}
export function* StaticContent() {
    try {
        yield takeLatest(STATICCONTENT, staticapi);
    }
    catch (ex) {
        yield put({ type: STATICCONTENT_FAILURE, message: ex })
    }

}

//contactus

export function* contactus(params) {
    yield put({ type: LOADER, loading: true })
    const res = yield API("", 'user/getContactUs', 'GET',)
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: CONTACTUS_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: CONTACTUS_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: CONTACTUS_FAILURE, message: res.data })
    }
}
export function* ContactUs() {
    try {
        yield takeLatest(CONTACTUS, contactus);
    }
    catch (ex) {
        yield put({ type: CONTACTUS_FAILURE, message: ex })
    }

}


//getprofile

export function* getprofile(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API("", 'user/getProfile', 'GET', params.payload)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETPROFILE_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETPROFILE_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: GETPROFILE_FAILURE, message: res.data })
    }
}
export function* GetProfile() {
    try {
        yield takeLatest(GETPROFILE, getprofile);
    }
    catch (ex) {
        yield put({ type: GETPROFILE_FAILURE, message: ex })
    }

}

//editProfile

export function* editProfile(params) {
    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/editProfile', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: EDITPROFILE_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: EDITPROFILE_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: EDITPROFILE_FAILURE, message: res.data })
    }
}
export function* EditProfile() {

    try {
        yield takeLatest(EDITPROFILE, editProfile);
    }
    catch (ex) {
        yield put({ type: EDITPROFILE_FAILURE, message: ex })
    }

}


//generatecode
export function* generatecode(params) {
    yield put({ type: LOADER, loading: true })
    const res = yield API("", 'user/generateCode', 'GET',)
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GENERATECODE_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GENERATECODE_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: GENERATECODE_FAILURE, message: res.data })
    }
}
export function* Generatecode() {
    try {
        yield takeLatest(GENERATECODE, generatecode);
    }
    catch (ex) {
        yield put({ type: GENERATECODE_FAILURE, message: ex })
    }

}

//addnewcard

export function* addnewcard(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/addCardDetails', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: ADDNEWCARD_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: ADDNEWCARD_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: ADDNEWCARD_FAILURE, message: res.data })
    }
}
export function* AddNewcard() {
    try {
        yield takeLatest(ADDNEWCARD, addnewcard);
    }
    catch (ex) {
        yield put({ type: ADDNEWCARD_FAILURE, message: ex })
    }

}

//deleteaccount

export function* deleteaccount(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API({}, 'user/deleteAccount', 'POST', params.payload)
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: DELETEACCOUNT_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: DELETEACCOUNT_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: DELETEACCOUNT_FAILURE, message: res.data })
    }
}
export function* Deleteaccount() {
    try {
        yield takeLatest(DELETEACCOUNT, deleteaccount);
    }
    catch (ex) {
        yield put({ type: DELETEACCOUNT_FAILURE, message: ex })
    }

}

// getpayment

export function* getpayment(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API("", 'user/getCardsList', 'GET', params.payload)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETPAYMENTLIST_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETPAYMENTLIST_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: GETPAYMENTLIST_FAILURE, message: res.data })
    }
}
export function* Getpayment() {
    try {
        yield takeLatest(GETPAYMENTLIST, getpayment);
    }
    catch (ex) {
        yield put({ type: GETPAYMENTLIST_FAILURE, message: ex })
    }

}

// InviteContactFrnds

export function* invitationtocontact(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/sendInvitaion', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: INVITE_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: INVITE_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: INVITE_FAILURE, message: res.data })
    }
}
export function* InviteContactFrnds() {
    try {
        yield takeLatest(INVITE, invitationtocontact);
    }
    catch (ex) {
        yield put({ type: INVITE_FAILURE, message: ex })
    }

}

// joinsessionbymember

export function* joinsessionbymember(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/joinSessionByMember', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: JOIN_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: JOIN_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: JOIN_FAILURE, message: res.data })
    }
}
export function* JoinSession() {

    try {
        yield takeLatest(JOIN, joinsessionbymember);
    }
    catch (ex) {
        yield put({ type: JOIN_FAILURE, message: ex })
    }

}


// saveSessiondeatils

export function* saveSessiondetails(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/createSession', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SAVESESSIONDETAILS_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SAVESESSIONDETAILS_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: SAVESESSIONDETAILS_FAILURE, message: res.data })
    }
}
export function* SaveSessiondetails() {

    try {
        yield takeLatest(SAVESESSIONDETAILS, saveSessiondetails);
    }
    catch (ex) {
        yield put({ type: SAVESESSIONDETAILS_FAILURE, message: ex })
    }

}


// joinmemberlist

export function* joinmemberlist(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/getSessionJoinedBy', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: JOINMEMBER_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: JOINMEMBER_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: JOINMEMBER_FAILURE, message: res.data })
    }
}
export function* Getjoinmember() {

    try {
        yield takeLatest(JOINMEMBER, joinmemberlist);
    }
    catch (ex) {
        yield put({ type: JOINMEMBER_FAILURE, message: ex })
    }

}


// removejoinmember

export function* removejoinmember(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/removeUserByhost', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: REMOVEJOINMEMBER_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: REMOVEJOINMEMBER_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: REMOVEJOINMEMBER_FAILURE, message: res.data })
    }
}
export function* Removejoinmember() {

    try {
        yield takeLatest(REMOVEJOINMEMBER, removejoinmember);
    }
    catch (ex) {
        yield put({ type: REMOVEJOINMEMBER_FAILURE, message: ex })
    }

}


// addsong

export function* addsong(params) {

    yield put({ type: LOADER, loading: true })
    const res = yield API(params.payload, 'user/addSongsInSession', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: ADDSONG_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: ADDSONG_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: ADDSONG_FAILURE, message: res.data })
    }
}
export function* Addsong() {

    try {
        yield takeLatest(ADDSONG, addsong);
    }
    catch (ex) {
        yield put({ type: ADDSONG_FAILURE, message: ex })
    }

}


// removesong

export function* removesong(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/removeSongsFromSession', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: REMOVESONG_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: REMOVESONG_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: REMOVESONG_FAILURE, message: res.data })
    }
}
export function* Removesong() {

    try {
        yield takeLatest(REMOVESONG, removesong);
    }
    catch (ex) {
        yield put({ type: REMOVESONG_FAILURE, message: ex })
    }

}


// getqueuelist

export function* getqueuelist(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/getSessionSongList', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETQUEUELIST_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETQUEUELIST_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: GETQUEUELIST_FAILURE, message: res.data })
    }
}
export function* Getqueuelist() {

    try {
        yield takeLatest(GETQUEUELIST, getqueuelist);
    }
    catch (ex) {
        yield put({ type: GETQUEUELIST_FAILURE, message: ex })
    }

}


// getuserLinkapphistory

export function* userLinkapphistory(params) {

    yield put({ type: LOADER, loading: true })
    console.log("getuserLinkapphistory==>", params)
    const res = yield API("", 'user/myLinkedApps', 'GET', params.payload)
    console.log("getuserLinkapphistory==>", res)
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETAPPLINKHISTORY_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETAPPLINKHISTORY_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: GETAPPLINKHISTORY_FAILURE, message: res.data })
    }
}
export function* Userapplinklist() {
    console.log("getuserLinkapphistory==>")
    try {
        yield takeLatest(GETAPPLINKHISTORY, userLinkapphistory);
    }
    catch (ex) {
        yield put({ type: GETAPPLINKHISTORY_FAILURE, message: ex })
    }

}
// addmoresong

export function* addmoresong(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/addSongsInSession', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: ADDMORESONG_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else if (res.data.response_code === 201) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: LIMIT_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: ADDMORESONG_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: ADDMORESONG_FAILURE, message: res.data })
    }
}
export function* AddMoreSong() {

    try {
        yield takeLatest(ADDMORESONG, addmoresong);
    }
    catch (ex) {
        yield put({ type: ADDMORESONG_FAILURE, message: ex })
    }

}

// saveplaylist

export function* saveplaylist(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/addPlayList', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SAVEPLAYLIST_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: SAVEPLAYLIST_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: SAVEPLAYLIST_FAILURE, message: res.data })
    }
}
export function* SavePlaylist() {

    try {
        yield takeLatest(SAVEPLAYLIST, saveplaylist);
    }
    catch (ex) {
        yield put({ type: SAVEPLAYLIST_FAILURE, message: ex })
    }

}



// getplaylist

export function* getplaylist(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API("", 'user/getPlaylists', 'GET', params.payload)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETPLAYLIST_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETPLAYLIST_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: GETPLAYLIST_FAILURE, message: res.data })
    }
}
export function* GetPlaylist() {

    try {
        yield takeLatest(GETPLAYLIST, getplaylist);
    }
    catch (ex) {
        yield put({ type: GETPLAYLIST_FAILURE, message: ex })
    }

}



// paymentprocess
export function* paymentprocess(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API(params.payload, 'user/payment', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: PAYMENTPROCESS_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: PAYMENTPROCESS_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: PAYMENTPROCESS_FAILURE, message: res.data })
    }
}
export function* PaymentProcess() {

    try {
        yield takeLatest(PAYMENTPROCESS, paymentprocess);
    }
    catch (ex) {
        yield put({ type: PAYMENTPROCESS_FAILURE, message: ex })
    }

}


// recentlyplayed
export function* recentlyplayed(params) {

    yield put({ type: LOADER, loading: true })

    const res = yield API("", 'user/recentlyPlayedSongs', 'GET', params.payload)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: RECENTLYPLAYED_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: RECENTLYPLAYED_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: RECENTLYPLAYED_FAILURE, message: res.data })
    }
}
export function* RecentlyPlayed() {

    try {
        yield takeLatest(RECENTLYPLAYED, recentlyplayed);
    }
    catch (ex) {
        yield put({ type: RECENTLYPLAYED_FAILURE, message: ex })
    }

}



// getsubscriptionlist 
export function* getsubscriptionlist(params) {
    yield put({ type: LOADER, loading: true })
    const res = yield API("", 'user/getSubscriptionList', 'GET', params.payload)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETSUBSCRIPTIONLIST_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: GETSUBSCRIPTIONLIST_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: GETSUBSCRIPTIONLIST_FAILURE, message: res.data })
    }
}
export function* GetsubscriptionList() {
    try {
        yield takeLatest(GETSUBSCRIPTIONLIST, getsubscriptionlist);
    }
    catch (ex) {
        yield put({ type: GETSUBSCRIPTIONLIST_FAILURE, message: ex })
    }

}

// linklibrary 
export function* linkLibraryapp(params) {

    const res = yield API(params.payload, 'user/linkAccount', 'POST', params.Token)

    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: LINKLIBRARY_SUCCESS, payload: res.data.result, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: LINKLIBRARY_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: LINKLIBRARY_FAILURE, message: res.data })
    }
}
export function* LinkLibraryapp() {
    try {
        yield takeLatest(LINKLIBRARY, linkLibraryapp);
    }
    catch (ex) {
        yield put({ type: LINKLIBRARY_FAILURE, message: ex })
    }

}

// GetDezeersonglist 
export function* Getdezeersonglist(params) {
    // yield put({ type: LOADER, loading: true })
    const res = yield API("", `user/searchDeezerTrack?search=${params.payload}`, 'GET', params.Token)
    console.log("console.log", res)
    if (res.status === 200) {
        if (res.data.response_code === 200) {
            yield put({ type: LOADER, loading: false })
            yield put({ type: DEZEERSONGLIST_SUCCESS, payload: res.data.result.data, message: res.data.response_message })
        }
        else {
            yield put({ type: LOADER, loading: false })
            yield put({ type: DEZEERSONGLIST_FAILURE, message: res.data.response_message })
        }
    }
    else {
        yield put({ type: LOADER, loading: false })
        yield put({ type: DEZEERSONGLIST_FAILURE, message: res.data })
    }
}
export function* GetDezeerSonglist() {
    try {
        yield takeLatest(DEZEERSONGLIST, Getdezeersonglist);
    }
    catch (ex) {
        yield put({ type: DEZEERSONGLIST_FAILURE, message: ex })
    }

}