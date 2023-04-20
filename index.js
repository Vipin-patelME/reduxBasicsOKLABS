const redux = require('redux')
 const  { legacy_createStore } =  require('redux')

/* Redux:- 
1. Redux is a predectible state container for Java script apps.
2. Redux allows us to manage states and share states globally.
3. Redux containes lots of functions.

Main element of redux are:-
1. Action:-
    Actions are js Object which shuld have containe "type" property (not compulsory, but suggestable) 
    and other properties ("payload") are optional as per you requirement.
2. Actions Creator:-
    Action creators are java script functions and returns Actions (js object).
3. Reducer:-
    Reducers are java script functions who takes two parameters (state, action) 
    and returns new state according to actions ("type").
4. Store:-
    Store is java script object which contains states, actions, reducers, and functions 

*/

const ADDVALUEBY1 = "ADDVALUEBY1"
const SUBSTRACTVALUEBY1 = "SUBSTRACTVALUEBY1"




//1. lets create action 

const payload = {
    value:1
}


//2. action creators
const addValueBy1 = ()=>{
    return{
        type:ADDVALUEBY1,
        payload
    }
}

const subStractValueBy1 = ()=>{
    return{
        type:SUBSTRACTVALUEBY1,
        payload
    }
}

//3. Main Reducer (rootReducer)

initialState = {
    value:0
}


const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADDVALUEBY1:
            return{
                ...state,
                value:state.value + action.payload.value
            }
        case SUBSTRACTVALUEBY1:
            return{
                ...state,
                value:state.value - action.payload.value
            }
        default:
            return state
    }
}

//4. lets create store
const store = legacy_createStore(rootReducer)

console.log(store)

console.log("value before dispatch action------>",store.getState())

//action dispatched for increase value
console.log(store.dispatch(addValueBy1()))
console.log(store.dispatch(addValueBy1()))
console.log(store.dispatch(addValueBy1()))
console.log(store.dispatch(addValueBy1()))
console.log(store.dispatch(addValueBy1()))

console.log("value after dispatch addValue action------>",store.getState())

//action dispatched for decrease value
console.log(store.dispatch(subStractValueBy1()))
console.log(store.dispatch(subStractValueBy1()))


console.log("value after dispatch sustractValue action------>",store.getState())              

