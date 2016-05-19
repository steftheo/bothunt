import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      bots: store.findAll('bot'),
      platforms: store.findAll('platform')
    });
  },

  afterModel() {
    this.get(`currentUser`).checkCurrentUser();
  },
});
