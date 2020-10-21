import initialState from "./initialState";
import {
    CLEAR_DATA,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    LOADER,
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    RESENDOTP_SUCCESS,
    RESENDOTP_FAILURE,
    FORGOT_SUCCESS,
    FORGOT_FAILURE,
    CHANGEPASSWORD_SUCCESS,
    CHANGEPASSWORD_FAILURE,
    RESETPASSWORD_FAILURE,
    RESETPASSWORD_SUCCESS,
    SOCIALLOGIN_FAILURE,
    SOCIALLOGIN_SUCCESS,
    STATICCONTENT_FAILURE,
    STATICCONTENT_SUCCESS,
    CONTACTUS_FAILURE,
    CONTACTUS_SUCCESS,
    GETPROFILE_FAILURE,
    GETPROFILE_SUCCESS,
    EDITPROFILE_FAILURE,
    EDITPROFILE_SUCCESS,
    GENERATECODE_FAILURE,
    GENERATECODE_SUCCESS,
    ADDNEWCARD_FAILURE,
    ADDNEWCARD_SUCCESS,
    DELETEACCOUNT_FAILURE,
    DELETEACCOUNT_SUCCESS,
    GETPAYMENTLIST_FAILURE,
    GETPAYMENTLIST_SUCCESS,
    INVITE_FAILURE,
    INVITE_SUCCESS,
    JOIN_FAILURE,
    JOIN_SUCCESS,
    SAVESESSIONDETAILS_FAILURE,
    SAVESESSIONDETAILS_SUCCESS,
    JOINMEMBER_FAILURE,
    JOINMEMBER_SUCCESS,
    REMOVEJOINMEMBER_FAILURE,
    REMOVEJOINMEMBER_SUCCESS,
    ADDSONG_FAILURE,
    ADDSONG_SUCCESS,
    REMOVESONG_FAILURE,
    REMOVESONG_SUCCESS,
    GETQUEUELIST_FAILURE,
    GETQUEUELIST_SUCCESS,
    GETAPPLINKHISTORY_FAILURE,
    GETAPPLINKHISTORY_SUCCESS,
    ADDMORESONG_SUCCESS,
    ADDMORESONG_FAILURE,
    SAVEPLAYLIST_FAILURE,
    SAVEPLAYLIST_SUCCESS,
    GETPLAYLIST_FAILURE,
    GETPLAYLIST_SUCCESS,
    PAYMENTPROCESS_FAILURE,
    PAYMENTPROCESS_SUCCESS,
    LIMIT_SUCCESS,
    RECENTLYPLAYED_FAILURE,
    RECENTLYPLAYED_SUCCESS,
    GETSUBSCRIPTIONLIST_FAILURE,
    GETSUBSCRIPTIONLIST_SUCCESS,
    LINKLIBRARY_FAILURE,
    LINKLIBRARY_SUCCESS,
    DEZEERSONGLIST_FAILURE,
    DEZEERSONGLIST_SUCCESS

} from '../../Action/ActionType';
export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER:
            return {
                ...state,
                case: action.type,
                loading: action.loading
            }
        case CLEAR_DATA:
            return {
                ...state,
                case: '',
                message: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                Token: action.payload.token,
            }
        case LOGIN_FAILURE:
            return {
                ...state,

                case: action.type,
                message: action.message,
            }

        case SOCIALLOGIN_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                Token: action.payload.token,
            }
        case SOCIALLOGIN_FAILURE:

            return {
                ...state,

                case: action.type,
                message: action.message,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                Token: action.payload.token,
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case FORGOT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                forgotDetails: action.payload,

            }
        case FORGOT_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case VERIFY_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
        case VERIFY_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case RESENDOTP_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case RESENDOTP_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case CHANGEPASSWORD_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case CHANGEPASSWORD_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }

        case RESETPASSWORD_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case RESETPASSWORD_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case STATICCONTENT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                StaticDetails: action.payload
            }
        case STATICCONTENT_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case CONTACTUS_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                contactusDetail: action.payload
            }
        case CONTACTUS_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }

        case GETPROFILE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                getprofileDetail: action.payload
            }
        case GETPROFILE_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case EDITPROFILE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                // getprofileDetail: action.payload
            }
        case EDITPROFILE_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case GENERATECODE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                generatecodedetails: action.payload
            }
        case GENERATECODE_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case ADDNEWCARD_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                // generatecodedetails: action.payload
            }
        case ADDNEWCARD_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case DELETEACCOUNT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
        case DELETEACCOUNT_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case GETPAYMENTLIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                cardDetails: action.payload
            }
        case GETPAYMENTLIST_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case INVITE_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
        case INVITE_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case JOIN_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
        case JOIN_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case SAVESESSIONDETAILS_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
        case SAVESESSIONDETAILS_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case JOINMEMBER_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                joinmemebrDetails: action.payload
            }
        case JOINMEMBER_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case REMOVEJOINMEMBER_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case REMOVEJOINMEMBER_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case ADDSONG_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case ADDSONG_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case ADDMORESONG_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case ADDMORESONG_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case LIMIT_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                advertiseDetails: action.payload
            }
        case REMOVESONG_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case REMOVESONG_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case GETQUEUELIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                queueDetails: action.payload
            }
        case GETQUEUELIST_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case GETAPPLINKHISTORY_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                userapplinklist: action.payload
            }
        case GETAPPLINKHISTORY_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case SAVEPLAYLIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case SAVEPLAYLIST_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case GETPLAYLIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                getplaylist: action.payload
            }
        case GETPLAYLIST_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case PAYMENTPROCESS_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,

            }
        case PAYMENTPROCESS_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case RECENTLYPLAYED_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                recentlyplayed: action.payload

            }
        case RECENTLYPLAYED_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case GETSUBSCRIPTIONLIST_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                subscriptionlist: action.payload

            }
        case GETSUBSCRIPTIONLIST_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
        case LINKLIBRARY_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,


            }
        case LINKLIBRARY_FAILURE:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
            case DEZEERSONGLIST_SUCCESS:
                return {
                    ...state,
                    case: action.type,
                    message: action.message,
                    dezeersonglist:action.payload
    
    
                }
            case DEZEERSONGLIST_FAILURE:
                return {
                    ...state,
                    case: action.type,
                    message: action.message,
                }
            
        default:
            return {
                ...state,
            }
    }



}