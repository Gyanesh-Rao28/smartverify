import { currentProfile } from "@/libs/currentProfile";
import { db } from "@/libs/db";
import { NextResponse } from "next/server";



export async function DELETE(
    req: Request,
    { params }: { params: { fileId: string } }

) {
    try {

        const profile = await currentProfile()

        if(!profile){
            return new NextResponse("Unauthorized user", { status: 401 });
        }


        if (!params.fileId) {
            return new NextResponse("fileId missing", { status: 400 });
        }

        await db.result.deleteMany({
            where: {
                contractId: params.fileId
            }
        });

        const file = await db.contract.delete({
            where: {
                id: params.fileId
            }
        });
    

        return NextResponse.json(file);

    } catch (error) {
        console.log("PROFILE_CREATION", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}