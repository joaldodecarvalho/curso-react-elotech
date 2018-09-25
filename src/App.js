import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import { Switch } from 'react-router'

import './App.css';

import Header from './Header';
import Home from './Home'
import Configuracao from './Configuracao';

class App extends Component {

  constructor() {
    super()
    this.state = { logado: false }
  }


  onLogin = () => {
    this.setState({ logado: true })
  }

  onLogout = () => {
    this.setState({ logado: false })
    this.props.history.push('/')
  }

  render() {

    const { logado } = this.state;

    return (
      <div className="App">
        <Header logado={logado} onLogin={this.onLogin} onLogout={this.onLogout}></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/configuracao" component={Configuracao} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);
