<template>
    <div class="container">
        <div class="form-add-note">
            <input placeholder="Заголовок заметки" v-model="NoteTitle">
            <input placeholder="Текст заметки" v-model="NoteText">
            <button @click="createNote">Добавить заметку</button>
        </div>
        <div class="notes-list">
            <table>
                <tr>
                    <th colspan="4">Заметки</th>
                </tr>
                <tr>
                    <td>Id</td>
                    <td>Заголовок заметки</td>
                    <td>Текст заметки</td>
                </tr>
                <tr v-for="note in notesArray" :key="note.id">
                    <td>
                        {{note.id}}
                    </td>
                    <td>
                        <input v-model="note.title">
                    </td>
                    <td>
                        <input v-model="note.text">
                    </td>
                    <td>
                        <button @click="deleteNote(note)">Удалить запись</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="array-tasks">
            Содержимое массива в котором хранится информация о задачах
            <br>
            {{notesArray}}
            <br>
            <br>
            Текущий NoteId - идентификатор следующий заметки
            <br>
            {{NoteId}}
            <br>
            <br>
            Текущий NoteIndex - индекс следующего элемента в массиве
            <br>
            {{NoteIndex}}
        </div>
    </div>
</template>

<script>
import { NotesStore } from '@/NotesStore';

export default {
    name: "NoteComp",
    data() {
        return {
            notesArray: NotesStore.notesArray,
            NoteTitle: "",
            NoteText: "",
            NoteId: NotesStore.NoteId,
            NoteIndex: NotesStore.NoteIndex
        }
    },

    methods: {
        createNote: function() {
            NotesStore.createNote(this.NoteTitle, this.NoteText)
            this.NoteId = NotesStore.NoteId
            this.NoteIndex = NotesStore.NoteIndex
        },
        deleteNote: function(note) {
            NotesStore.deleteNote(note)
            this.NoteIndex = NotesStore.NoteIndex
        },
    }
}
</script>

<style>
.container {
    display: grid;
    grid-template-areas:
        "A A"
        "B C";
    width: 100%;
    /* justify-items: center; */
    justify-content: stretch;
    gap: 10px;
}

table,
td {
    border: 1px solid black;
    width: 100%;
    text-align: center;
}

.form-add-note {
    grid-area: A;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 50%; */
    margin-bottom: 30px;
}

.form-add-note>input {
    width: 50%;
    margin: 5px;
}

.form-add-note>button {
    width: 30%;
    margin: 5px;
}

.notes-list {
    grid-area: B;
    /* width: 50%; */
    /* background-color: blue; */
    min-width: 40vw;
    justify-self: start;
}

.array-tasks {
    grid-area: C;
    /* width: 50%; */
    /* background-color: antiquewhite; */
    /* min-width: 40vw; */
    /* max-width: 30%; */
    padding: 15px;
}
</style>