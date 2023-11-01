import Club from "@/lib/models/Club";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, meetingDay, dues, description } = await req.json();

  const club = await Club.findOneAndUpdate(
    { email },
    { meetingDay, fees: dues, description, completedSetup: true }
  );

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
