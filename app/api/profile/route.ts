import { db } from "@/libs/db";
import { NextResponse } from "next/server";



export async function POST(
    req: Request
) {
    try {

        const { name, imageUrl, email } = await req.json();

        const { searchParams } = new URL(req.url);

        const userId = searchParams.get("userId");


        if (!userId || !name || !email || !imageUrl) {
            return new NextResponse("fields missing", { status: 400 });
        }

        const profile = await db.profile.create({
            data:{
                userId,
                name,
                imageUrl,
                email
            }
        })

        return NextResponse.json(profile);

    } catch (error) {
        console.log("PROFILE_CREATION", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
