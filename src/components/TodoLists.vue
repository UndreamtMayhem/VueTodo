<template>
  <ul>
    <transition name="fade" mode="out-in">
      <li v-if="show">
        <i  class="fas fa-tasks"></i>
        <input id="list-entry" type="text" class="new-list"  v-on:keyup.enter="say('hi')">
      </li>
    </transition>

    <li v-bind:key="todo.id" v-for="todo in todos">
      <span><i class="fas fa-tasks" @click="$emit('fetch-todos', todo.name)"></i>
      {{todo.name}}</span>
    </li>
    <li>
      <i class="fas fa-plus" v-on:click="show = !show"></i> New List
    </li>
  </ul>
</template>

<script>
import { get } from 'http';
export default {
  name: "TodoLists",
  data() {
    return {
      // retrieve from db
      todos: [{ id: 1, name: "dsfds" }],
      id:1,
      show: false,
     
    };
  },
  methods: {
    say: function (message) {
      
      let newListName = document.getElementById("list-entry").value;
      
      newListName = newListName.trim()

      if(newListName === ""){

        newListName = "Untitled";

      }
      // hardcoded will be able to get from the backend
      this.id += 1;
      
      this.todos.unshift({id:this.id, name: newListName})
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.new-list {
  width: 80%;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
