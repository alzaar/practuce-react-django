import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types'
import { createMessage } from './messages'
import axios from 'axios'

export const getLeads = () => dispatch => {
  axios.get('/api/leads/')
  .then(res => {
    dispatch({
      type: GET_LEADS,
      payload: res.data
    })
  })
  .catch(err => console.error(err))
}

export const deleteLead = (id) => dispatch => {
  axios.delete(`api/leads/${id}/`)
  .then(res => {
    dispatch(createMessage({ deleteLead: 'Lead deleted' }))
    dispatch({
      type: DELETE_LEAD,
      payload: id
    })
  })
  .catch(err => console.error(err))
}

export const addLead = (lead) => dispatch => {
  axios.post('api/leads/', lead)
  .then(res => {
    dispatch(createMessage({ addLead: 'Lead added' }))
    dispatch({
      type: ADD_LEAD,
      payload: res.data
    })
  })
  .catch(err => {
    const error = {
      message: err.response.data,
      status: err.response.status
    }
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  })
}