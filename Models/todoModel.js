var todoModel = Backbone.Model.extend({
  urlRoot	: "https://jsonplaceholder.typicode.com/todos",
  defaults : 	{
				    id 			: "",
				    title : "",
				    completed : false
  				}
});