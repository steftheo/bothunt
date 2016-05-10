import Ember from 'ember';

export default Ember.Controller.extend({
  savePlatform({ name, url }) {
    const platform = this.store.createRecord(`platform`, {
      name: this.name,
      url: this.url,
    });

    platform.save().then(() => {
      this.transitionToRoute(`index`);
    });
  },

  updatePlatform() {
    this.store.findRecord(`platform`, 1).then(function(link) {
      link.set(this.url);
    });
  },

  destroyPlatform(platform) {
    store.find(`platform`, 2).then(function (platform) {
      platform.destroyRecord();
    });
  },
});
