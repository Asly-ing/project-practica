import { currentUser } from "@clerk/nextjs/server";
import { Header } from "./components";



export default async function Teacherpage() {
    const user= await currentUser();
    
    if(!user){
        return <div>Unauthorized</div>;
    }

    return (
        <div>
            <Header />
        </div>
    )
}
