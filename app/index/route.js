import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`http://bothunt.herokuapp.com`)
      .then((res) => {
        return res.json();
      });
  },
});
