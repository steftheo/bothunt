import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  date: attr(),
  endUser: attr('bwlongs-to'),
  bot: belongsTo('bot')
});
