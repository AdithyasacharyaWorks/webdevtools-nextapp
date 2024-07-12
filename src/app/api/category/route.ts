import { NextResponse } from "next/server"
import { database ,ID} from "@/Backend/appwriteProvider";
import { Query } from "appwrite";

export async function GET(){
    try {
        const listOfCategory = await database.listDocuments(
            process.env.DB_ID!,
            process.env.CATEGORY_CL!,
            [Query.select(['name','$id'])]
          );
        return NextResponse.json({status:200,data:listOfCategory?.documents})
    } catch (error) {
        return NextResponse.error();
    }    
}

export async function POST(request: Request) {
    const data = await request.json();
  
    try {
      const listOfCategory = await database.listDocuments(
        process.env.DB_ID!,
        process.env.CATEGORY_CL!
      );
  
      // Check if the category name already exists
      const existingCategory = listOfCategory.documents.find(
        (category: any) => category.name === data.categoryName
      );
  
      if (existingCategory) {
        return NextResponse.json({ status: 400, error: "Category name is already present" });
      }
  
      const result = await database.createDocument(
        process.env.DB_ID!,
        process.env.CATEGORY_CL!,
        ID.unique(),
        { name: data.categoryName }
      );
  
      return NextResponse.json({ status: 200, data: "successful" });
    } catch (error) {
      return NextResponse.error();
    }
  }