export const CONTEXT = 'containers/home-page/navigation';
export const SETTING_NAVIGATION_TYPE = 'setting';
export const FRIEND_NAVIGATION_TYPE = 'friend';
export const CHAT_NAVIGATION_TYPE = 'chat';
export const NOTIFICATION_NAVIGATION_TYPE = 'notification';
export const MODE_NAVIGATION_TYPE = 'mode';
export const LOGOUT_NAVIGATION_TYPE = 'logout';
export const NAVIGATIONS = [
  {
    id: 1,
    type: SETTING_NAVIGATION_TYPE,
    classNameIcon: 'ion-md-settings',
    navigationLabel: 'homeChat.settingLabel',
  },
  {
    id: 2,
    type: FRIEND_NAVIGATION_TYPE,
    classNameIcon: 'ion-ios-home',
    navigationLabel: 'homeChat.friendLabel',
    notificationCount: 3,
  },
  {
    id: 3,
    type: CHAT_NAVIGATION_TYPE,
    classNameIcon: 'ion-ios-chatbubbles',
    navigationLabel: 'homeChat.recentChatLabel',
    notificationCount: 8,
  },
  {
    id: 4,
    type: NOTIFICATION_NAVIGATION_TYPE,
    classNameIcon: 'ion-md-notifications',
    navigationLabel: 'homeChat.notificationLabel',
    notificationCount: 20,
  },
  {
    id: 5,
    type: MODE_NAVIGATION_TYPE,
    classNameIcon: 'ion-md-color-wand',
    navigationLabel: 'homeChat.nightModeLable',
  },
  {
    id: 6,
    type: LOGOUT_NAVIGATION_TYPE,
    classNameIcon: 'ion-md-power',
    navigationLabel: 'homeChat.logoutLabel',
  },
];
