import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getLeads, deleteLead } from '../../actions/leads'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

class Leads extends React.Component {
  static propTypes = {
    getLeads: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getLeads()
  }
  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
            { this.props.leads.map(lead => (
              <tr key={ lead.id }>
                <td>{ lead.id }</td>
                <td>{ lead.name }</td>
                <td>{ lead.email }</td>
                <td>{ lead.message }</td>
                <td><button onClick={this.props.deleteLead.bind(this, lead.id)} className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leadsState.leads
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getLeads: getLeads,
    deleteLead: deleteLead
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)