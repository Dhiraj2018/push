const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BKPE9Fug_v4Iiv1gHOCefRSOzKx3TE8Y7YXtHLv3ei49OVsKEA7ngKE5zn93AQUuaSAPmDyORfn-Oqkp16Ovhj4',
  privateKey: 'HGkLcm1WlypVbKBdE_Q1RiVr42nG8n5al3mcktbEZqw'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
