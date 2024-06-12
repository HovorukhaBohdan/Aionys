import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes, deleteNote } from '../actions/noteActions';
import { useTranslation } from 'react-i18next';

const NoteDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === parseInt(id))
  );

  useEffect(() => {
    if (!note) {
      dispatch(fetchNotes());
    }
  }, [dispatch, note]);

  const handleDelete = async () => {
    await dispatch(deleteNote(id));
    await dispatch(fetchNotes());
    navigate('/');
  };

  if (!note) {
    return <div>{t('loading')}</div>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <Link to={`/notes/${id}/edit`}><button>{t('edit')}</button></Link>
      <button onClick={handleDelete}>{t('delete')}</button>
      <Link to="/"><button>{t('back_to_notes')}</button></Link>
    </div>
  );
};

export default NoteDetail;
