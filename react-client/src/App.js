import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
    // this.state = {
    //   loggedIn: false
    // }
  }

  checkAccess = async ( access_token ) => {
    if(typeof(access_token) !== 'undefined'){
      // this.setState({ loggedIn: true })

      const opts = {
        method: 'GET',
        headers: {
          Authorization: `token ${access_token}`
        }
      }

      await fetch('https://api.github.com/user', opts)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        localStorage.setItem('username', data.login)
      })
    }
  }

  render(){
    return (
      <Router>
        
        <Switch>
          <Route path='/' exact>
            {localStorage.getItem('username') !== 'null' ? <Redirect to="/quizzes"/> : <Login />}
          </Route>
          <Route path='/callback' exact >
            <Callback checkAccess={this.checkAccess} />
          </Route>
          <Route path='/quizzes' exact >
            {/* <Quizzes loggedIn={this.state.loggedIn}/> */}
            <Quizzes />
          </Route>
          <Route path='/questions' exact >
            {/* <Questions loggedIn={this.state.loggedIn} /> */}
            <Questions />
          </Route>
          <Route path='/choices' exact >
            {/* <Choices loggedIn={this.state.loggedIn} /> */}
            <Choices />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
