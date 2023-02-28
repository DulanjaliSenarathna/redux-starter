//action types
const BUG_ADDED = "bugAdded";
 const BUG_REMOVED = "bugRemoved";
 const BUG_RESOLVED = "bugResolved";

//action creators
export function bugAdded(description){
    return {
        type: BUG_ADDED ,
        payload: {
        description: description
        }
    };
};

//re-write above code using arrow function
export const bugAddedArrow = description => ({
    
        type: BUG_ADDED ,
        payload: {
        description: description //can re write using short hand syntax - description
        }
    
});

export function bugRemoved(id){
    return {
        type: BUG_REMOVED ,
        payload: {
        id:id
        }
    };
};

export function bugResolved(id){
    return {
        type: BUG_RESOLVED,
        payload : {
            id:id
        }
    }
}

//reducer
//[] simple array to represent store
// with if else
let lastId=0;

export default function reducer(state = [], action){
    if(action.type === BUG_ADDED)
    return[
        ...state,
        {
            id : ++lastId,
            description : action.payload.description,
            resolved : false
        }
    ];
    else if(action.type === BUG_REMOVED)
    return state.filter(bug=> bug.id !== action.payload.id);

    else if(action.type === BUG_RESOLVED)
    return state.map(bug=> bug.id !== action.payload.id ? bug : {...bug , resolved: true});

    return state;
}

//with switch

// let lastId=0;

// function reducer(state = [], action){
//     switch (action.type){
//         case "bugAdded":
//         return[
//         ...state,
//         {
//             id : ++lastId,
//             description : action.payload.description,
//             resolved : false
//         }
//     ];
//     case "bugRemoved":
//         return state.filter(bug=> bug.id !== action.payload.id);
//     default : return state;
//     }
   
// }