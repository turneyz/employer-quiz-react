import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
 
function App() {

  const questions = [
    {
      questionText: 'Sample Question 1',
      answerOptions: [
        {answerText: 'Answer 1', isCorrect: false},
        {answerText: 'Answer 2', isCorrect: false},
        {answerText: 'Answer 3', isCorrect: true},
        {answerText: 'Answer 4', isCorrect: false}
      ]
    },
    {
      questionText: 'Sample Question 2',
      answerOptions: [
        {answerText: 'Answer 1', isCorrect: false},
        {answerText: 'Answer 3', isCorrect: true},
        {answerText: 'Answer 2', isCorrect: false},
        {answerText: 'Answer 4', isCorrect: false}
      ]
    },
    {
      questionText: 'Sample Question 3',
      answerOptions: [
        {answerText: 'Answer 3', isCorrect: true},
        {answerText: 'Answer 1', isCorrect: false},
        {answerText: 'Answer 2', isCorrect: false},
        {answerText: 'Answer 4', isCorrect: false}
      ]
    },
    {
      questionText: 'Sample Question 4',
      answerOptions: [
        {answerText: 'Answer 1', isCorrect: false},
        {answerText: 'Answer 2', isCorrect: false},
        {answerText: 'Answer 4', isCorrect: false},
        {answerText: 'Answer 3', isCorrect: true}
      ]
    },
  ]

  return (
    <div className="App">
      {false ? (
        <div className='outcomeBox'>You scored...</div>
      ) : (
        <>
          <div className='quizBox'></div>
            <div className='questionCount'>
              <span>Question 1</span>/{questions.length}
            </div>
            <div className='questionText'>This is the question text</div>
            <div className='answerSection'>
              <button>Answer 1</button>
              <button>Answer 2</button>
              <button>Answer 3</button>
              <button>Answer 4</button>
            </div>
        </>
      )}
    </div>
  );
}

export default App;
