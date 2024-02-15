import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const nextAuthConfig: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      idToken: true,
      allowDangerousEmailAccountLinking: false,
    }) 
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(nextAuthConfig);
export { handler as GET, handler as POST };