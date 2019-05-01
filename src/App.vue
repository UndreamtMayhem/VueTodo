<template>
  <div id="app">
    <nav>
      <Sidenav/>
    </nav>

    <router-view/>
  </div>
</template>

<script>
import Sidenav from "./components/layout/Sidenav";
export default {
  name: "app",
  components: {
    Sidenav
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
</style>
