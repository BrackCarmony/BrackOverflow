var def = [];


export default function( state = def, action){
  switch(action.type){
    case 'QUESTION_ADDED':
      console.log(state);
      state.push(action.payload);
      console.log(state);

      return [action.payload, ...state];
    case 'GOT_INITIAL_QUESTIONS':
      console.log(action);
    return action.payload.data;
  }
  console.log(state);
  return state;
}
