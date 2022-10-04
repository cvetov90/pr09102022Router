import { reactive } from "vue";

export const NotesStore = reactive({
    notesArray: [],
    NoteId: 1,
    NoteIndex: 0,
    Note: {
        id: 0,
        title: "",
        text: ""
    },
    createNote (title, text) {
        this.Note.id = this.NoteId
        this.Note.title = title
        this.Note.text = text
        this.notesArray[this.NoteIndex] = Object.assign({}, this.Note)
        this.NoteId++
        this.NoteIndex++
    },
    deleteNote (note) {
        let indexDeletedNote = this.notesArray.indexOf(note)
        this.notesArray.splice(indexDeletedNote, 1)
        this.NoteIndex--
    }
});
