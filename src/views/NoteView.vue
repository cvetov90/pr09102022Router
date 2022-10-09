<template>
  <div class="home">
    <NoteComp></NoteComp>
  </div>
</template>

<script>
// @ is an alias to /src
import NoteComp from '@/components/NoteComp.vue';

export default {
  name: 'NotesView',
  components: {
    NoteComp
  }
}
</script>
