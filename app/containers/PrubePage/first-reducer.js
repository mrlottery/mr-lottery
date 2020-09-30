import produce from 'immer';

export const initialState ={
    counter:0
}

const counter = (state = initialState, action)=>
    produce(state, draft => {
        switch(action.type){
            case 'INC_COUNTER':                
                    draft.counter = state.counter + 1
                break;  
            case 'ADD_COUNTER':               
                draft.counter = state.counter + action.value
                break;
            default: 
                draft.counter = 0
                break;
        }
});

export default counter;