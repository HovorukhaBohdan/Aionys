import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../actions/noteActions';

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NOTES_SUCCESS:
      return { ...state, loading: false, notes: action.payload };
    case FETCH_NOTES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default notesReducer;
