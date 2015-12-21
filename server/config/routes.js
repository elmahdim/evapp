var mongoose = require('mongoose');

module.exports = function (app) {

    var eventsSchema = mongoose.Schema({
        title       : String,
        location    : String,
        cost        : String,
        discount    : String,
        video       : String,
        summary     : String,
        type        : String
    });

    var Events = mongoose.model('Events', eventsSchema);

    app
        // Get events list
        .get('/event_list', function (req, res) {
            Events.find({}).exec(function (err, collection) {
                /*
                if (collection.length === 0) {
                    var event = new Events({});
                    event.save();
                }
                */
                if (err) {
                    console.log(err);
                }
                res.json(collection);
            })
        })
        .get('/', function (req, res) {
            res.render('index');
        })
        .get('/partials/:partialPath', function (req, res) {
            res.render('partials/' + req.params.partialPath);
        })
        .get('/single/:id', function (req, res) {
            Events.findById(req.params.id, function(err) {
                if (err) {
                    console.error(err);
                    //res.status().json(err);
                } else {
                    res.json();
                    console.log('ID: ' + req.params.id);
                }
            });
            // console.log(res);
        })
}