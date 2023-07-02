import { useState } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import NotificationMessage from './NotificationMessage';

export const App = () =>{

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleFeedbackClick = buttonName => {
      if (buttonName === 'good') {
        setGood(prevGood => prevGood + 1);
      } else if (buttonName === 'neutral') {
        setNeutral(prevNeutral => prevNeutral + 1);
      } else if (buttonName === 'bad') {
        setBad(prevBad => prevBad + 1);
      }
    };
   
    const totalFeedback = good + neutral + bad;
    const isFeedbackGiven = totalFeedback > 0;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Feedback onFeedbackClick={handleFeedbackClick} />

          {isFeedbackGiven ? (
            <Statistics feedback={{ good, neutral, bad }} />
          ) : (
            <NotificationMessage />
          )}
        </div>
      </div>
    );
  }

