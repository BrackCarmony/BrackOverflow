import { combineReducers } from 'redux';
import QuestionsReducer from './questions';
import CurrentQuestionReducer from './currentQuestion';

const rootReducer = combineReducers({
  questions:QuestionsReducer,
  currentQuestion:CurrentQuestionReducer
});

export default rootReducer;
