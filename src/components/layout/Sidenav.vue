<template>
  <div class="side-nav">
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
    <ul>
      <li><i class="fas fa-plus"></i> New list</li>
  
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidenav"
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


ul {
  list-style: none;
  border-top: 1px solid #ccc;
}
li {
  padding: 1rem;
}
a {
  display: block;
  text-decoration: none;
  padding: 1rem;
  color: #000;
}
.far,
.fas {
  padding-right: 0.5rem;
  color: #2196F3;
}

.router-link-exact-active {
  background: #eeeeee;
  border-left: 4px solid #5e35b1;
  font-weight: bold;
}
</style>
