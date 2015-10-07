flix.factory('MoviesFactory', function MoviesFactory() {
  var factory = {};
  factory.reviews = [
    {
      title: "Stranger Danger",
      body: "Not the educational movie I thought this would be. Not for kids.",
      id: 1
    },
    {
      title: "Upload Universe",
      body: "A very art-house movie about a future where we live in a virtual world.",
      id: 2
    },
    {
      title: "16 Candles, again",
      body: "Skip this remake. Terrible music too",
      id: 3
    }
  ];

  factory.addReview = function() {
    factory.reviews.push({ title: factory.reviewTitle, body: factory.reviewBody, id: factory.reviews.length + 1});
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };
  return factory;
});
