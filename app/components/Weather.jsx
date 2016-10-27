var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherApp = require('openWeatherApp');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});
    openWeatherApp.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function(){
    var {isLoading, temp, location} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3> Fetching Weather </h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return(
      <div>
      <h3> GET WEATHER</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
