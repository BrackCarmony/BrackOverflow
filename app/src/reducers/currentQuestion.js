
export default function( state = {}, action){
  switch(action.type){
    case 'GOT_QUESTION':
    console.log('-------', action);
    return action.payload.data;
  }

  return state;
}
