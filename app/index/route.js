import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      bots: store.findAll('bot'),
      platforms: store.findAll('platform')
    });
  },
});
