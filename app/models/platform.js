import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  url: attr(),
  logo: attr(),
  name: attr(),
  implementations: hasMany('implementation')
});
