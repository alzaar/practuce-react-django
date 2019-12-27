import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Alerts extends Component {
  static propTypes = {
    errors: PropTypes.object.isRequired
  }
  componentDidUpdate(prevProps) {
    const { errors, alert, messages } = this.props
    if (errors !== prevProps.errors) {
      if (errors.message.name) alert.error(`Name: ${errors.message.name.join()}`)
      if (errors.message.email) alert.error(`Email: ${errors.message.email.join()}`)
      if (errors.message.message) alert.error(`Message: ${errors.message.message.join()}`)
    }
    if (messages !== prevProps.messages) {
      if (messages.deleteLead) alert.success(messages.deleteLead)
      if (messages.addLead) alert.success(messages.addLead)
    }
  }
  render() {
    return <Fragment />
  }
}

const mapStateToProps = state => ({
  errors: state.errorsState,
  messages: state.messagesState
})

export default connect(mapStateToProps)(withAlert()(Alerts))