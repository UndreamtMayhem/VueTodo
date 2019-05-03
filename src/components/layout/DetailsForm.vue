<template>
  <form @submit="onSubmit">
    <div class="container">
      <input type="checkbox" v-model="todo.completed" name="completed">
      <input type="text" v-model="todo.title" v-if="editing">
      <h3 v-else class="task-title">{{todo.title}}</h3>
      <i class="fas fa-star"></i>
    </div>

    <ul>
      <li class="complete-border">
        <i class="far fa-sun"></i> Add to My Day
        <select v-model="todo.listname" v-if="editing">
          <option disabled value>{{todo.listname}}</option>
          <option>myday</option>
          <option>important</option>
          <option>planned</option>
        </select>
        <span>Selected: {{ todo.listname }}</span>
      </li>
    </ul>

    <ul class="complete-border">
      <li>
        <i class="fas fa-stopwatch"></i>
        <input type="date" v-model="todo.remind_me" v-if="editing">
        <p v-else>Remind Me {{todo.remind_me}}</p>
      </li>
      <li>
        <input type="date" v-if="editing">
        <span v-else>
          <i class="fas fa-calendar-times"></i> Add due Date
        </span>
      </li>
    </ul>

    <ul class="complete-border">
      <li>
        <textarea name="note" id cols="30" rows="10" v-model="todo.note" v-if="editing"></textarea>
        <p v-else>{{todo.note}}</p>
      </li>
    </ul>

    <button type="submit" v-if="editing">Submit</button>
    <input type="button" v-else @click="editMode" value="edit">

    <footer>
      <i class="fas fa-chevron-right" @click="$emit('close-form', show)"></i>
      <p>Created on {{todo.created}}</p>
      <i
        class="fas fa-trash-alt"
        v-on:click="$emit('del-todo', todo.id); $emit('close-form', show)"
      ></i>
    </footer>
  </form>
</template>

<script>
import TodosAPI from "../../services/api/Todos";

export default {
  name: "DetailsForm",
  props: ["todo"],
  methods: {
    editMode() {
      this.editing = true;
    },
    onSubmit(e) {
      e.preventDefault();

      const updatedTodo = {
        created: this.todo.created,
        note: this.todo.note,
        remind_me: this.todo.remind_me,
        completed: this.todo.completed,
        favorited: this.todo.favorited,
        listname: this.todo.listname,
        title: this.todo.title
      };

      TodosAPI.updateTodo(this.todo.id, updatedTodo)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err))
        .finally(() => {
          console.log("Updated successfully");
          this.editing = false;
          
      
        });
    }
  },
  data() {
    return {
      todos: this.todos,
      editing: false,
      show: false
    };
  }
};
</script>

<style scoped>
.complete-border {
  border: 1px solid #ccc;
  margin: 0.25rem;
}

footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: #424242;
}
.task-title {
  padding: 0 0 0 1rem;
}
.fa-star {
  padding: 0 0 0 1rem;
}
form {
  width: 20%;
  height: 100vh;
  color: #757575;
  position: relative;
}
</style>
