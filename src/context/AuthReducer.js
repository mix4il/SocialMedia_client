export const AuthReducer = (state, action) =>{
    switch (action.type){
        case "LOGIN_START": {
            return {
                user: null,
                isFetching: true,
                isError: false,
            }
        }
        case "LOGIN_SUCCESS": {
            return {
                user: action.payload,
                isFetching: false,
                isError: false,
            }
        }
        case "LOGIN_ERROR": {
            return {
                user: null,
                isFetching: false,
                isError: true,
            }
        }
        case "TRAINING_ENTRY":{
            return {
                ...state,
                user : {
                    ...state.user,
                    trainings : [...state.user.trainings, action.payload]
                }
            }
        }
        case "TRAINING_CANCEL":{
            return {
                ...state,
                user : {
                    ...state.user,
                    trainings : state.user.trainings.filter(training => training !== action.payload)
                }
            }
        }
    }
}