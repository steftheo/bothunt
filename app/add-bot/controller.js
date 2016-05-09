import Ember from 'ember';

export default Ember.Controller.extend({
  newBot(attrs) {
    const member = this.store.createRecord(`newBot`, attrs);

    member.save().then(() => {
      this.transitionToRoute(`index`);
    });
  },
});
