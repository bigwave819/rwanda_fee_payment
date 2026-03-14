import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private readonly logger = new Logger(FirebaseService.name);

  constructor() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    }
  }

  /**
   * Send OTP via Firebase Cloud Messaging to the user's device token.
   * The app must handle this notification to display the OTP to the user.
   */
  async sendOtpNotification(fcmToken: string, otp: string): Promise<void> {
    const message: admin.messaging.Message = {
      token: fcmToken,
      notification: {
        title: 'Your Verification Code',
        body: `Your OTP is: ${otp}. It expires in 10 minutes.`,
      },
      data: {
        type: 'OTP',
        otp,
      },
      android: {
        priority: 'high',
        notification: { sound: 'default' },
      },
      apns: {
        payload: {
          aps: { sound: 'default', badge: 1 },
        },
      },
    };

    try {
      const response = await admin.messaging().send(message);
      this.logger.log(`OTP notification sent: ${response}`);
    } catch (error) {
      this.logger.error('Failed to send OTP notification', error);
      throw error;
    }
  }

  /**
   * Send a general push notification.
   */
  async sendPushNotification(
    fcmToken: string,
    title: string,
    body: string,
    data?: Record<string, string>,
  ): Promise<void> {
    const message: admin.messaging.Message = {
      token: fcmToken,
      notification: { title, body },
      data,
      android: { priority: 'high' },
    };

    try {
      await admin.messaging().send(message);
      this.logger.log(`Push notification sent to token: ${fcmToken}`);
    } catch (error) {
      this.logger.error('Failed to send push notification', error);
      throw error;
    }
  }
}