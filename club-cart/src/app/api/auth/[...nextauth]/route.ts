import dbConnect from "@/lib/connectDB";
import Student from "@/lib/models/Student";
import Organization from "@/lib/models/Organization";
import bcrypt from "bcrypt";

import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        const { email, password } = await credentials;

        try {
          await dbConnect();

          const student = await Student.findOne({ email });
          if (!student) {
            const organization = await Organization.findOne({ email });
            if (!organization) {
              return null;
            } else {
              if (await !bcrypt.compare(password, organization.password)) {
                return null;
              }
              return organization.email;
            }
          } else {
            if (await !bcrypt.compare(password, student.password)) {
              return null;
            }
            return student.email;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
