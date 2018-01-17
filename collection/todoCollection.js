var todoCollection = Backbone.Collection.extend({
  model:todoModel,
  url : "https://jsonplaceholder.typicode.com/todos"
});