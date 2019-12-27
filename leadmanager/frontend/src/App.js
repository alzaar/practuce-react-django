import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/leads/Dashboard'
import Header from './components/layouts/Header'
import Alerts from './components/layouts/Alerts'
import { Provider } from 'react-redux'
import store from './store'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'bottom center'
}
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AlertProvider template={ AlertTemplate } { ...alertOptions }>
          <Fragment>
            <Header />
            <Alerts />
            <div className='container d-flex flex-column'>
            <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))