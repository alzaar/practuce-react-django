import React, { Fragment } from 'react'
import Form from './Form'
import Leads from './Leads'

class Dashboard extends React.Component {
  render () {
    return (
      <Fragment>
        <Leads />
        <Form />
      </Fragment>
    )
  }
}

export default Dashboard