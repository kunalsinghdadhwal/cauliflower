import { db } from "@/db/drizzle";
import { students } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const studentId = "CnpQwRqLYSJ7S37AMq8MSbRjZ4zKYYH5";

    const studentData = await db
      .select()
      .from(students)
      .where(eq(students.userId, studentId));

    return new NextResponse(JSON.stringify(studentData[0]));
  } catch (error) {
    return new NextResponse("Failed to load student data", { status: 500 });
  }
}
