import { CREATE_EVENT } from "../action/EventAction";

let initialState = {
    events: [],
   
  };
const EventReducer = (state = initialState, action) => {
    console.log("DIREDUCER Event ", action);
    switch (action.type) {
        case CREATE_EVENT:
            return{
                ...state,
                events: [...state.events, action.payload],
            }
            
            break;
    
        default:
            break;
    }
}

export default EventReducer;