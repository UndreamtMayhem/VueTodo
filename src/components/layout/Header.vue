
<template>
  <header class="header">
    <h1 >{{title}}</h1>
  </header>
</template>



<script>
export default {
  name: "Header",
  props: ['title'],
};
</script>

<style scoped>
.header {
  background: #667db6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #667db6,
    #0082c8,
    #0082c8,
    #667db6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #667db6,
    #0082c8,
    #0082c8,
    #667db6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
  height: 200px;
  padding: 0 2rem;
}
h1 {
   position: relative;
  top: 140px;;
}
</style>