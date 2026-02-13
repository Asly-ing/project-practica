import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
 
export async function POST(req: Request) {
    try{

        const { userId } = await auth();
        
        const{ courseName, slug } = await req.json();

        if(!userId){
            return  NextResponse.json({ message: "No se ha autorizado" }, { status: 401 });
        }

        const course = await prisma.course.create({
            data: {
                userId,
                title: courseName,
                slug,
            }
        });

        return NextResponse.json(course)
    }catch(error){
        console.log("[COURSE]", error);
        
        return NextResponse.json("Internal Error", { status: 500 }); 
    }
    
}