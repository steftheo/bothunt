import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  classNames: [`bot-item`],

  addLike(bot) {
    const user = this.get(`currentUser.user`);

    if (!user) {
      alert(`You must be logged in to like a bot`);
      return;
    }

    // Create a new like record with the bot and user
    this.get(`store`).createRecord('like', { bot, endUser: user }).save();
  },
});
