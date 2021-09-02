import { List } from "semantic-ui-react";

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

        case "SELECT_EQUIPMENT":
            newState = {
                ...state,
                OptionSelected: {
                    ...state.OptionSelected,
                    equipments:{
                        ...state.OptionSelected.equipments,
                       
                        [action.payload.group]: {
                            ...state.OptionSelected.equipments[action.payload.group],
                             perso: {
                                ...state.OptionSelected.equipments[action.payload.group].perso,
                                [action.payload.element.id]: action.payload.element
                            }
                        }
                  
                    }
                }
            }
            
    
            console.log(newState);
    
            return newState

            case "SELECT_ACCESSORIES":
                newState = {
                    ...state,
                    OptionSelected: {
                        ...state.OptionSelected,
                        accessories:{
                            ...state.OptionSelected.accessories,
                            [action.payload.group]:{
                                ...state.OptionSelected.accessories[action.payload.group],
                                    [action.payload.element.id]: action.payload.element
                            }          
                        }
                    }
                }
                
                console.log(newState);
                return newState
        default:
        return state
    }

};

export default rootReducer;