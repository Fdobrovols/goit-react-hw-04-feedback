import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
    state = {
  @@ -7,78 +11,42 @@ export class App extends Component {
      bad: 0,
    };
    onLeaveFeedback = option => {
        this.setState(state => ({ [option]: state[option] + 1 }));
        countTotalFeedback = () => {
            const { good, neutral, bad } = this.state;
            return good + neutral + bad;

            countPositiveFeedbackPercentage = () => {
                const { good, neutral, bad } = this.state;
                const feedbacks = good + neutral + bad;

                <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {(this.countTotalFeedback() && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )) || <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }