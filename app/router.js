import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route(`logout`);

  this.route(`index`, { path: `/` }, function() {
    this.route(`register`);
    this.route(`login`);
    this.route('bot', {
      path: '/:id'
    });
    this.route('add-bot', function() {
    });
  });
  this.route('add-bot');
  this.route('platform', function() {
    this.route('new');

    this.route('edit', {
      path: '/:id'
    });
  });
  this.route('bot');
});

export default Router;
