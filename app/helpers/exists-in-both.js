import Ember from 'ember';
import _ from 'lodash';

export function existsInBoth(arrays/*, hash*/) {
  return _.intersection(...arrays).length >= 1;
}

export default Ember.Helper.helper(existsInBoth);
