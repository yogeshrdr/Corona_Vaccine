
const INTIAL_STATE={
    userAuth: false,
    userData: []
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
        default: 
           return state
    }
}

export default userReducer;