import Ember from 'ember';

export default Ember.Controller.extend({
  saveBot({ name, description, imageUrl, websiteUrl, platforms }) {
    const bot = this.store.createRecord(`bot`, { name, description, imageUrl, websiteUrl });

    bot.save().then(() => {
      platforms.forEach((platform) => {
        this.store.createRecord(`implementation`, { bot, platform }).save();
      });
      this.transitionToRoute(`index`);
    });
  },

  addPlatform(change, oldPlatforms, platform, isToggled) {
    if (oldPlatforms === undefined) {
      oldPlatforms = [];
    }

    if (isToggled) {
      return change([...oldPlatforms, platform]);
    }

    change(oldPlatforms.filter(p => p !== platform));
  }
});
