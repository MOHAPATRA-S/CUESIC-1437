import {
    LOGIN,
    SIGNUP,
    VERIFY,
    CLEAR_DATA,
    FORGOT,
    CHANGEPASSWORD,
    RESETPASSWORD,
    SOCIALLOGIN,
    STATICCONTENT,
    CONTACTUS,
    GETPROFILE,
    EDITPROFILE,
    GENERATECODE,
    ADDNEWCARD,
    DELETEACCOUNT,
    GETPAYMENTLIST,
    INVITE,
    JOIN,
    SAVESESSIONDETAILS,
    RESENDOTP,
    JOINMEMBER,
    REMOVEJOINMEMBER,
    ADDSONG,
    REMOVESONG,
    GETQUEUELIST,
    GETAPPLINKHISTORY,
    ADDMORESONG,
    SAVEPLAYLIST,
    GETPLAYLIST,
    PAYMENTPROCESS,
    RECENTLYPLAYED,
    GETSUBSCRIPTIONLIST,
    LINKLIBRARY,
    DEZEERSONGLIST
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
export const Resend = payload => { 
   
    return { type: RESENDOTP, payload }
}

export const changepassword = (payload,Token) => { 
   
    return { type: CHANGEPASSWORD, payload,Token }
}
export const resetpassword = (payload) => { 
   
    return { type: RESETPASSWORD, payload}
}
export const Staticcontent = (payload) => { 
   
    return { type: STATICCONTENT, payload}
}
export const StaticContactus = (payload) => { 
   
    return { type: CONTACTUS, payload}
}

export const Getprofile = (payload) => { 
   
    return { type: GETPROFILE, payload}
}
export const Editprofile = (payload,Token) => { 
   
    return { type: EDITPROFILE, payload,Token}
}
export const GenerateCode = (payload) => { 
   
    return { type: GENERATECODE, payload}
}

export const AddNewcard = (payload,Token) => { 
   
    return { type: ADDNEWCARD, payload,Token}
}
export const DeleteAccount = (payload) => { 
   
    return { type: DELETEACCOUNT, payload}
}
export const GetPayment = (payload) => { 
   
    return { type: GETPAYMENTLIST, payload}
}

export const SentInvitation = (payload,Token) => { 
   
    return { type: INVITE, payload,Token}
}

export const Joinsessionbymemebre = (payload,Token) => { 
   
    return { type: JOIN, payload,Token}
}
export const Savesessiondetails = (payload,Token) => { 
   
    return { type: SAVESESSIONDETAILS, payload,Token}
}
export const JoinMemberlist = (payload,Token) => { 
   
    return { type: JOINMEMBER, payload,Token}
}

export const RemoveJoinMember = (payload,Token) => { 
   
    return { type: REMOVEJOINMEMBER, payload,Token}
}

export const AddSong = (payload,Token) => { 
   
    return { type: ADDSONG, payload,Token}
}
export const AddmoreSong = (payload,Token) => { 
   
    return { type: ADDMORESONG, payload,Token}
}
export const RemoveSong = (payload,Token) => { 
   
    return { type: REMOVESONG, payload,Token}
}
export const GetQueuelist = (payload,Token) => { 
   
    return { type: GETQUEUELIST, payload,Token}
}

export const GetUserLinkApp = (payload,Token) => { 
   
    return { type: GETAPPLINKHISTORY, payload,Token}
}

export const Saveplaylist = (payload,Token) => { 
   
    return { type: SAVEPLAYLIST, payload,Token}
}

export const Getplaylist = (payload) => { 
   
    return { type: GETPLAYLIST, payload}
}

export const Paymentprocess = (payload,Token) => { 
   
    return { type: PAYMENTPROCESS, payload,Token}
}

export const Recentlyplayed = (payload,) => { 
   
    return { type: RECENTLYPLAYED, payload}
}

export const Getsubscriptionlist = (payload,) => { 
   
    return { type: GETSUBSCRIPTIONLIST, payload}
}
export const Linklibrary = (payload,Token) => { 
   
    return { type: LINKLIBRARY, payload,Token}
}

export const GetDezeersonglist = (payload,Token) => { 
   
    return { type: DEZEERSONGLIST, payload,Token}
}