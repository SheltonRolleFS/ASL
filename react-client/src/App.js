import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

// Import Pages
import Callback from './pages/Callback'
import Quizzes from './pages/Quizzes'
import Questions from './pages/Questions'
import Choices from './pages/Choices'
import Login from './pages/Login'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  checkAccess = ( access_token ) => {
    if(typeof(access_token) !== 'undefined'){
      console.log(access_token)
      this.setState({ loggedIn: true })
    }
  }

  render(){
    return (
      <Router>
        
        <Switch>
          <Route path='/' exact>
            <Login loggedIn={this.state.loggedIn} />
          </Route>
          <Route path='/callback' exact >
            <Callback checkAccess={this.checkAccess} />
          </Route>
          <Route path='/quizzes' exact >
            <Quizzes loggedIn={this.state.loggedIn}/>
          </Route>
          <Route path='/questions' exact >
            <Questions loggedIn={this.state.loggedIn} />
          </Route>
          <Route path='/choices' exact >
            <Choices loggedIn={this.state.loggedIn} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
