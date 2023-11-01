import dbConnect from "@/lib/connectDB";
import Club from "@/lib/models/Club";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { schoolCode } = await req.json();

  await dbConnect();

  const clubs = await Club.find(
    { school: schoolCode },
    {
      name: 1,
      sponsorName: 1,
      meetingDay: 1,
      fees: 1,
      description: 1,
      picture: 1,
    }
  );

  return NextResponse.json(
    { message: "Success", body: clubs },
    { status: 200 }
  );
}
