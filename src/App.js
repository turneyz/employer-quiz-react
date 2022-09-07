import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
 
function App() {

  const questions = [
    {
      questionText: 'Since I am an Entry Level Engineer, what position are you trying to fill?',
      answerOptions: [
        {answerText: 'Senior Web Developer', isCorrect: false},
        {answerText: 'Carnival Clown', isCorrect: false},
        {answerText: 'Entry Level Engineer', isCorrect: true},
        {answerText: 'Cloud Architect', isCorrect: false}
      ]
    },
    {
      questionText: 'My company\'s work culture is..',
      answerOptions: [
        {answerText: 'Hostile', isCorrect: false},
        {answerText: 'Positive and Encouraging', isCorrect: true},
        {answerText: 'Toxic', isCorrect: false},
        {answerText: 'Based on ancient myths', isCorrect: false}
      ]
    },
    {
      questionText: 'My company believes in...',
      answerOptions: [
        {answerText: 'Developing employees', isCorrect: true},
        {answerText: 'Unpaid overtime', isCorrect: false},
        {answerText: 'Working 8 days a week', isCorrect: false},
        {answerText: 'Short-term employment', isCorrect: false}
      ]
    },
    {
      questionText: 'I found this quiz to be..',
      answerOptions: [
        {answerText: 'A waste of time...', isCorrect: false},
        {answerText: 'Confusing', isCorrect: false},
        {answerText: 'ummm...', isCorrect: false},
        {answerText: 'Fun and Informative', isCorrect: true}
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
