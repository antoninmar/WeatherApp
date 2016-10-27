var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return(
    <div>
      <h1> Main component </h1>
      <Nav />
      {props.children}
    </div>
  );
}

module.exports = Main;
