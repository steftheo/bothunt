import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  getLikes(likes) {
    const loggedIn = this.get(`session.data.authenticated.user.id`);

    return likes.any((curr) => {
      return curr.get(`endUser.id`).id === loggedIn.id;
    });
  },
});
