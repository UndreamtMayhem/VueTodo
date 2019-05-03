<template>
  <main class="main">
    <Header :title="title"/>
    {{ $route.params.name }}
    <div class="loader" v-if="loading"></div>
    <Todos v-else-if="!loading" v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    <AddTodo v-on:add-todo="addTodo"/>
  </main>
</template>

<script>
import Header from "../components/layout/Header";

import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
// use @
import TodosAPI from "../services/api/Todos";

export default {
  name: "PersonalList",
  components: {
    Todos,
    AddTodo,
    Header
  },

  methods: {
    deleteTodo(id) {
      TodosAPI.deleteTodo(id)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err))
        .finally(() => {
          console.log("Deleted successfully");
        });

    },
    addTodo(newTodo) {

      const { title, completed } = newTodo;

      TodosAPI.createTodo({ title, completed })
        .then(res => {
          this.todos = [...this.todos, res.data];
        })
        .catch(err => console.log(err))
        .finally(() => {
          console.log("New added successfully");
        });
        
    }
  },
  created() {

    TodosAPI.getTodosViaName(this.$route.params.name)
      .then(t => {
        this.todos = t;
      })
      .catch()
      .finally(() => {
        this.loading = false;
      });

  },
  data() {
    return {
      todos: [],
      title: "My Day",
      loading: true
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}

main {
  width: 100%;
  border-left: 2px solid #bdbdbd;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
