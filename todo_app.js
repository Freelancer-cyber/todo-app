// Aplication Todo
const app_todo = new Vue({
    //Element
    el: '#todo_app',

    // Data
    data: {
      todo_title: 'Todo list',
      newTodo: '',
      newGroup:'',
      todoId: 0, // Variabila asta !!!!!!!!!!!!!!!!!
      groupsTodos: [],
      todos: [],

    },

    //Methods
    methods: {
      // Function - add new group
      addGroup() {
        this.todos.splice(0,this.todos.length);
        this.groupsTodos.push({
          title: this.newGroup,
          completed: false,
        });
      },
      // Function - add new task
      addTodo() {
        if (this.newTodo.length > 22 ){
          this.newTodo = '';
        };
        this.todos.push({
          title: this.newTodo,
          completed: false,
        });
        this.todoId++;
        this.newTodo = '';
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
