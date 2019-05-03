<template>
  <div>
    <form>
      <i class="fas fa-plus" v-on:click="show = !show"></i>
      <transition name="fade" mode="out-in">
        <div class="add-form" v-if="show">
          <input type="text" v-model="title" name="title" id="add-title" placeholder="Add Todo...">
          <i class="fas fa-check" @click="addTodo"></i>
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      show: false
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const title = document.getElementById('add-title').value;
      console.log(title);
      this.show = !this.show;
      const newTodo = {
        title: title,
        completed: false
      };
      //sendup to parent
      this.$emit("add-todo", newTodo);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  margin: 0 1rem;
}
.add-form {
  width: 100%;
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
  border: none;
}

input[type="submit"] {
  flex: 2;
}
.fas {
  padding: 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
