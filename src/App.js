import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBook from './screens/AddBook'
import EditBook from './screens/EditBook'
import BookDetail from './screens/BookDetail'
import ShowBooks from './screens/ShowBooks'
import LoginPage from './screens/LoginPage'
import RegistrationPage from './screens/RegistrationPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/addBook' component={AddBook} />
        <Route exact path='/Books' component={ShowBooks} />
        <Route exact path='/Book/edit/:id' component={EditBook} />
        <Route exact path='/Book/:id' component={BookDetail} /> 
      </Switch>
    </Router>
  )
}

export default App;