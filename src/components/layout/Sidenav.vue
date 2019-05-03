<template>
  <div class="side-nav" v-on:fetch-todos="fetchTodos">
    <h3>TodoList</h3>
    <router-link to="/">
      <i class="fas fa-sun"></i> My Day <span class="badge-count">4</span>
    </router-link>
    <router-link to="/important">
      <i class="far fa-star"></i> Important
    </router-link>
    <router-link to="/planned">
      <i class="far fa-calendar-alt"></i> Planned
    </router-link>
    <router-link to="/tasks">
      <i class="fas fa-tasks"></i> Tasks
    </router-link>
    
    <TodoLists />
   
  </div>
</template>

<script>
// get the todos here
import TodoLists from "../../components/TodoLists";


export default {
  name: "Sidenav",
  components: {
    TodoLists,
    
  },
  methods: {
    fetchTodos(name){
      console.log(name)
    },
  }
};
</script>

<style scoped>
h3 {
  padding: 1rem;
}
.badge-count {
  float: right;
}
.side-nav {
  height: 100vh;
}

.far,
.fas {
  color: #2196F3;
}

.router-link-exact-active {
  background: #eeeeee;
  border-left: 4px solid #5e35b1;
  font-weight: bold;
}
</style>
