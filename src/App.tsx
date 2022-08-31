import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Q1 from "questions/q1";

import "./App.css";

function App() {
  return (
    <div className="App__container">
      <nav className="Nav__container">
        <Link to="/">Home</Link>
        <Link to="/questions/1">Proceed to the question</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Connected Freight FE Take-home Assignment</h1>
            <hr />
            <p>
              Hello there 👋! Thank you for taking this interview 🙏 and
              congratulations on making it this far 🎉.
            </p>
            <hr />
            <p>
              The test is straight forward. You are given a large datasets of
              100000 employee data
            </p>
            <p>
              first task: your goal is to make sure the page gets rendered into
              the screen at minimum, using all resource you could find on the
              internet.
            </p>
            <p>
              second task: user complaints that input field is lagging when
              entering each character takes about a second which is not
              acceptable(UX concerns). You have to make sure the input onChange
              function rerenders in the best performant possible
            </p>
            <p>
              third task(optional: impressed us 👩‍💻🧑‍💻): well done! Now its time
              to properly write your favorite unit testing, so we are confident
              that your code runs well on production
            </p>
            <p>
              final task: you should create a readme or pdf file. Documenting
              the thought process and decision making onto why you pick certain
              method, architecture, library, or concept to solve this type of
              problem.
            </p>
            <p>
              Please make sure to give clear instruction as how to run your
              programme. (e.g. node versions, npm versions etc)
            </p>
            <p>
              You have 5 days to complete this task, best of luck! if you have
              any questions you can contact nico@connectedfreight.com and
              jaenal@connectedfreight.com
            </p>
            <p>Key things we are focusing on are:</p>
            <ul>
              <li>
                <input type="checkbox" checked disabled />
                <span>Follow best practices.</span>
              </li>
              <li>
                <input type="checkbox" checked disabled />
                <span>Code readability.</span>
              </li>
              <li>
                <input type="checkbox" checked disabled />
                <span>Code structure.</span>
              </li>
              <li>
                <input type="checkbox" checked disabled />
                <span>
                  Naming of parameters, functions, types, classes, and fields.
                </span>
              </li>
              <li>
                <input type="checkbox" checked disabled />
                <span>Appropriate use of comments.</span>
              </li>
            </ul>
          </div>
        </Route>
        <Route path="/questions/1" component={Q1}></Route>
      </Switch>
    </div>
  );
}

export default App;
