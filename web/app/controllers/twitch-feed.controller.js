angular.
  module('apiaggApp').
  controller('TwitchFeedController', function($alert, $sce, TwitchFeedService) {
    let self = this;
    self.clips = [];
    self.userId = '';
    self.userClips = [];
    self.following = [];
    self.followingList = [];
    self.quantity = 5;
    self.name = '';
    self.orderProp = '-views';
    self.showData = false;

    //-- Input name finds matching userId
    self.getUserId = function (name) {
      TwitchFeedService.getUser(name).then(function(data) {
        if(data) {
          self.userId = data.data.channels[0]._id;
          console.log(name + "=> user: ", self.userId);

          self.findFollowing(self.userId);
        };
      }).catch(function(err) {
        $alert({
          content: 'An error occured finding the user',
          type: 'danger',
          duration: 5,
          show: true
        })
      });
    }

    //-- Compiles following list from userId
    self.findFollowing = function (userId) {
      TwitchFeedService.getFollowing(userId).then(function(data) {
        if(data) {
          self.following = data.data.follows;
          console.log("list: ",self.following);
          //- Combine follows into one array
          angular.forEach(self.following, function(user, key) {
            self.followingList = self.followingList.concat(user.channel.name);

          });

          self.queryClips(self.followingList);
        };
      }).catch(function(err) {
        $alert({
          content: 'An error occured getting user follows',
          type: 'danger',
          show: true
        })
      });

      self.followingList = [];
    }

    //-- Finds top clips from following list
    self.queryClips = function (list) {

      angular.forEach(list, function(user, key) {
        TwitchFeedService.getUserClips(user).then(function(data) {
          if(data) {
            self.clips = data.data.clips;
            self.userClips = self.userClips.concat(self.clips);
          };
        }).catch(function(err) {
          $alert({
            content: 'An error occured getting user clips',
            type: 'danger',
            show: true
          })
        });
      });

      self.userClips = [];
    }

    //-- Insert more clips on the page
    self.moreClips = function () {
      self.quantity += 5;
    }
});
