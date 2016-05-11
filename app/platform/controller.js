import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(platform) {
      this.get(`model`).set(`platform`, platform);
      this.get(`model`).save().then(() => {
        this.transitionToRoute(`index`);
      });
    },

    destroy() {
      this.get(`model`).destroyRecord().then(() => {
        this.transitionToRoute(`index`);
      });
    },

    cancel() {
      this.get(`model`).rollbackAttributes();
      this.transitionToRoute(`index`);
    },
  },

  changedAttributesHash: Ember.computed(`model.{platform}`, function() {
    let changedAttributes = this.get(`model`).changedAttributes();
    let usableHash = Object.keys(changedAttributes).map(function(attributeName) {
      return {
        key: attributeName,
        earlierValue: changedAttributes[attributeName][0],
        currentBalue: changedAttributes[attributeName][1],
      };
    });
    return usableHash;
  }),
  // savePlatform({ name, url }) {
  //   const platform = this.store.createRecord(`platform`, {
  //     name: this.name,
  //     url: this.url,
  //   });
  //
  //   platform.save().then(() => {
  //     this.transitionToRoute(`index`);
  //   });
  // },

  // updatePlatform() {
  //   this.store.findRecord(`platform`, 1).then(function(link) {
  //     link.set(this.url);
  //   });
  // },
  //
  // destroyPlatform(platform) {
  //   store.find(`platform`, 2).then(function (platform) {
  //     platform.destroyRecord();
  //   });
  // },
});
