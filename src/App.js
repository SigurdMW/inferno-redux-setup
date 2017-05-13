import { version } from 'inferno';
import Component from 'inferno-component';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions'
import { connect } from 'inferno-redux';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
}

// make state available in props
function mapStateToProps(state){
	return {
		users: state.users,
	}
}

// make action creators available in props
function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

// connect action creators + state in the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
