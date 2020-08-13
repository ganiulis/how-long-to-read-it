import React from 'react';
import { CSSTransition } from 'react-transition-group'; // ES6
import ReactDOM from 'react-dom';
import MetaTags from 'react-meta-tags';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Description(props) {
  return (
    <div className="sidebar-element" id="description">
      <h3>Welcome!</h3>
      <p>This webpage is intended to calculate how many days (and minutes) you'll spend reading a new book.</p>
      <p>Regular reading has been found to increase intelligence, attention span, emotional control, empathy as well as social skills.</p>
      <p>Most CEOs spend the majority of their free time reading. Of a few known figures, Bill Gates, Warren Buffett, Mark Zuckerberg, Barack Obama and Elon Musk are known to spend exorbitant amounts of time reading literature.</p>
      <p></p>
    </div>
  );
}

function Form(props) {
  return (
    <div className="sidebar-element" id="form">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="pages">Pages:</label>
        <br />
        <input
          id="pages"
          name="pages"
          type="number"
          value={props.state.pages}
          onChange={props.handleChange}
        />
        <hr />
        <label htmlFor="time">Minutes spent reading each day:</label>
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
        <label htmlFor="fastest">I skim through books to get the idea <small>(800 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="faster"
          name="pace"
          value="faster"
          checked={props.state.pace === 'faster'}
          onChange={props.handleChange}
        />
        <label htmlFor="faster">I speed-read everything <small>(600 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="fast"
          name="pace"
          value="fast"
          checked={props.state.pace === 'fast'}
          onChange={props.handleChange}
        />
        <label htmlFor="fast">I read quickly <small>(400 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="moderate"
          name="pace"
          value='moderate'
          checked={props.state.pace === 'moderate'}
          onChange={props.handleChange}
        />
        <label htmlFor="moderate">My reading pace is fairly moderate <small>(250 wpm)</small>.</label>
        <br />
        <input 
          type="radio" 
          id="slow"
          name="pace"
          value="slow"
          checked={props.state.pace === 'slow'}
          onChange={props.handleChange}
        />
        <label htmlFor="slow">I take my time to digest each sentence <small>(200 wpm)</small>.</label>
        <hr />
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

function Test(props) {
  return (
    <div className="sidebar-element" id="test">
      <h3>Not sure what's your wpm? Take the test below.</h3>
      <h4>Rules:</h4>
      <p>When press the "Start / Reset Timer" button, a new window will appear below which will contain a timed 602-word sample from <i>Alice's Adventures in Wonderland</i> by Lewis Carroll.</p>
      <p>Once you're at the end of the text, press the "Stop Timer" button located at the end of the text to receive your results.</p>
      <button onClick={props.toggleTest}>Start / Reset Timer</button>
    </div>
  );
}

function Sources(props) {
  return (
    <div className="sidebar-element" id="sources">
      <h4>Sources:</h4>
      <ul>
        <li>How many books do CEOs read? Taken from <a href="https://www.blinkist.com/magazine/posts/most-ceos-read-60-books-per-year" rel="noopener noreferrer" target="_blank">Blinkist Magazine</a></li>
        <li>Reading performances taken from <a href="http://www.readingsoft.com/" rel="noopener noreferrer" target="_blank">Speed Reading Test Online</a></li>
        <li>Reading statistics taken from <a href="https://medium.com/@calindragoman/average-reading-speed-and-memory-capacity-interesting-statistics-9810bdddd6cf" rel="noopener noreferrer" target="_blank">Calin Dragoman's blog</a></li>
        <li>React.js chart library: <a href="https://recharts.org/" rel="noopener noreferrer" target="_blank">Recharts</a></li>
        <li>React.js meta tagging: <a href="https://www.npmjs.com/package/react-meta-tags" rel="noopener noreferrer" target="_blank">react-meta-tags</a></li>
        <li>Thanks <a href="https://unsplash.com/photos/sfL_QOnmy00" rel="noopener noreferrer" target="_blank">@itfeelslikefilm</a> for the background image</li>
      </ul>
    </div>
  )
}

function Social(props) {
  return (
    <div className="sidebar-element" id="social-menu">
      <h4>See the code:</h4>
      <br />
      <a href="https://github.com/adamappsdev/how-long-to-read-it" rel="noopener noreferrer" target="_blank">
        <svg className="social" data-name="social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1107.55 1080.2">
          <title>Repository</title>
          <path className="cls-1" d="M553.31-.2C247.51-.2-.47,247.72-.47,553.57c0,244.67,158.67,452.25,378.71,525.48,27.67,5.12,37.83-12,37.83-26.65,0-13.2-.51-56.83-.75-103.1C261.26,982.8,228.75,884,228.75,884c-25.19-64-61.48-81-61.48-81-50.25-34.37,3.78-33.66,3.78-33.66,55.61,3.91,84.89,57.07,84.89,57.07,49.39,84.66,129.55,60.18,161.15,46,5-35.78,19.32-60.22,35.16-74-123-14-252.31-61.49-252.31-273.67,0-60.46,21.64-109.86,57.07-148.65-5.75-13.95-24.71-70.27,5.36-146.55,0,0,46.51-14.88,152.32,56.77,44.18-12.27,91.56-18.42,138.62-18.64,47.06.22,94.47,6.37,138.72,18.64,105.7-71.65,152.14-56.77,152.14-56.77,30.14,76.28,11.18,132.6,5.43,146.55,35.51,38.79,57,88.19,57,148.65,0,212.7-129.55,259.52-252.87,273.23,19.86,17.19,37.56,50.89,37.56,102.55,0,74.1-.64,133.73-.64,152,0,14.74,10,32,38,26.58,219.92-73.31,378.39-280.82,378.39-525.41C1107.08,247.72,859.14-.2,553.31-.2Z" transform="translate(0.47 0.2)"/><path className="cls-2" d="M209.28,794.89c-1.22,2.76-5.56,3.58-9.5,1.69s-6.27-5.56-5-8.31,5.53-3.62,9.54-1.73,6.31,5.59,4.93,8.35Zm-6.82-5" transform="translate(0.47 0.2)"/><path className="cls-2" d="M231.71,819.91c-2.64,2.45-7.81,1.31-11.31-2.56s-4.3-9-1.62-11.51,7.73-1.29,11.35,2.57,4.34,9,1.58,11.5Zm-5.29-5.67" transform="translate(0.47 0.2)"/><path className="cls-2" d="M253.54,851.8c-3.39,2.37-8.94.16-12.37-4.77s-3.4-10.84.08-13.2,8.9-.23,12.37,4.65,3.39,10.91-.08,13.32Zm0,0" transform="translate(0.47 0.2)"/><path className="cls-2" d="M283.45,882.62c-3,3.35-9.5,2.44-14.23-2.12s-6.19-10.8-3.15-14.15,9.58-2.41,14.35,2.12,6.27,10.84,3,14.15Zm0,0" transform="translate(0.47 0.2)"/><path className="cls-2" d="M324.72,900.51c-1.34,4.34-7.57,6.31-13.84,4.46s-10.36-7-9.1-11.35,7.56-6.42,13.88-4.45,10.36,6.93,9.06,11.34Zm0,0" transform="translate(0.47 0.2)"/>
          <path className="cls-2" d="M370,903.83c.16,4.56-5.16,8.35-11.75,8.43s-12-3.54-12.05-8,5.2-8.36,11.82-8.47,12,3.54,12,8.08Zm0,0" transform="translate(0.47 0.2)"/><path className="cls-2" d="M412.21,896.65c.79,4.45-3.78,9-10.32,10.25s-12.38-1.58-13.2-6c-.8-4.57,3.86-9.15,10.28-10.33s12.41,1.54,13.24,6.07Zm0,0" transform="translate(0.47 0.2)"/>
        </svg>
      </a>
      <p>Released under the MIT License</p>
    </div>
  )
}

function Intro(props) {
  return (
    <CSSTransition
      in={props.state.intro}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div className="collapsible-element" id="introduction">
        <button className="close" onClick={props.toggleIntro}/>
        <p>Hello there!</p>
        <p>This is the interface.</p>
        <p>This webpage was originally built as a localized, single-day project for experimenting with React.</p>
        <p>Visit the repository by clicking the icon below:</p>
        <a href="https://github.com/adamappsdev/how-long-to-read-it" rel="noopener noreferrer" target="_blank">
          <svg className="social-collapsible" data-name="mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1107.55 1080.2">
            <title>Mark</title>
            <path className="cls-1" d="M553.31-.2C247.51-.2-.47,247.72-.47,553.57c0,244.67,158.67,452.25,378.71,525.48,27.67,5.12,37.83-12,37.83-26.65,0-13.2-.51-56.83-.75-103.1C261.26,982.8,228.75,884,228.75,884c-25.19-64-61.48-81-61.48-81-50.25-34.37,3.78-33.66,3.78-33.66,55.61,3.91,84.89,57.07,84.89,57.07,49.39,84.66,129.55,60.18,161.15,46,5-35.78,19.32-60.22,35.16-74-123-14-252.31-61.49-252.31-273.67,0-60.46,21.64-109.86,57.07-148.65-5.75-13.95-24.71-70.27,5.36-146.55,0,0,46.51-14.88,152.32,56.77,44.18-12.27,91.56-18.42,138.62-18.64,47.06.22,94.47,6.37,138.72,18.64,105.7-71.65,152.14-56.77,152.14-56.77,30.14,76.28,11.18,132.6,5.43,146.55,35.51,38.79,57,88.19,57,148.65,0,212.7-129.55,259.52-252.87,273.23,19.86,17.19,37.56,50.89,37.56,102.55,0,74.1-.64,133.73-.64,152,0,14.74,10,32,38,26.58,219.92-73.31,378.39-280.82,378.39-525.41C1107.08,247.72,859.14-.2,553.31-.2Z" transform="translate(0.47 0.2)"/><path className="cls-2" d="M209.28,794.89c-1.22,2.76-5.56,3.58-9.5,1.69s-6.27-5.56-5-8.31,5.53-3.62,9.54-1.73,6.31,5.59,4.93,8.35Zm-6.82-5" transform="translate(0.47 0.2)"/><path className="cls-2" d="M231.71,819.91c-2.64,2.45-7.81,1.31-11.31-2.56s-4.3-9-1.62-11.51,7.73-1.29,11.35,2.57,4.34,9,1.58,11.5Zm-5.29-5.67" transform="translate(0.47 0.2)"/><path className="cls-2" d="M253.54,851.8c-3.39,2.37-8.94.16-12.37-4.77s-3.4-10.84.08-13.2,8.9-.23,12.37,4.65,3.39,10.91-.08,13.32Zm0,0" transform="translate(0.47 0.2)"/><path className="cls-2" d="M283.45,882.62c-3,3.35-9.5,2.44-14.23-2.12s-6.19-10.8-3.15-14.15,9.58-2.41,14.35,2.12,6.27,10.84,3,14.15Zm0,0" transform="translate(0.47 0.2)"/><path className="cls-2" d="M324.72,900.51c-1.34,4.34-7.57,6.31-13.84,4.46s-10.36-7-9.1-11.35,7.56-6.42,13.88-4.45,10.36,6.93,9.06,11.34Zm0,0" transform="translate(0.47 0.2)"/>
            <path className="cls-2" d="M370,903.83c.16,4.56-5.16,8.35-11.75,8.43s-12-3.54-12.05-8,5.2-8.36,11.82-8.47,12,3.54,12,8.08Zm0,0" transform="translate(0.47 0.2)"/><path className="cls-2" d="M412.21,896.65c.79,4.45-3.78,9-10.32,10.25s-12.38-1.58-13.2-6c-.8-4.57,3.86-9.15,10.28-10.33s12.41,1.54,13.24,6.07Zm0,0" transform="translate(0.47 0.2)"/>
          </svg>
        </a>
        <br />
        <p>Any new windows will appear below. Feel free to close this window.</p>
      </div>
  </CSSTransition>
  );
}

function TestText(props) {
  var buttonText = 'Stop Timer';
  if (props.state.isOn === false && props.state.testresult === false) {
    buttonText = 'Open Results';
  } else if (props.state.isOn === false && props.state.testresult === true) {
    buttonText = 'Results Below';
  }
  return (
    <CSSTransition
      in={props.state.test}
      timeout={200}
      classNames="alert"
      unmountOnExit
    >
      <div className="collapsible-element" id="test-text">
        <button className="close" onClick={() => props.toggleTest(true)}/>
        <h2>Reading Test</h2>
        <h3>The Rabbit Sends in a Little Bill</h3>
        <p>It was the White Rabbit, trotting slowly back again, and looking anxiously about as it went, as if it had lost something; and she heard it muttering to itself “The Duchess! The Duchess! Oh my dear paws! Oh my fur and whiskers! She’ll get me executed, as sure as ferrets are ferrets! Where can I have dropped them, I wonder?” Alice guessed in a moment that it was looking for the fan and the pair of white kid gloves, and she very good-naturedly began hunting about for them, but they were nowhere to be seen—everything seemed to have changed since her swim in the pool, and the great hall, with the glass table and the little door, had vanished completely.</p>
        <p>Very soon the Rabbit noticed Alice, as she went hunting about, and called out to her in an angry tone, “Why, Mary Ann, what are you doing out here? Run home this moment, and fetch me a pair of gloves and a fan! Quick, now!” And Alice was so much frightened that she ran off at once in the direction it pointed to, without trying to explain the mistake it had made.</p>
        <p>“He took me for his housemaid,” she said to herself as she ran. “How surprised he’ll be when he finds out who I am! But I’d better take him his fan and gloves—that is, if I can find them.” As she said this, she came upon a neat little house, on the door of which was a bright brass plate with the name “W. RABBIT,” engraved upon it. She went in without knocking, and hurried upstairs, in great fear lest she should meet the real Mary Ann, and be turned out of the house before she had found the fan and gloves.</p>
        <p>“How queer it seems,” Alice said to herself, “to be going messages for a rabbit! I suppose Dinah’ll be sending me on messages next!” And she began fancying the sort of thing that would happen: “‘Miss Alice! Come here directly, and get ready for your walk!’ ‘Coming in a minute, nurse! But I’ve got to see that the mouse doesn’t get out.’ Only I don’t think,” Alice went on, “that they’d let Dinah stop in the house if it began ordering people about like that!”</p>
        <p>By this time she had found her way into a tidy little room with a table in the window, and on it (as she had hoped) a fan and two or three pairs of tiny white kid gloves: she took up the fan and a pair of the gloves, and was just going to leave the room, when her eye fell upon a little bottle that stood near the looking-glass. There was no label this time with the words “DRINK ME,” but nevertheless she uncorked it and put it to her lips. “I know something interesting is sure to happen,” she said to herself, “whenever I eat or drink anything; so I’ll just see what this bottle does. I do hope it’ll make me grow large again, for really I’m quite tired of being such a tiny little thing!”</p>
        <p>It did so indeed, and much sooner than she had expected: before she had drunk half the bottle, she found her head pressing against the ceiling, and had to stoop to save her neck from being broken. She hastily put down the bottle, saying to herself “That’s quite enough—I hope I shan’t grow any more—As it is, I can’t get out at the door—I do wish I hadn’t drunk quite so much!”</p>
        <button onClick={props.showResult}>{buttonText}</button>
      </div>
  </CSSTransition>
  );
}

function TestResult(props) {
  const wpm = Math.floor( 602 / (props.state.timer / 1000) * 60 );
  var chartWidth = 0;
  if (window.innerWidth < 769) {
    chartWidth = props.state.chartWidth * 0.7;
  } else if (window.innerWidth < 1200 ) {
    chartWidth = props.state.chartWidth * 0.4;
  } else {
    chartWidth = props.state.chartWidth * 0.55;
  }
  const data = [
    {name: '100wpm', uv: 0, amt: 2400},
    {name: '150wpm', uv: 34, amt: 2400},
    {name: '200wpm', uv: 84, amt: 2400},
    {name: '250wpm', uv: 112, amt: 2400},
    {name: '300wpm', uv: 70, amt: 2400},
    {name: '350wpm', uv: 43, amt: 2400},
    {name: '400wpm', uv: 27, amt: 2400},
    {name: '450wpm', uv: 9, amt: 2400},
    {name: '500wpm', uv: 9, amt: 2400},
    {name: '550wpm', uv: 0, amt: 2400},
    {name: '600wpm', uv: 5, amt: 2400},
    {name: '650wpm', uv: 2, amt: 2400},
    {name: '700wpm', uv: 0, amt: 2400}
  ];
  var line = '';
  if (wpm > 10000) {
    line = 'Holy Guacamole! Either you have the reading capacity of a robot or you just clicked "stop timer" immediately after seeing it.';
  } else if (wpm < 250) {
    line = 'Nice! You seem to take your time reading!';
  } else if (wpm < 400) {
    line = 'Good! You can read fairly moderately.';
  } else if (wpm < 600) {
    line = 'Super! You can read faster than the average person.';
  } else if (wpm < 800) {
    line = 'Fantastic! You are in the top 95% of readers in terms of words-per-minute.';
  } else if (wpm <= 10000 ) {
    line = 'Amazing! Your words-per-minute are faster than 90% of readers.';
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
      <div className="collapsible-element" id="test-text">
        <button className="close" onClick={() => props.toggleTestResult(true)}/>
        <p>Your reading efficiency is: { wpm } words per minute (wpm)</p>
        <p>{ line }</p>
        <p>See how you compare:</p>
        <LineChart width={chartWidth} height={300} data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
          <Line type="monotone" dataKey="uv" stroke="gold" />
          <CartesianGrid stroke="DimGrey" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
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
      <div className="collapsible-element" id="results">
        <button className="close" onClick={() => props.toggleResult(false)}/>
        <p>Assuming an average 300 words per page, your total reading time will be {Math.floor(time)} minutes.</p>
        <p>If you're consistent, you'll finish it in {Math.round(result * 10) / 10} days.</p>
        <p>If you keep it up, you can finish {Math.round(365 / result)} books of similar magnitude in a year.</p>
        <button onClick={props.toggleInterpretation}>Toggle Interpretation</button>
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
    <div className="collapsible-element" id="interpretation">
      <button className="close" onClick={() => props.toggleInterpretation(true)}/>
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
      chartWidth: 0,
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

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentWillUnmount() { 
    window.removeEventListener('load', this.handleLoad);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ chartWidth: window.innerWidth });
  }

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
      if (this.state.interpretation === false) {
        setTimeout(() => this.scrollToBottom(), 250);
      }
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
    if (this.state.test === true || window.innerWidth < 769) {
      setTimeout(() => this.scrollToBottom(), 250);
    }
    event.preventDefault();
  }

  render() {
    return (
      <>
        <MetaTags>
          <title>How Long to Read It?</title>
          <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
          <link rel="manifest" href="icons/manifest.json" />
          <meta name="msapplication-TileColor" content="#4D4755" />
          <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#4D4755" />
          <meta name="description" content="An online tool for calculating the total time it'll take to read a specific book." />
          <meta property="og:title" content="How Long to Read it?" />
          <meta property="og:image" type="image/png" content="icons/apple-icon-72x72.png" />
        </MetaTags>
        <div className="background-div"></div>
        <div className="header">
          <h1>How Long to Read It?</h1>
        </div>
        <div className="sidebar">
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
          <Sources />
          <Social />
        </div>
        <div className="collapsible">
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
