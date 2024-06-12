import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateNote, fetchNotes } from '../actions/noteActions';
import { useTranslation } from 'react-i18next';

const NoteForm = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === parseInt(id))
  );
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const noteData = { title, content };

    if (id) {
      await dispatch(updateNote(id, noteData));
      navigate(`/notes/${id}`);
    } else {
      await dispatch(addNote(noteData));
      await dispatch(fetchNotes());
      navigate('/');
    }
  };

  return (
    <div>
      <h1>{id ? t('edit_note') : t('create_note')}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{t('title_label')}</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('title_label')}
            required
          />
        </div>
        <div>
          <label>{t('content_label')}</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={t('content_label')}
            required
          />
        </div>
        <button type="submit">{id ? t('update') : t('create')}</button>
      </form>
    </div>
  );
};

export default NoteForm;
