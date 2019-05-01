<template>
  <main class="main">
    <Header :title="title"/>
    <AddTodo v-on:add-todo="addTodo"/>
  </main>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Header from "../components/layout/Header";

export default {
  name: "Important",

  data() {
    return {
      Todos: [],
      title: "Important"
    };
  },
  components: {
    AddTodo,
    Header
  },
  methods: {
    deleteTodo(id) {
      return 0;
    },
    addTodo(newTodo) {
      return 0;
    }
  }
};
</script>

<style scoped>

</style>
