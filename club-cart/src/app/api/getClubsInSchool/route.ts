import Club from "@/lib/models/Club";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { schoolCode } = await req.json();

  const clubs = Club.find({ school: schoolCode });

  console.log(clubs);

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
