$(document).ready(function()
{
  var collection = new todoCollection();
  
  collection.fetch(
  {
      success : function(todos,response)
      {
          var todoView = new TodoListView({model:todos});
          $("body").html(todoView.render().el);
      }
  });

});