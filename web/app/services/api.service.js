angular.module('apiaggApp').service('ApiService', function(config, $http){
  let self = this;

  // Get function
  self.get = function(){

    let req = {
      method: 'GET',
      url: config.api_url,
    };

    return $http(req)
      .then(function(data) {
        return data;
      }).catch(function(err) {
        return err;
      })
  };
});
