import Ember from 'ember';

export default Ember.Controller.extend({
  newUser(attrs) {
    const user = this.store.createRecord(`end-user`, attrs);
    user.save().then(() => {
      this.toggleProperty(`newUser`);
      console.log(`registered`);
    }).catch((err) => {
      console.log(err);
    });
    this.transitionToRoute(`index`);
  },

  deleteUser(user) {
    user.destroyRecord();
  },
});
