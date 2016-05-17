import Ember from 'ember';

export default Ember.Component.extend({
  changeLikeCounter(val) {
    this.set(`likes`, this.likes + val);
  },
});
