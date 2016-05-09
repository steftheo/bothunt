import Ember from 'ember';

export default Ember.Controller.extend({
  newUser(attrs) {
    const user = this.store.createRecord(`end-user`, attrs);

    user.save().then(() => {
      this.transitionToRoute(`index`);
    });
  },
});
