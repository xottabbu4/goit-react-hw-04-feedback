import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

    return (
      <>
        <div className={css.container}>
          <Section title="Please, leave feedback">
            <FeedbackOptions
              options={Object.keys(option)}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage(total)}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </>
    );
  };