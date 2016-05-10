import Ember from 'ember';

export default Ember.Controller.extend({
  // bot: {},
  // actions: {
  //   save() {
  //     const { name, imageUrl, description, websiteUrl, platform } = this.get(`bot`);
  //     const bot = this.store.createRecord(`bot`, {
  //       name,
  //       imageUrl,
  //       description,
  //       websiteUrl,
  //       platform,
  //     });
  //     bot.save().then((savedBot) => {
  //       this.transitionToRoute(`index`, savedBot);
  //     });
  //   },
  // },

  newBot(attrs) {
    const bot = this.store.createRecord(`newBot`, attrs);

    bot.save().then(() => {
      this.transitionToRoute(`index`);
    });
  },
  //   const attributes = {
  //     name: this.name,
  //     description: this.description,
  //     imageUrl: this.imageUrl,
  //     websiteUrl: this.websiteUrl,
  //     platform: this.platform,
  //   };
  //
  //   fetch(`http://bothunt.herokuapp.com`, {
  //     method: `POST`,
  //     headers: {
  //       Accept: `application/json`,
  //       'Content-Type': `application/json`,
  //     },
  //     body: JSON.stringify(attributes),
  //   }).then((res) => res.json())
  //   .then((bot) => {
  //     this.transitionToRoute(`index`);
  //   });
  // },
});
