import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onFeedbackClick }) => {
  const handleClick = buttonName => {
    onFeedbackClick(buttonName);
  };

  return (
    <>
      <div className={css.buttonContainer}>
        <button
          name="good"
          type="submit"
          onClick={() => handleClick('good')}
          className={css.button}
        >
          Good
        </button>
        <button
          name="neutral"
          type="submit"
          onClick={() => handleClick('neutral')}
          className={css.button}
        >
          Neutral
        </button>
        <button
          name="bad"
          type="submit"
          onClick={() => handleClick('bad')}
          className={css.button}
        >
          Bad
        </button>
      </div>
    </>
  );
};

export default FeedbackOptions;
