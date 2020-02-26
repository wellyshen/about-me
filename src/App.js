import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello.</h1>
      <p className="name">My name is Welly Shen.</p>
      <p>
        I am a self-taught coder and has the background of UI/UX design. I code,
        design and ship software products to make people's lives happier.
      </p>
      <p>
        I have been working for a startup for 5 years, I help my company
        delivering 2 main online streaming platforms (OTT) to millions
        subscribers. We building the products from scratch. We using React,
        Redux, Node.js (Express), GraphQL, Jest, Webpack and many modern web
        technologies.
      </p>
      <p>
        In my spare time, I love to contribute open source software (OSS) and
        giving back to others. My OSS are mainly focus on React ecosystem. Which
        are trusted by thousands of developers all over the world.
      </p>
      <ul>
        <li>
          My open sources on{' '}
          <a href="https://github.com/wellyshen" target="_blank">
            GitHub
          </a>
          .
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=treLXQoXTOQ" target="_blank">
            The OTT platform (JP only)
          </a>{' '}
          that I'm working on.
        </li>
        <li>
          My{' '}
          <a href="https://www.youtube.com/watch?v=0hLn7qHrBBk" target="_blank">
            React-Native
          </a>{' '}
          app.
        </li>
      </ul>
    </div>
  );
}

export default App;
