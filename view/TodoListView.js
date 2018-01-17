var TodoListView = Backbone.View.extend({
	tagName 	 : "ul",
	initialize   :  function(param)
					{
						this.model.on("remove",this.removeItem,this);
					},
	events		 :  {
						"keypress #add"  : "addOneTodo"
					},
	removeItem	 :  function(model)
					{
						alert("3");
					  this.$el.find("li#"+model.cid).remove();
					},
	addOneTodo	 :  function(e)
					{
						console.log($(e.currentTarget).val());
						if(e.keyCode == 13)
						{
							var $textInput = $(e.currentTarget);

							var todo = {
					    
					   			 title : $textInput.val(),
					    		completed : false
	  						};
							var tmodel  = new todoModel(todo);
							$textInput.val("");
							var todoItemView = new TodoItemView({model:tmodel});
							this.$el.append(todoItemView.render().el);
						}
						
					},

	render 		 :  function()
					{
						var self = this;
						this.$el.append("<input type = 'text' id ='add' />");
						this.model.each(function(Todomodel)
						{
							var todoItemView = new TodoItemView({model:Todomodel});
						   	self.$el.append(todoItemView.render().el);
						});
						return this;
					}

});