import Ember from 'ember';

export default Ember.Controller.extend({
  savePlatform(platform, formValues) {
    platform.setProperties(formValues);

    platform.save().then(() => {
      this.transitionToRoute(`index.manage-platforms`);
    });
  },
});
