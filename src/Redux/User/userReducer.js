
const INTIAL_STATE={
    hospitalAuth: false,
    userAuth: false,
    adminAuth: false,
    userData: [],
    hospitalData: [],
    hospitaluserData: [],
    adminOrderData: []
}

const userReducer=(state= INTIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'ADD_USER_AUTH':
            return{
                ...state,
                userAuth: !state.userAuth
            }
        case 'ADD_USER_REG_DATA':
            return{
                ...state,
                userData: action.payload
            }
        case 'ADD_HOSPITAL_DATA':
            return{
                ...state,
                hospitalData: action.payload
            }
        case 'ADD_HOSPITAL_USER_DATA':
            return{
                ...state,
                hospitaluserData: action.payload
            }
        case 'ADD_HOSPITAL_AUTH':
            return{
                ...state,
                hospitalAuth: !state.hospitalAuth
            }
        case 'ADD_ADMIN_AUTH':
            return{
                ...state,
                adminAuth: !state.adminAuth
            }
        case 'ADD_ADMIN_ORDER_DATA':
            return{
                ...state,
               adminOrderData: action.payload
            }
        default: 
           return state
    }
}

export default userReducer;