var React = require('react');

function Header(props) {
  return (
    <div className="header-row">
      <h1>React Recipe Box</h1>
      <p>This is a Recipe Box app made in React that stores data you input using your browser's local storage.</p>
    </div>
  )
}

module.exports = Header;
