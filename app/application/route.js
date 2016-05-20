import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  currentUser: Ember.inject.service(),

  sessionAuthenticated() {
    this._super(...arguments);
    this.get(`currentUser`).checkCurrentUser();
  }
});
