import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import Pages
import Callback from './pages/Callback'
import Quizzes from './pages/Quizzes'
import Questions from './pages/Questions'
import Choices from './pages/Choices'
import Login from './pages/Login'
import CreateForm from './components/CreateForm'
import EditForm from './components/EditForm'
import Item from './components/Item'

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
          <CreateForm type='Quiz' />
        </Route>
        <Route path='/questions/new'>
          <CreateForm type='Question' />
        </Route>
        <Route path='/choices/new'>
          <CreateForm type='Choice' />
        </Route>

        {/* ----- Show Routes ----- */}
        <Route path='/quizzes/:id/show'>
          <Item type='Quiz'/>
        </Route>
        <Route path='/questions/:id/show'>
          <Item type='Question'/>
        </Route>
        <Route path='/choices/:id/show'>
          <Item type='Choice'/>
        </Route>

        {/* ----- Edit Routes ----- */}
        <Route path='/quizzes/:id/edit'>
          <EditForm type="Quiz"/>
        </Route>
        <Route path='/questions/:id/edit'>
          <EditForm type="Question"/>
        </Route>
        <Route path='/choices/:id/edit'>
          <EditForm type="Choice"/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
