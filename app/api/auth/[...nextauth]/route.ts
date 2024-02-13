import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const config: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      idToken: true,
      allowDangerousEmailAccountLinking: false,
    }) 
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
    
      // TODO: Create/Retrieve user, generate token, save token to client here.

      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      console.log("session: ", session)
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("token: ", token)
      return token
    }
  },
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(config);
export { handler as GET, handler as POST };