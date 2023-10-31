import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    APP_BASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
    DISCORD_ID: z.string(),
    DISCORD_SECRET: z.string(),
    FACEBOOK_ID: z.string(),
    FACEBOOK_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnv: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    DISCORD_ID: process.env.DISCORD_ID,
    DISCORD_SECRET: process.env.DISCORD_SECRET,
    FACEBOOK_ID: process.env.FACEBOOK_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
