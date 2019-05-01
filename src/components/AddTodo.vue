<template>
  <div>
    <form @submit="addTodo">
      <i class="fas fa-plus"></i>
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">
      <i class="fas fa-check"></i>
    </form>
  </div>
</template>

<script>
export default {
    name: "AddTodo",
    data(){
        return {
            title: '',

        }
    },
    methods: {
        addTodo(e){
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }
            //sendup to parent
            this.$emit('add-todo', newTodo)
        }
    }

};
</script>

<style scoped>
form {
  display: flex;
   margin: 0 1rem;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
  border: none;
}

input[type="submit"] {
  flex: 2;
}
.fa-plus {
  padding: 1rem;
}
</style>
1