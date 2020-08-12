import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'; // ES6
import './index.css';
import * as serviceWorker from './serviceWorker';

function Description(props) {
  return (
    <div class="sidebar-element" id="description">
      <h3>Welcome!</h3>
      <p>This webpage is intended to calculate how many days (and minutes) you'll spend reading a new book.</p>
      <p>Regular reading has been found to increase brain plasticity, emotional control, empathy as well as social skills.</p>
      <p>Most CEOs spend the majority of their free time reading. Of a few known figures, Bill Gates, Warren Buffett and Elon Musk are known to spend exorbitant amounts of time reading both technical, fictional and non-fiction literature, among others.</p>
      <p>Reading performances taken from: http://www.readingsoft.com/</p>
    </div>
  );
}

function Form(props) {
  return (
    <div class="sidebar-element" id="form">
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
        <hr />
        <label for="time">Minutes spent reading each day:</label>
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
        <label for="fastest">I skim through books to get the idea <small>(800 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="faster"
          name="pace"
          value="faster"
          checked={props.state.pace === 'faster'}
          onChange={props.handleChange}
        />
        <label for="faster">I speed-read everything <small>(600 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="fast"
          name="pace"
          value="fast"
          checked={props.state.pace === 'fast'}
          onChange={props.handleChange}
        />
        <label for="fast">I read quickly <small>(400 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="moderate"
          name="pace"
          value='moderate'
          checked={props.state.pace === 'moderate'}
          onChange={props.handleChange}
        />
        <label for="moderate">My reading pace is fairly moderate <small>(250 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="slow"
          name="pace"
          value="slow"
          checked={props.state.pace === 'slow'}
          onChange={props.handleChange}
        />
        <label for="slow">I take my time to digest each sentence <small>(200 wpm)</small>.</label>
        <hr />
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

function Test(props) {
  return (
    <div class="sidebar-element" id="test">
      <h3>Not sure what's your wpm? Take the test below.</h3>
      <h4>Rules:</h4>
      <p>When press the "Start / Reset Timer" button, a new window will appear below which will contain a timed 602-word sample from <i>Alice's Adventures in Wonderland</i> by Lewis Carroll.</p>
      <p>Once you're at the end of the text, press the "Stop Timer" button located at the end of the text to receive your results.</p>
      <button onClick={props.toggleTest}>Start / Reset Timer</button>
    </div>
  );
}

function Intro(props) {
  return (
    <CSSTransition
      in={props.state.intro}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div class="collapsible-element" id="introduction">
        <button class="close" onClick={props.toggleIntro}/>
        <p>Hello there!</p>
        <p>This is the interface.</p>
        <p>This webpage was originally built as a localized, single-day project for experimenting with React.</p>
        <p>Any new windows will appear below. Feel free to close this window.</p>
      </div>
  </CSSTransition>
  );
}

function TestText(props) {
  return (
    <CSSTransition
      in={props.state.test}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div class="collapsible-element" id="test-text">
        <button class="close" onClick={() => props.toggleTest(true)}/>
        <h2>Reading Test</h2>
        <h3>The Rabbit Sends in a Little Bill</h3>
        <p>It was the White Rabbit, trotting slowly back again, and looking anxiously about as it went, as if it had lost something; and she heard it muttering to itself “The Duchess! The Duchess! Oh my dear paws! Oh my fur and whiskers! She’ll get me executed, as sure as ferrets are ferrets! Where can I have dropped them, I wonder?” Alice guessed in a moment that it was looking for the fan and the pair of white kid gloves, and she very good-naturedly began hunting about for them, but they were nowhere to be seen—everything seemed to have changed since her swim in the pool, and the great hall, with the glass table and the little door, had vanished completely.</p>
        <p>Very soon the Rabbit noticed Alice, as she went hunting about, and called out to her in an angry tone, “Why, Mary Ann, what are you doing out here? Run home this moment, and fetch me a pair of gloves and a fan! Quick, now!” And Alice was so much frightened that she ran off at once in the direction it pointed to, without trying to explain the mistake it had made.</p>
        <p>“He took me for his housemaid,” she said to herself as she ran. “How surprised he’ll be when he finds out who I am! But I’d better take him his fan and gloves—that is, if I can find them.” As she said this, she came upon a neat little house, on the door of which was a bright brass plate with the name “W. RABBIT,” engraved upon it. She went in without knocking, and hurried upstairs, in great fear lest she should meet the real Mary Ann, and be turned out of the house before she had found the fan and gloves.</p>
        <p>“How queer it seems,” Alice said to herself, “to be going messages for a rabbit! I suppose Dinah’ll be sending me on messages next!” And she began fancying the sort of thing that would happen: “‘Miss Alice! Come here directly, and get ready for your walk!’ ‘Coming in a minute, nurse! But I’ve got to see that the mouse doesn’t get out.’ Only I don’t think,” Alice went on, “that they’d let Dinah stop in the house if it began ordering people about like that!”</p>
        <p>By this time she had found her way into a tidy little room with a table in the window, and on it (as she had hoped) a fan and two or three pairs of tiny white kid gloves: she took up the fan and a pair of the gloves, and was just going to leave the room, when her eye fell upon a little bottle that stood near the looking-glass. There was no label this time with the words “DRINK ME,” but nevertheless she uncorked it and put it to her lips. “I know something interesting is sure to happen,” she said to herself, “whenever I eat or drink anything; so I’ll just see what this bottle does. I do hope it’ll make me grow large again, for really I’m quite tired of being such a tiny little thing!”</p>
        <p>It did so indeed, and much sooner than she had expected: before she had drunk half the bottle, she found her head pressing against the ceiling, and had to stoop to save her neck from being broken. She hastily put down the bottle, saying to herself “That’s quite enough—I hope I shan’t grow any more—As it is, I can’t get out at the door—I do wish I hadn’t drunk quite so much!”</p>
        <button onClick={props.showResult}>Stop Timer</button>
      </div>
  </CSSTransition>
  );
}

function TestResult(props) {
  const wpm = Math.floor( 602 / (props.state.timer / 1000) * 60 );
  var line = '';
  if (wpm > 10000) {
    line = 'Holy Guacamole! Either you have the reading capacity of a robot or you just clicked "stop timer" immediately after seeing it.';
  } else if (wpm <= 10000 ) {
    line = 'Amazing! Your words-per-minute are faster than 90% of readers.';
  } else if (wpm < 800) {
    line = 'Fantastic! You are in the top 80% of readers in terms of words-per-minute.';
  } else if (wpm < 600) {
    line = 'Super! You can read faster than the average person.';
  } else if (wpm < 400) {
    line = 'Good! You can read fairly moderately.';
  } else if (wpm < 250) {
    line = 'Nice! You seem to take your time reading!';
  } else {
    line = 'Did you fall asleep?';
  }
  return (
    <CSSTransition
      in={props.state.testresult}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div class="collapsible-element" id="test-text">
        <button class="close" onClick={() => props.toggleTestResult(true)}/>
        <p>Your reading efficiency is: { wpm } words per minute (wpm)</p>
        <p>{ line }</p>
        <p>See how you compare:</p>
        ---Graph to be Inserted Later---
      </div>
  </CSSTransition>
  );
}

function Result(props) {
  const result = props.state.result;
  const time = props.state.total;
  return (
    <CSSTransition
      in={props.state.results}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div class="collapsible-element" id="results">
        <button class="close" onClick={() => props.toggleResult(false)}/>
        <p>Assuming an average 300 words per page, your total reading time will be {Math.floor(time)} minutes.</p>
        <p>If you're consisent, you'll finish it in {Math.round(result * 10) / 10} days.</p>
        <p>If you keep it up, you can finish {Math.round(365 / result)} books of similar magnitude in a year.</p>
        <button onClick={props.toggleInterpretation}>Show interpretation</button>
      </div>
    </CSSTransition>
  );
}

function Interpretation(props) {
  const result = props.state.result;
  return (
    <CSSTransition
      in={props.state.interpretation}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
    <div class="collapsible-element" id="interpretation">
      <button class="close" onClick={() => props.toggleInterpretation(true)}/>
      <p>The #1 rule to lifelong reading is interpreting it as a regular form of practice. Setting some time aside to read every evening is akin to setting some time aside for moderate exercise in the morning.</p>
      <p>People tend to overestimate how many books they can read in a month and underestimate how many books they can read in a year.</p>
      <p>The key to consistent reading is not reading everything you find lying about, but rather being selective with the kind of literature you consume.</p>
      <p>There are hundreds of millions of unique books in the world with several million being published every year. Given the magnitude, it is no surprise that worthwhile, well-written books are hard to come by while mediocre, poorly-written books are a dime a dozen. If you want to read more, you'll have to spend some time researching unread books as well as understanding and interpreting your own particular taste of literature. Amazon, Goodreads and other user-rich bibliographic websites are a good source for interpreting whether a particular book will be a drag or not. Old-fashioned skimming of a few pages may also be a particularly efficient way of evaluating the quality and value of the writing found within it. Understanding your own tastes, however, will take some more time as you can only uncover this particular quandary with enough attentive, regular reading.</p>
      <p>Given the parameters are correct and daily consistency is adhered to, make a commitment to finish a book of this scope within some {Math.floor(result)}±2 days, then move on to the next one.</p>
      <p>Happy reading!</p>
    </div>
  </CSSTransition>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 300,
      time: 60,
      pace: 'moderate',
      result: 0,
      total: 0,
      intro: false,
      results: false,
      interpretation: false,
      test: false,
      testresult: false,
      timer: 0,
      isOn: false,
      start: 0,
    };

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.showResult = this.showResult.bind(this)

    this.handleLoad = this.handleLoad.bind(this);
    this.toggleIntro = this.toggleIntro.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleResult = this.toggleResult.bind(this);
    this.toggleTest = this.toggleTest.bind(this);
    this.toggleTestResult = this.toggleTestResult.bind(this);
    this.toggleInterpretation = this.toggleInterpretation.bind(this);
  }

  componentDidMount() {
    document.title = "How Long to Read it?";
    window.addEventListener('load', this.handleLoad);
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentWillUnmount() { 
    window.removeEventListener('load', this.handleLoad);
  }

  /*
  componentDidUpdate() {
    this.scrollToBottom();
  }
  */

  // timer start
  startTimer() {
    this.setState({
      isOn: true,
      timer: this.state.time,
      start: Date.now() - this.state.timer
    })
    this.timer = setInterval(() => this.setState({
      timer: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({timer: 0, isOn: false})
  }
  // timer end

  showResult() {
    this.stopTimer();
    this.toggleTestResult();
    setTimeout(() => this.scrollToBottom(), 250);
  }
  handleLoad() {
    this.setState({
      intro: true
    })
  }
  toggleIntro() {
    this.setState({
      intro: !this.state.intro
    }) 
  }

  // timer and window logic
  toggleTest(close = false) {
    if (close === true) {
      if (this.state.testresult === false) {
        this.resetTimer();
      }
      this.stopTimer();
      this.setState({
        test: !this.state.test
      })
    } else {
      if (this.state.test === false && this.state.timer === 0) {
        this.startTimer();
      } else if (this.state.test === false && this.state.timer > 0) {
        this.stopTimer();
        this.resetTimer();
        this.startTimer();
      } else {
        this.stopTimer();
        this.resetTimer();
      }
      this.setState({
        test: !this.state.test, // opens the test window
        testresult: false // closes the test results window
      })
    }
  }
  toggleTestResult(close = false) {
    if (close) {
      this.setState({
        testresult: false
      })
    } else {
      this.setState({
        testresult: true
      })
      setTimeout(() => this.scrollToBottom(), 250 );
    }
  }
  toggleResult(close = false) {
    if (!close) {
      this.setState({
        results: false
      }) 
    } else {
      this.setState({
        results: !this.state.results
      })
    }
  }
  toggleInterpretation(close = false) {
    if (!close) {
      this.setState({
        interpretation: false
      }) 
    } else {
      this.setState({
        interpretation: !this.state.interpretation
      })
      setTimeout(() => this.scrollToBottom(), 250);
    }
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
        wpm = 800;
        break;
      case 'faster':
        wpm = 600;
        break;
      case 'fast':
        wpm = 400;
        break;
      case 'moderate':
        wpm = 250;
        break;
      case 'slow':
        wpm = 200;
        break;
      default:
        wpm = 250;
    }
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    var ppm = wpm / 300; // average pages per minute
    var time = this.state.pages / ppm // total time in minutes to finish entire book
    var days = time / this.state.time // total days to finish entire book
    this.setState({
      total: time,
      result: days,
      results: true
    })
    setTimeout(() => this.scrollToBottom(), 250);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div class="background-div"></div>
        <div class="header">
          <h1>How Long to Read It?</h1>
        </div>
        <div class="sidebar">
          <Description/>
          <Form 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
          <Test
            state={this.state}
            toggleTest={this.toggleTest}
          />
        </div>
        <div class="collapsible">
          <Intro
            state={this.state}
            toggleIntro={this.toggleIntro}
          />
          <TestText
            state={this.state}
            toggleTest={this.toggleTest}
            stopTimer={this.stopTimer}
            showResult={this.showResult}
          />
          <TestResult
            state={this.state}
            toggleTestResult={this.toggleTestResult}
          />
          <Result
            state={this.state}
            toggleResult={this.toggleResult}
            toggleInterpretation={this.toggleInterpretation}
          />
          <Interpretation 
            state={this.state}
            toggleInterpretation={this.toggleInterpretation}
          />
        </div>
        <div style={{ float:"left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </>
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
