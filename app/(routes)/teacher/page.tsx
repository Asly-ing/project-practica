import { currentUser } from "@clerk/nextjs/server";
import { Header } from "./components";
import prisma from "@/lib/prisma";
import { ListCourses } from "./components/ListCourses";


export default async function Teacherpage() {
    const user= await currentUser();
    
    if(!user){
        return <div>Unauthorized</div>;
    }
    const courses = await prisma.course.findMany({
        where: {
            userId: user.id
        }
    });
    
    console.log(courses);
    return (
        <div>
            <Header />
            <ListCourses courses={courses} />
        </div>
    )
}
