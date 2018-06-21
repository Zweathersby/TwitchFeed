angular.
  module('twitchList').
  controller('TwitchStreamsController', function($alert, StreamsListService) {
    let self = this;
    self.streams = [];
    self.query = '';

    self.queryStreams = function(query) {
      console.log("query: ", query);
      StreamsListService.getStreams(query).then(function(data){
        console.log(data);
        if (data && data.data) {
          self.streams = data.data;
          console.log("streams: ", self.streams);
        };
      }).catch(function(err){
        $alert({
          content: 'An error occured getting streams',
          type: 'danger',
          show: true
        })
      });
    }
  });
