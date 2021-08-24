import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import Pages
import Home from './pages/Home'
import Quizzes from './pages/Quizzes'
import Questions from './pages/Questions'
import Choices from './pages/Choices'

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact>
          <a href='https://github.com/login/oauth/authorize?client_id=d5895cc0b46eefc0976a'>Login</a>
        </Route>
        <Route path='/home' exact >
          <Home />
        </Route>
        <Route path='/quizzes' exact >
          <Quizzes />
        </Route>
        <Route path='/questions' exact >
          <Questions />
        </Route>
        <Route path='/choices' exact >
          <Choices />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
