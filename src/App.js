import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
 
function App() {

  const questions = [
    {
      questionText: 'Is your company in search of a(n)',
      answerOptions: [
        {answerText: 'Senior Web Developer', isCorrect: false},
        {answerText: 'Carnival Clown', isCorrect: false},
        {answerText: 'Entry Level Engineer', isCorrect: true},
        {answerText: 'Cloud Architect', isCorrect: false}
      ]
    },
    {
      questionText: 'Sample Question 2',
      answerOptions: [
        {answerText: 'Answer 1', isCorrect: false},
        {answerText: 'Answer 2', isCorrect: true},
        {answerText: 'Answer 3', isCorrect: false},
        {answerText: 'Answer 4', isCorrect: false}
      ]
    },
    {
      questionText: 'Sample Question 3',
      answerOptions: [
        {answerText: 'Answer 1', isCorrect: true},
        {answerText: 'Answer 2', isCorrect: false},
        {answerText: 'Answer 3', isCorrect: false},
        {answerText: 'Answer 4', isCorrect: false}
      ]
    },
    {
      questionText: 'Sample Question 4',
      answerOptions: [
        {answerText: 'Answer 1', isCorrect: false},
        {answerText: 'Answer 2', isCorrect: false},
        {answerText: 'Answer 3', isCorrect: false},
        {answerText: 'Answer 4', isCorrect: true}
      ]
    },
  ]

  const [currQuestion, setCurrQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }

    const nextQuestion = currQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="App">
      {showScore ? (
        <div className='outcomeBox'>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div className='container'>
            <div className='info'>
              <div className='questionNumber'>
                <span>Question {currQuestion + 1}</span>/{questions.length}
              </div>
              
              <div className='questionText'>{questions[currQuestion].questionText}</div>
            </div>
            
            <div className='answerSection'>
              {questions[currQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
            </div>
        </>
      )}
    </div>
  );
}

export default App;
