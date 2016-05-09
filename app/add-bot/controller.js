import Ember from 'ember';

export default Ember.Controller.extend({
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
