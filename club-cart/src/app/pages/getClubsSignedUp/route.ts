import dbConnect from "@/lib/connectDB";
import Student from "@/lib/models/Student";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  await dbConnect();

  const student = Student.findOne({ email }, { clubs: 1 });

  return NextResponse.json(
    { message: "Success", body: student },
    { status: 200 }
  );
}
