var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props){
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return(
    <div>
      <ul className="languages">
        {languages.map(item => {
          return(
            <li 
              key={item} 
              onClick={props.onSelect.bind(null, item)}
              style={item===props.selectedLanguage?{color:'#d0021b'}:null}> 
                {item} 
            </li>)}
          )
        }
      </ul>
    </div>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect:PropTypes.func.isRequired
}

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
    return(
      <div>
        <SelectLanguage 
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;