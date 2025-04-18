import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Uus", age: 25 },
    { name: "Farhan", age: 17 },
    { name: "Naufal", age: 22 },
  ]);
}
