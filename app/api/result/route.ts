import { currentProfile } from "@/libs/currentProfile";
import { db } from "@/libs/db"; 
import { NextResponse } from "next/server";



export async function POST(
    req: Request
) {
    try {

        const {contractFileId, TimestampDependencyVulnerability, DelegateCallVulnerability, IntegerOverflowVulnerability, ReentrancyVulnerability } = await req.json();

        const profile = await currentProfile()

        if(!profile){
            return new NextResponse("unauthorized", { status: 401 });
        }

        if (!TimestampDependencyVulnerability || !DelegateCallVulnerability || !IntegerOverflowVulnerability|| !ReentrancyVulnerability||!contractFileId) {
            return new NextResponse("fields missing", { status: 400 });
        }

        const result = await db.result.create({
            data: {
                contractId:contractFileId,
                profileId: profile.id,
                TimestampDependencyVulnerability: TimestampDependencyVulnerability,
                DelegateCallVulnerability: DelegateCallVulnerability,
                IntegerOverflowVulnerability: IntegerOverflowVulnerability,
                ReentrancyVulnerability:ReentrancyVulnerability
            }
        })


        return NextResponse.json(result);

    } catch (error) {
        console.log("PROFILE_CREATION", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}