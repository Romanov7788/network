const FriendShipService = require("../service/friend-service");

class Friends {
  async addFriends(req, res) {
    const myId = req.user.id;
    try {
      const friendsId = req.body.id;
      await FriendShipService.addFriends(friendsId, myId);
      return res.json({
        status: "success",
        message: "Friend request has been sent.",
      });
    } catch (e) {
      res.json({
        status: "error",
        message: `Sorry we have some problem with ${e}`,
      });
    }
  }

  rejectedFriends(req, res) {
    const myId = req.user.id;
    try {
      const friendsId = req.body.id;
      FriendShipService.rejectedFriends(friendsId, myId);
      return res.json({
        status: "success",
        message: "Friend rejected.",
      });
    } catch (e) {
      res.json({
        status: "error",
        message: `Sorry we have some problem with ${e}`,
      });
    }
  }

  async acceptFriends(req, res) {
    const myId = req.user.id;
    try {
      const friendsId = req.body.id;
      await FriendShipService.acceptFriends(friendsId, myId);
      return res.json({
        status: "success",
        message: "Friend accepted.",
      });
    } catch (e) {
      res.json({
        status: "error",
        message: `Sorry we have some problem with ${e}`,
      });
    }
  }
}
module.exports = new Friends();
