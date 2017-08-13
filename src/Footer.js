var octocat = require('./octocat.png');
var React = require('react');


function Footer(props) {
  return (
    <div className="footer">
      <h4>Built with React by Ed Sztukowski | 2017</h4>
      <div>
        <a href="https://github.com/edsztukowski/react-recipe-box"><img src={octocat} alt="My Github"></img></a>
      </div>
    </div>
  )
}

module.exports = Footer;
