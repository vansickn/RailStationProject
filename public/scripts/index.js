// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals); // initializing every single modal

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items); //initilaizing all the collapsible components for materialize

});
