const initialState = {

  OptionSelected:{
  } 
};

function rootReducer(state = initialState, action) {

    let newState;

    switch (action.type) {
        case "SELECT_VERSION":
        newState = {
            ...state,
            OptionSelected: action.payload.default
        }

        console.log(newState);
        return newState

        case "SELECT_COLOR":
        newState = {
            ...state,
            OptionSelected: {
                ...state.OptionSelected,
                color : action.payload
            }
            
        }
        return newState

        case "SELECT_RIM":
        newState = {
            ...state,
            OptionSelected: {
                ...state.OptionSelected,
                rims : action.payload
            }
        }
        return newState

        case "SELECT_SADDLERY":
        newState = {
            ...state,
            OptionSelected: {
                ...state.OptionSelected,
                saddlery : action.payload
            }
        }


        console.log(newState);

        return newState

        default:
        return state
    }

};

export default rootReducer;