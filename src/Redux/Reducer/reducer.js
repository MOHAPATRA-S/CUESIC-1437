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
    SOCIALLOGIN_SUCCESS



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
        default:
            return {
                ...state,
            }
    }



}