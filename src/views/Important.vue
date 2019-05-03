<template>
  <main class="main">
    <div class="main-section">
      <Header :title="title"/>
      <div class="loader" v-if="loading"></div>
      <Todos
        v-else-if="!loading"
        v-bind:todos="todos"
        v-on:del-todo="deleteTodo"
        v-on:display-todo="displayTodo"
      />
      <AddTodo v-on:add-todo="addTodo"/>
      <i @click="fetchMore" class="fas fa-chevron-down"></i>

    </div>

    <DetailsForm :todo="todo" v-on:del-todo="deleteTodo" v-if="show" v-on:close-form="closeForm"/>
  </main>
</template>

<script>
// linked for removal
import URLS from "../../config";
import Header from "../components/layout/Header";
import DetailsForm from "../components/layout/DetailsForm";

import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

// use @
import TodosAPI from "../services/api/Todos";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
    Header,
    DetailsForm
  },
// maybe factor out date methods into a service
  methods: {
    displayTodo(todo) {
      // use in the component
      // maybe use the id to display indiv one
      this.todo = todo;
      this.show = true;
    },
    closeForm(show) {
      this.show = show;
    },
    formateDate(dateOBJ) {
      console.log(dateOBJ);
      var formattedDate =
        (dateOBJ.getMonth()+ 1) +
        "/" +
        dateOBJ.getDate() +
        "/" +
        dateOBJ.getFullYear();
        console.log(formattedDate);
      return formattedDate;
    },

    addDay() {

      var today = new Date();
      var tomorrow = new Date();

      tomorrow.setDate(today.getDate() + 1);
  
      let f = this.formateDate(tomorrow);

      return f;
    },

    deleteTodo(id) {
      TodosAPI.deleteTodo(id)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err))
        .finally(() => {
          console.log("Deleted successfully");
        });
    },

    addTodo(newTodo) {

      const created = this.formateDate(new Date());
      const note = "";
      const remindme =  this.addDay();
      const favorited = false;
      const listname = "important";

      const { title, completed } = newTodo;

      TodosAPI.createTodo({
        created,
        note,
        remindme,
        completed,
        favorited,
        listname,
        title
      })
        .then(res => {
          this.todos = [ res.data, ...this.todos];
        })
        .catch(err => console.log(err))
        .finally(() => {
          console.log("New added successfully");
        });
    },

    fetchMore(){
      this.page += 1;

      TodosAPI.getTodosViaName("important", this.page)
      .then(t => {
        this.todos = [  ...this.todos, ...t]
      })
      .catch()
      .finally(() => {
        this.loading = false;
        console.log(this.todos);
      });
    }
  },
  created() {
    TodosAPI.getTodosViaName("important", this.page)
      .then(t => {
        this.todos = t;
      })
      .catch()
      .finally(() => {
        this.loading = false;
        console.log(this.todos);
      });
  },
  data() {
    return {
      todos: [],
      todo: [],
      page: 1,
      show: false,
      loading: true,
      title: "My Day"
    };
  }
};
</script>

<style scoped>

</style>
