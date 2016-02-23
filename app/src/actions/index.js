import axios from 'axios';

export const QUESTION_ADDED = 'QUESTION_ADDED';
export const GOT_INITIAL_QUESTIONS = 'GOT_INITIAL_QUESTIONS';
export const GOT_QUESTION = 'GOT_QUESTION';

export function addQuestion(question){
  console.log(question);

  return {
    type: QUESTION_ADDED,
    payload:question
  };
}

export function getQuestions(){
  const request = axios.get('/api/questions');

  return {
    type: GOT_INITIAL_QUESTIONS,
    payload: request
  }
}

export function fetchQuestion(id){
  const request = axios.get('/api/questions/'+id);

  return {
    type:GOT_QUESTION,
    payload:request
  };
}
