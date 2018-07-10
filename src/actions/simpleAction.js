/*
 * src/actions/simpleAction.js
 * Action creators are functions that return actions
 * Actions are payloads of information which send data to the store.
*/

export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}