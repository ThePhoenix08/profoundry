import { Router } from "express";

const mainRouter = Router();
mainRouter.use(authMiddleware);

mainRouter.get("/users/getProfile", userController.getProfile);
mainRouter.get("/users/getPublicProfile/:id", userController.getPublicProfile);
mainRouter.put("/users/getProfile", userController.updateProfile);

mainRouter.get("/users/:userId/friends", getUserFriends);
mainRouter.post("/users/:userId/friends/:friendId", addFriend);
mainRouter.delete("/users/:userId/friends/:friendId", removeFriend);

mainRouter.get("/servers", getServers);
mainRouter.post("/servers", createServer);
mainRouter.get("/servers/:serverId", getServerDetails);
mainRouter.put("/servers/:serverId", updateServerDetails);
mainRouter.delete("/servers/:serverId", deleteServer);

mainRouter.get("/servers/:serverId/members", getServerMembers);
mainRouter.post("/servers/:serverId/members", addServerMember);
mainRouter.delete("/servers/:serverId/members/:userId", removeServerMember);

mainRouter.get("/servers/:serverId/channels", getChannels);
mainRouter.get("/channels/:channelId", getChannelDetails);
mainRouter.post("/channels", createChannel);
mainRouter.put("/channels/:channelId", updateChannelDetails);
mainRouter.delete("/channels/:channelId", deleteChannel);

mainRouter.get("/channels/:channelId/messages", getMessages);
mainRouter.post("/channels/:channelId/messages", sendMessage);
mainRouter.put("/messages/:messageId", editMessage);
mainRouter.delete("/messages/:messageId", deleteMessage);

mainRouter.get("/notifications", getNotifications);
mainRouter.post("/notifications", sendNotification);
mainRouter.put("/notifications/:notificationId", updateNotification);
mainRouter.delete("/notifications/:notificationId", deleteNotification);

mainRouter.get("/activity", getUserActivity);
mainRouter.post("/activity", logUserActivity);

export default mainRouter;
