import React from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import css from './Feedback.module.css';

const Feedback = ({onFeedbackClick})=>{
  const handleClick = (buttonName) => {
    onFeedbackClick(buttonName);
  };
  return (
    <>
      <div className={css.feedback}>
        <Section title='Leave Feedback Please'>
        <FeedbackOptions onFeedbackClick={handleClick}/>
        </Section>
      </div>
    </>
  );
}


export default Feedback;