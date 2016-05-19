import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  checkCurrentUser() {
    const session = this.get(`session`);
    const store = this.get(`store`);

    if (session.get(`isAuthenticated`)) {
      const endUser = session.get(`data.authenticated.user.id`);

      store.findRecord(`end-user`, endUser).then((user) => {
        this.set(`user`, user);
      });
    }
  },
});
