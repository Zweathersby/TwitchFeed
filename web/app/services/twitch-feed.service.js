angular.module('apiaggApp').service('TwitchFeedService', function(config, $http) {
    let self = this;

    // Get Clips function
    self.getUserClips = function(user) {
        let url = 'https://api.twitch.tv/kraken/clips/top?channel=' + user + '&period=week&limit=10&';

        let req = {
            method: 'GET',
            url: url,
            headers: {
                'Client-ID': config.twitch_client_id,
                'Accept': 'application/vnd.twitchtv.v5+json',
            }
        };

        return $http(req)
            .then(function(data) {
                return data;
            }).catch(function(err) {
                return err;
            })
    };

    // Find user
    self.getUser = function(query) {
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

    self.getFollowing = function(userId) {
        let url = 'https://api.twitch.tv/kraken/users/' + userId + '/follows/channels';

        let req = {
            method: 'GET',
            url: url,
            headers: {
                'Client-ID': config.twitch_client_id,
                'Accept': 'application/vnd.twitchtv.v5+json',
            }
        };

        return $http(req)
            .then(function(data) {
                return data;
            }).catch(function(err) {
                return err;
            })
    };

    // Get game image
    // self.getGame = function(game){
    //   let url = 'https://api.twitch.tv/kraken/search/games?query=' + game;
    //
    //   let req = {
    //     method: 'GET',
    //     url: url,
    //     headers: {
    //       'Client-ID': config.twitch_client_id,
    //       'Accept': 'application/vnd.twitchtv.v5+json',
    //     }
    //   };
    //
    //   return $http(req)
    //     .then(function(data) {
    //       return data;
    //     }).catch(function(err) {
    //       return err;
    //     })
    // };
});