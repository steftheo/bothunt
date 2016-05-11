import Ember from 'ember';

export default Ember.Controller.extend({
  saveBot(formValues) {
    const bot = this.store.createRecord(`bot`, formValues);

    bot.save().then(() => {
      this.transitionToRoute(`index`);
    });
  },
});
