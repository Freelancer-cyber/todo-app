Vue.component('test',{

});

// Aplication Todo
const app_todo = new Vue({
    //Element
    el: '#todo_app',

    // Data
    data: {
      todo_title: 'Todo list',
      newGroup:'',
      groupId:0,
      groupsTodos: [],
      todoId: 0,
      todos: [],
    },

    //Methods
    methods: {
      // Function - add new group
      addGroup() {
        this.groupsTodos.push({
          title: this.newGroup,
          newTodo: '',
          arr: [],
          completed: false,
        });
        this.newGroup = '';
      },
      // Function - add new task
      addTodo(group) {
          this.todos.push({
          title: group.newTodo,
          completed: false,

        });
        group.newTodo = '';
      },

      // Function - remove a task
      removeTodo(todo){
        const indexTodo = this.todos.indexOf(todo);
        this.todos.splice(indexTodo,1);
      },

      // Function - remove all tasks
      allRemove() {
        this.todos.splice(0,this.todos.length);
      },

      // Function - all task mark as done
      allDone() {
        this.todos.forEach(todo =>{
          if(todo.completed == true)
          todo.completed = false
          else todo.completed = true;
        })
      },

    },
  }); // Aplication Todo
