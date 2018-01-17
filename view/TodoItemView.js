var TodoItemView = Backbone.View.extend({
	tagName : "li",
    events 		:   {
    					"click #box"    :  "onToggle",
    					"click #delete" :  "onDelete"
    				},
    initialize 	: 	function(param)
    				{
    					console.log(param.model);
    					console.log(this.model);
    					this.model.on("change",this.render,this);

    				},
    onDelete	:   function()
    				{
    					this.model.destroy();
    				},
    onToggle	: 	function()
    				{
    					var currentStatus = this.model.get("completed")
    					this.model.set("completed",!currentStatus);
    					console.log(this.model);
    				},
	render 		: 	function() 
					  {
					  	
					  	var status = this.model.get("completed");
					  	var className = (status) ? "strike" : "";
					  	var viewdata = (status) ? "checked" : "";
					  	this.$el.attr("id", this.model.cid);
						this.$el.html("<input id = 'box'  type = 'checkbox' "+viewdata+"></input><b class = '"+className+"'>"+this.model.get("title")+"</b> <button id = 'delete'>Delete</button>");

						console.log(this.el);
						console.log($(this.el));
						console.log(this.$el);
						
						return this;
					  }

});