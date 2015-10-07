flix.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.reviews = [
    {
      title: "aaa",
      body: "bbb",
      id: 1
    }
  ];

  factory.addReview = function() {
    factory.reviews.push({ title: factory.reviewTitle, body: factory.reviewBody, id: factory.reviews.length + 1});
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };
  return factory;
});
