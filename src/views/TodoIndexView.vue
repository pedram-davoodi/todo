<template>
  <h1>TODOs ({{TodosCount}})</h1>
  <div>
    <ul>
      <li v-for="(todo , index) in todos" :key="index">
        <span ref="name">{{todo.name}}</span>
        <button @click="editTodo(index)">Edit</button>
        <button @click="deleteTodo(index)">X</button>
      </li>
    </ul>
    <input class="input" @keyup.enter="addTodo" type="text" placeholder="Add Todo" v-model="newTodoName">
  </div>
</template>

<script>
import {ref, computed, watchEffect} from "vue"
export default {
  name: "Home",
  setup(){
    const blockedWords = ['f-word']
    const todos = ref([
      {id:1, name:'todo1', description: "This is 1"},
      {id:2, name:'todo2', description: "This is 2"},
      {id:3, name:'todo3', description: "This is 3"},
    ]);
    const newTodoName = ref('')

    const TodosCount = computed(() => todos.value.length)

    watchEffect(() => {
      if (blockedWords.includes(newTodoName.value.toLowerCase())){
        alert(newTodoName.value + " is a block word")
        newTodoName.value = ""
      }
    })

    const addTodo = () => {
      if (newTodoName.value){
        let newItem = {id:Date.now() , name: newTodoName.value , description:"This is"+ todos.value.length + 1 }
        todos.value.push(newItem)
        newTodoName.value = ""
      }
    }

    const editTodo = (index) => {
    }

    const deleteTodo = (index) => {
      todos.value.splice(index  , 1)
    }

    return {
      todos, newTodoName,
      TodosCount,
      addTodo, deleteTodo, editTodo
    };
  }
}
</script>

<style>
ul{
  list-style: none;
  width: 322px;
  margin: 0 auto;
  padding: 0;
}
li{
  margin: 0 auto 10px;
  border: 1px solid black;
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  background: #dedede;
}
button{
  background-color: #616161;
  border-radius: 3px;
  border-color: black;
  cursor: pointer;
  color: white;
}
.input{
  width: 300px;
  display: block;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: none;
}
</style>