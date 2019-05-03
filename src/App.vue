<template>
  <div id="app">
    <nav >
      <Sidenav/>
    </nav>

    <router-view/>

  </div>
</template>

<script>
import Sidenav from "./components/layout/Sidenav";
import DetailsForm from "./components/layout/DetailsForm";
export default {
  name: "app",
  components: {
    Sidenav,
    DetailsForm
  }, 
  methods: {
    fetchTodos(name){
      console.log(name)
    },
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
#app {
  display: flex;
  flex-wrap: row;
}

nav {
  width: 15%;
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
}

</style>
