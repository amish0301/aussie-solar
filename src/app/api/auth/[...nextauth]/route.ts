import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/utils/utils';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                await connectDB();

                const user = await User.findOne({ email: credentials.email });
                if (!user || !['admin', 'super_admin'].includes(user.role)) {
                    throw new Error("Admin not found or unauthorized");
                }

                // verify password
                const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                }

                return { id: user._id, email: user.email, role: user.role };
            }
        })
    ],
    session: { strategy: 'jwt' as const },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (session.user) {
                session.user.role = token.role;
            }
            return session;
        },
        async redirect({ url, baseUrl }: any) {
            return url.startsWith(baseUrl) ? url : "/admin";
        }
    },
    secret: process.env.NEXT_AUTH_SESSION_SECRET,
    pages: {
        signIn: '/login'
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
