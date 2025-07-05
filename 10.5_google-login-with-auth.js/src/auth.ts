import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectDB from "./lib/connectDB";
import nextAuth from "./models/nextAuth.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session: { maxAge: 86400, updateAge: 3600 },
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();

        const existUser = await nextAuth.findOne({ email: user.email });
        if (!existUser) {
          await nextAuth.create(user);
        }

        return true;
      } catch (error) {
        console.log("Google Login Failed : " + error);
        return false;
      }
    },
    session({ session, token }) {
      session.user.id = token.sub as string;

      return session;
    },
  },
});
