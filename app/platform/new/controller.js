import Ember from 'ember';

export default Ember.Controller.extend({
  savePlatform(formValues) {
    const platform = this.store.createRecord(`platform`, formValues);

    platform.save().then(() => {
      this.transitionToRoute(`platform.index`);
    });
  },
});
