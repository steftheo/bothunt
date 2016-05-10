import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
    return fetch(`http://bothunt.herokuapp.com/${url._id}`)
    .then(res => res.json());
  },
});
