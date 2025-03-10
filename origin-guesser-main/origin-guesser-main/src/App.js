
import { Button } from 'antd';

import React, { useState } from 'react';

export default function App() {
  // Answers are the possible answers that will be chosen at random for each question
  const answers = ['English', 'Spanish', 'French', 'Japanese', 'Vietnamese', 'Italian','Dutch','Nahuatl','Latin','Hawaiian','Tamil','Malay','Portuguese','Chinese','German','Maori','Irish','Russian','Dharuk','Guugu Yimidhirr','Portuguese','Egyptian','Swahili','Sanskrit','Welsh','Arabic'];
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [dataisLoaded, setDataisLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //These are all of the part of an api call to the dictionary api.
  // They will be concatted together to create the full url.

  const startOfURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"
  const currentWord = "bubble";
  const apiKey = "?key=76936eb6-9142-455b-87c9-619f993d7eda"; 

  fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/bubble?key=76936eb6-9142-455b-87c9-619f993d7eda", {
  "method": "GET"
  })
  .then(response => response.json())
  .then(response => {
  this.setState({
    items: response,
    dataisLoaded: true
    })
  })
.catch(err => { console.log(err); 
});

  const questions = [
      {
          questionText: 'Piano',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
      {
          questionText: 'Compass',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
      {
          questionText: 'Printing Press',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
      {
          questionText: 'Cheese',
          answerOptions: [
              { answerText: 'USA', isCorrect: false },
              { answerText: 'UK', isCorrect: false },
              { answerText: 'Germany', isCorrect: false },
              { answerText: 'Japan', isCorrect: true },
          ],
      },
  ];


  
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to OriginGuesser</h1>
      <h2>Points:</h2>
        <Button className='option-One-Button'>Option 1</Button>
        <Button className='option-Two-Button'>Option 2</Button>
        <Button className='option-Three-Button'>Option 3</Button>
        <Button className='option-Four-Button'>Option 4</Button>
      </header>
    </div>
  );
}

	return (
		<div className='app'>
      <header className="App-header">
      <h1>Welcome to OriginGuesser</h1>
      
			{showScore ? (
				<div className='score-section'>
					You scored {score}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Score: {score}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button className='option-One-Button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
              
            ))}
					</div>
				</>
			)}
      </header>
		</div>
    
	);
}