import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const endUser = this.get(`session.data.authenticated.user.id`);

    return this.store.findRecord(`end-user`, endUser);
  },
});
