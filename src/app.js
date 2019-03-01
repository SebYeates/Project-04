import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import CoursesIndex from './components/courses/CoursesIndex'
import CoursesNew from './components/courses/CoursesNew'
import CoursesEdit from './components/courses/CoursesEdit'
import CoursesShow from './components/courses/CoursesShow'

import CompaniesIndex from './components/companies/CompaniesIndex'
import CompaniesNew from './components/companies/CompaniesNew'
import CompaniesEdit from './components/companies/CompaniesEdit'
import CompaniesShow from './components/companies/CompaniesShow'

import SecureRoute from './components/common/SecureRoute'

import Register from './components/auth/Register'
import Login from './components/auth/Login'


import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import FlashMessages from './components/common/FlashMessages'

class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages />
          <Switch>
            <SecureRoute path="/courses/new" component={CoursesNew} />
            <SecureRoute path="/courses/:id/edit" component={CoursesEdit} />
            <Route path="/courses/:id" component={CoursesShow} />
            <Route path="/courses" component={CoursesIndex} />
            <SecureRoute path="/companies/new" component={CompaniesNew} />
            <SecureRoute path="/companies/:id/edit" component={CompaniesEdit} />
            <Route path="/companies/:id" component={CompaniesShow} />
            <Route path="/companies" component={CompaniesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
