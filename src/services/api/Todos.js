import axios from 'axios';

export default {
    // Create 
    createTodo(payload) {
        return axios.post('/todos', payload)
    },
    //read
    getTodoViaID() {
        return 0;
    },
    //update
    updateTodo(id, todo) {
        return axios.put(`/todos/${id}`, todo)
            .then(response => {
                return response.data
            });
    },
    //delete
    deleteTodo(id) {
        return axios.delete('/todos/' + id).then(response => {
            return response.data
        });

    },

    getTodosViaName(name, page) {
        //_page=2&_sort=created&_order=desc&_limit=5
        return axios.get('/todos?listname=' + name + "&_page=" + page + "&_sort=created&_order=desc&_limit=5")
            .then(response => {
                return response.data
            })
    }
}