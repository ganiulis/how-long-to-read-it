import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'; // ES6
import './index.css';
import * as serviceWorker from './serviceWorker';

function Header(props) {
  return (
    <div class="element" id="description">
      <p>This will calculate how many days (and minutes) you'll take reading a new book.</p>
      <p>Reading has been found to be ...</p>
      <p>Reading performances taken from: http://www.readingsoft.com/</p>
      <p>Thanks Emre Can https://www.pexels.com/photo/brass-colored-chandelier-2079451/</p>
    </div>
  );
}

function Result(props) {
  const display = props.display;
  const result = props.result;
  const time = props.time;
  return (
    <CSSTransition
      in={display}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div class="element" id="results">
        <b>Assuming an average 300 words per page, your total reading time will be {time} minutes.</b>
        <p>The #1 rule to lifelong reading is interpreting it as a regular form of practice. Setting some time aside to read every evening is akin to setting some time aside for moderate exercise in the morning.</p>
        <b>If you're consisent, you'll finish it in {result} days.</b>
        <p>People tend to overestimate how many books they can read in a month and underestimate how many books they can read in a year.</p>
        <b>If you keep it up, you can finish {365 / result} books of similar magnitude in a year.</b>
        <p>The key to consistent reading is not reading everything you find lying about, but rather being selective with the kind of literature you consume.</p>
        <p>There are hundreds of millions of unique books in the world with several million being published every year. Given the magnitude, it is no surprise that worthwhile, well-written books are hard to come by while mediocre, poorly-written books are a dime a dozen. If you want to read more, you'll have to spend some time researching unread books as well as understanding and interpreting your own particular taste of literature. Amazon, Goodreads and other user-rich bibliographic websites are a good source for interpreting whether a particular book will be a drag or not. Old-fashioned skimming of a few pages may also be a particularly efficient way of evaluating the quality and value of the writing found within it. Understanding your own tastes, however, will take some more time as you can only uncover this particular quandary with enough attentive, regular reading.</p>
        <p>Given the parameters are correct and daily consistency is adhered to, make a commitment to finish a book of this scope within some {result}±2 days, then move on to the next one.</p>
        <p>Happy reading!</p>
      </div>
    </CSSTransition>
  );
}

function Form(props) {
  return (
    <div class="element" id="form">
      <form onSubmit={props.handleSubmit}>
        <label for="pages">Pages:</label>
        <br />
        <input
          id="pages"
          name="pages"
          type="number"
          value={props.state.pages}
          onChange={props.handleChange}
        />
        <br />
        <label for="time">Minutes spent reading per day:</label>
        <br />
        <input
          id="time"
          name="time"
          type="number"
          value={props.state.time}
          onChange={props.handleChange}
        />
        <hr />
        Are you a fast reader?
        <br />
        <input 
          type="radio" 
          id="fastest"
          name="pace"
          value="fastest"
          checked={props.state.pace === 'fastest'}
          onChange={props.handleChange}
        />
        <label for="fastest">I skim through books to get the idea (1000 wpm).</label>
        <br />
        <input 
          type="radio" 
          id="fast"
          name="pace"
          value="fast"
          checked={props.state.pace === 'fast'}
          onChange={props.handleChange}
        />
        <label for="fast">I can speed-read everything (700 wpm).</label>
        <br />
        <input 
          type="radio" 
          id="moderate"
          name="pace"
          value='moderate'
          checked={props.state.pace === 'moderate'}
          onChange={props.handleChange}
        />
        <label for="moderate">My reading pace is fairly moderate (300 wpm).</label>
        <br />
        <input 
          type="radio" 
          id="slow"
          name="pace"
          value="slow"
          checked={props.state.pace === 'slow'}
          onChange={props.handleChange}
        />
        <label for="slow">I take my time to digest each new sentence (150 wpm).</label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 300,
      time: 60,
      pace: 'moderate'
    };
    this.display= false;
    this.time = 0;
    this.result = 0;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "How Long to Read it?";
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var wpm;
    switch(this.state.pace) {
      case 'fastest':
        wpm = 1000;
        break;
      case 'fast':
        wpm = 700;
        break;
      case 'moderate':
        wpm = 300;
        break;
      case 'slow':
        wpm = 150;
        break;
      default:
        wpm = 300;
    }
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    var ppm = wpm / 300; // average pages per minute
    this.time = this.state.pages / ppm; // total time in minutes to finish entire book
    this.result = this.time / this.state.time; // total days to finish entire book
    this.display = true;
    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <div class="title">
          <h1>How Long to Read It?</h1>
        </div>
        <div class="sidebar">
          <Header/>
        </div>
        <div class="main">
          <Form 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
          <Result 
            display={this.display}
            result={this.result}
            time={this.time}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
