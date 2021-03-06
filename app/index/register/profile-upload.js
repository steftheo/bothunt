import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  upload(file) {
    const data = new FormData();
    data.append(`value`, file);

    return Ember.$.ajax({
      data,
      method: `POST`,
      cache: false,
      processData: false,
      contentType: false,
      url: `http://bothunt.herokuapp.com/api/containers/imageURL/upload`,
    });
  },

  destroy(file) {
    const url = file.replace(`download`, `files`);

    return Ember.$.ajax({
      method: `DELETE`,
      url,
    });
  },

  deserializeResponse(response) {
    const data = response.result.files.value[0];

    return `http://bothunt.herokuapp.com/api/containers/imageURL/download/${data.name}`;
  },

  requestError(err) {
    // Handle request errors here
    console.log(err);
  },
});
