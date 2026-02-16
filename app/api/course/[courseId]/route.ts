import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"; 
import { NextResponse } from "next/server";

export async function DELETE(request: Request, 
    {params}: {params: Promise<{courseId: string}>}
) {
    try{
        const {userId} = await auth();

        if(!userId){
            return NextResponse.json({message: "Unauthorized"}, {status: 401});
        }

        const {courseId} = await params;

        const course = await prisma.course.delete({
            where: {
                id: courseId,
                userId: userId,
            },
        });

        return NextResponse.json(course);
    }catch(error){
        console.log("[COURSE]",error);
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }

}