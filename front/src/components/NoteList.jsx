import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';
import { useTranslation } from 'react-i18next';

const NotesList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { notes, loading, error } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (loading) {
    return <div>{t('loading')}</div>;
  }

  if (error) {
    return <div>{t('error')} {error}</div>;
  }

  return (
    <div>
      <h1>{t('title')}</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/notes/new">{t('create_new_note')}</Link>
    </div>
  );
};

export default NotesList;
