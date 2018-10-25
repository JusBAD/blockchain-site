function Team(props) {
  console.log('The app!');
  return React.createElement('h1', null, 'Hello, world!');
}

const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(Team), rootElement);
