flix.directive("switchClass", function() {
  return function(scope, element) {
    element.bind("click", function() {
      element.toggleClass("nightmode");
    });
  }
});
