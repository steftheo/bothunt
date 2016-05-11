import Ember from 'ember';

export default Ember.Controller.extend({
  delete(platform) {
    if (confirm(`You Sure Fam?`)) {
      platform.destroyRecord();
    }
  },
});
