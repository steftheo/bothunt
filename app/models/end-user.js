import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  email: attr(),
  password: attr(),
  imageUrl: attr(),
  username: attr(),
  likes: hasMany('like'),
  bots: hasMany('bot')
});
