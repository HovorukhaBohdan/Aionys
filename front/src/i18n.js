import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      "title": "Notes",
      "create_new_note": "Create New Note",
      "loading": "Loading...",
      "error": "Error:",
      "edit_note": "Edit Note",
      "create_note": "Create Note",
      "title_label": "Title",
      "content_label": "Content",
      "update": "Update",
      "create": "Create",
      "edit": "Edit",
      "delete": "Delete",
      "back_to_notes": "Back to Notes"
    }
  },
  fr: {
    translation: {
      "title": "Notes",
      "create_new_note": "Créer une nouvelle note",
      "loading": "Chargement...",
      "error": "Erreur:",
      "edit_note": "Modifier la note",
      "create_note": "Créer une note",
      "title_label": "Titre",
      "content_label": "Contenu",
      "update": "Mettre à jour",
      "create": "Créer",
      "edit": "Modifier",
      "delete": "Supprimer",
      "back_to_notes": "Retour aux notes"
    }
  },
  uk: {
    translation: {
      "title": "Нотатки",
      "create_new_note": "Створити нову нотатку",
      "loading": "Завантаження...",
      "error": "Помилка:",
      "edit_note": "Редагувати нотатку",
      "create_note": "Створити нотатку",
      "title_label": "Назва",
      "content_label": "Зміст",
      "update": "Оновити",
      "create": "Створити",
      "edit": "Редагувати",
      "delete": "Видалити",
      "back_to_notes": "Назад до нотаток"
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
