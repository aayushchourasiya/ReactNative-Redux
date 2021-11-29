
export const dataReducer = (state = {inbox:[], outbox: []} , action) =>{
    switch(action.type){
        case 'ADDDATA' : {
            if(action.payload.type === 'inbox'){
                return {
                    ...state,
                    inbox:[...state.inbox, action.payload.value]
                }
            }else {
                return {
                    ...state,
                    outbox:[...state.outbox, action.payload.value]
                }
            }
        };
        case 'DELETEDATA' : {
            if(action.payload.whichBox === 'inbox'){
                state.inbox.splice(action.payload.index,1);
                return{
                    ...state,
                    inbox:[...state.inbox]
                }
            }
            else{
                state.outbox.splice(action.payload.index,1);
                return{
                    ...state,
                    outbox:[...state.outbox]
                }
            }
        }
        default : return state;
    }
}