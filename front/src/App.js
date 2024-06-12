import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotesList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import NoteForm from './components/NoteForm';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
    return (
        <Router>
            <div>
                <LanguageSwitcher />
                <Routes>
                    <Route path="/" element={<NotesList />} />
                    <Route path="/notes/new" element={<NoteForm />} />
                    <Route path="/notes/:id/edit" element={<NoteForm />} />
                    <Route path="/notes/:id" element={<NoteDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
