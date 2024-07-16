import { NextResponse } from "next/server";
import { database,ID } from "@/Backend/appwriteProvider";
import { Query } from "appwrite";
export async function POST(request:Request) {

  try {
    const data =await request.json()
    const result = await  database.createDocument(process.env.DB_ID!,process.env.TOOLS_CL!,ID.unique(),data)
    return NextResponse.json({status:200,data:result?.data})
  } catch (error) {
    return NextResponse.json({ status: 500, data: "Error Fetching the Tools" });
  }
}

export async function GET() {
  try {
    const result = await database.listDocuments(
      process.env.DB_ID!,
      process.env.TOOLS_CL!,
      [Query.select(["toolName", "detail", "category", "Label", "webUrl","$id"]),Query.limit(100)]

    );
    return NextResponse.json({ status: 200, data: result?.documents });
  } catch (error) {
    return NextResponse.error();
  }
}
