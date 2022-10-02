import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    const target = event.target.name;
    // console.log(target);
    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };

  render() {
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions state={this.state} onLeaveFeedback={this.onBtnClick} />
      </Section>
      <Section title="Statistics">
        <Statistics state={this.state}/>
      </Section>
      </>
    );
  }
}

export default App;
