import { currentProfile } from "@/libs/currentProfile";
import { db } from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { description, contractLink, contractName, tags } = await req.json();

        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 400 });
        }

        if (!description || !contractLink || !contractName) {
            return new NextResponse("Fields missing", { status: 400 });
        }

        const Contractfile = await db.contract.create({
            data: {
                contractName: contractName,
                profileId: profile.id,
                contractFileUrl: contractLink,
                description: description,
                tag: tags||null
            }
        })

     

        return NextResponse.json(Contractfile);

    } catch (error) {
        console.log("PROFILE_CREATION", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}