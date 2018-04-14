var React = require('react');

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: "All"
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    this.setState(function(){
      return{
        selectedLanguage: lang
      }
    });
  }

  render(){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return(
      <div>
        <ul className="languages">
          {languages.map(item => {
            return(
              <li 
                key={item} 
                onClick={this.updateLanguage.bind(null, item)}
                style={item===this.state.selectedLanguage?{color:'#d0021b'}:null}> 
                {item} 
              </li>)}
            )
          }
        </ul>
      </div>
    )
  }
}

module.exports = Popular;