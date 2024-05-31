import { getServerSession } from "next-auth";
import authOptions from "./auth";

export default async function getCurrentUser() {
    const session = await getServerSession(authOptions);
    console.log(session)
    return session?.user;
}
