import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import CoursesIndex from './components/courses/CoursesIndex'
import CoursesNew from './components/courses/CoursesNew'
import CoursesEdit from './components/courses/CoursesEdit'
import CoursesShow from './components/courses/CoursesShow'

import CompanysIndex from './components/companys/CompanysIndex'
import CompanysNew from './components/companys/CompanysNew'
import CompanysEdit from './components/companys/CompanysEdit'
import CompanysShow from './components/companys/CompanysShow'

import SecureRoute from './components/common/SecureRoute'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import UserShow from './components/user/UserShow'

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
            <Route path="/user/:id" component={UserShow} />
            <Route path="/courses/:id" component={CoursesShow} />
            <Route path="/courses" component={CoursesIndex} />
            <SecureRoute path="/companys/new" component={CompanysNew} />
            <SecureRoute path="/companys/:id/edit" component={CompanysEdit} />
            <Route path="/companys/:id" component={CompanysShow} />
            <Route path="/companys" component={CompanysIndex} />
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
