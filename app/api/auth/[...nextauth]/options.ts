import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import { env } from '@/app/lib';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET
    }),
    FacebookProvider({
      clientId: env.FACEBOOK_ID,
      clientSecret: env.FACEBOOK_SECRET
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    }),
    DiscordProvider({
      clientId: env.DISCORD_ID,
      clientSecret: env.DISCORD_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@gmail.com'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const response = await fetch(`${env.NEXT_PUBLIC_APP_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        const respData = await response.json();

        if (!response.ok) {
          return null;
        }

        return respData.data;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Handle CredentialsProvider
      if (user) {
        token.accessToken = user.accessToken;
        token.role = user.role;
      }

      // Handle GoogleProvider
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken;
        session.user.role = token.role;
      }

      return session;
    }
  }
};
