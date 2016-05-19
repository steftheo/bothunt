import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  classNames: [`bot-item`],

  addLike(bot) {
    const user = this.get(`currentUser.user`);

    if (!user) {
      alert(`Gotta Login in to like a bot`);
      return;
    }

    // Create a new like record with the bot and user
    this.get(`store`).createRecord(`like`, { bot, endUser: user }).save();
  },

  destroyBot(bot) {
    const user = this.get(`currentUser.user`);

    if (!user) {
      alert(`Login in to destroy a bot Brah`);
      return;
    }

    if (confirm(`You Sure Fam?`)) {
      bot.destroyRecord();
    }
  },
});
