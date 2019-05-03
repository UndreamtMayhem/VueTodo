<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      <span @click="$emit('display-todo', todo)">{{todo.title}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],

  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  margin: 0 1rem;
  padding: 1rem;
  border-bottom: 1px #ccc dotted;
}
span {
  padding-left: 1rem;
}
.is-complete {
  text-decoration: line-through;
}
</style>
