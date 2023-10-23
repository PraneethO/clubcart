import { NextResponse, NextRequest } from "next/server";

export function POST(req: NextRequest) {
  if (false) {
    // Handle POST request here
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Not found" }, { status: 410 });
  }
}
