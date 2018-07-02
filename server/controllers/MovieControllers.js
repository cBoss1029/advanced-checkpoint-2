let MovieModel = require('../models/Movie');

module.exports.list =  function list(request, response) {
    MovieModel.find({}).exec()
    .then(movies => {
        response.json(movies);
    });
}
module.exports.show =  function show(request, response) {
    const id =  request.params.id
    MovieModel.findById(id).exec()
    .then(movie => {
        response.json(movie);
    })
}
module.exports.create =  function create(request, response) {
    let newMovie = new MovieModel(
        request.body
    );
    newMovie.save()
    .then(savedMovie => {
        response.json(savedMovie);
    });

}