import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login(email, password) {
    this.get(`session`).authenticate(`authenticator:application`, email, password)
      .then(() => {
        this.transitionToRoute(`index`);
      })
      .catch((reason) => {
        console.log(reason);
        window.alert(`Try again! Your credentials didn't match :(`);
      });
  },
  // login(attrs) {
  //   this.get(`session`).authenticate(`authenticator:application`, attrs.email, attrs.password)
  //   .then(() => {
  //     console.log(`logged in`);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // },
});
