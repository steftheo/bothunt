import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

  name: attr(),
  description: attr(),
  imageUrl: attr(),
  websiteUrl: attr(),
  dateAdded: attr('date', {
    defaultValue() { return new Date(); }
  }),
  endUser: belongsTo('end-user'),
  implementations: hasMany('implementation'),
  likes: hasMany('like'),

  likeIds: Ember.computed.mapBy('likes', 'id'),
});
