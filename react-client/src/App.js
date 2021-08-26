import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import Pages
import Callback from './pages/Callback'
import Quizzes from './pages/Quizzes'
import Questions from './pages/Questions'
import Choices from './pages/Choices'
import Login from './pages/Login'
import Form from './components/Form'

function App(){

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/callback' exact >
          <Callback />
        </Route>

        {/* ----- Index Routes ----- */}
        <Route path='/quizzes' exact >
          <Quizzes />
        </Route>
        <Route path='/questions' exact >
          <Questions />
        </Route>
        <Route path='/choices' exact >
          <Choices />
        </Route>

        {/* ----- Create Routes ----- */}
        <Route path='/quizzes/new'>
          <Form type='Quiz' />
        </Route>
        <Route path='/questions/new'>
          <Form type='Question' />
        </Route>
        <Route path='/choices/new'>
          <Form type='Choice' />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
