angular.module('twitchList').service('StreamsListService', function(config, $http) {
    let self = this;

    // Get function
    self.getStreams = function(query) {
        let url = 'https://api.twitch.tv/kraken/search/channels?limit=5&query=' + query;

        let req = {
            method: 'GET',
            url: url,
            headers: {
                'Client-ID': config.twitch_client_id,
            }
        };

        return $http(req)
            .then(function(data) {
                return data;
            }).catch(function(err) {
                return err;
            })
    };
});