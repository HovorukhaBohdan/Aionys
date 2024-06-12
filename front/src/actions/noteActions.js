import axios from 'axios';

export const FETCH_NOTES_REQUEST = 'FETCH_NOTES_REQUEST';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const fetchNotes = () => async (dispatch) => {
  dispatch({ type: FETCH_NOTES_REQUEST });
  try {
    const response = await axios.get('http://localhost:8088/api/notes');
    dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_NOTES_FAILURE, payload: error.message });
  }
};

export const addNote = (note) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8088/api/notes', note);
    dispatch({ type: ADD_NOTE, payload: response.data });
  } catch (error) {
    console.error('Error adding note:', error);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:8088/api/notes/${id}`, note);
    dispatch({ type: UPDATE_NOTE, payload: response.data });
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8088/api/notes/${id}`);
    dispatch({ type: DELETE_NOTE, payload: id });
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};
