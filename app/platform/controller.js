import Ember from 'ember';

export default Ember.Controller.extend({
  savePlatform({ name, url }) {
    const platform = this.store.createRecord(`platform`, { name });

    platform.save().then(() => {
      const platformUrl = this.store.createRecord(`url`, { url });

      return platformUrl.save();
    }).then(() => {
      this.transitionToRoute(`index`);

    });
  },
});
