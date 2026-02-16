import { ChartNoAxesColumn, DollarSign } from "lucide-react";
import { CourseCardProps } from "./CourseCard.type";
import Image from "next/image";
import { Actions } from "./Actions";

export function CourseCard(props: CourseCardProps) {
    const {course} = props;
    const{id, title, price, level, imageUrl, description, isPublished} = course;


  return (
<div className="relative">
  <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
    <div className="flex flex-col md:flex-row gap-4 items-star">
        <Image 
        src={imageUrl || "/imagen_default.png"} 
        alt="Curso" 
        width={150} 
        height={150} 
        className="rounded-md max-w-52"
        />
    <div>
     <div className="flex items-center gap-2">
        <h2 className="text-xl font-medium">{title}</h2>

        {isPublished ? 
        <span className="inline-block bg-emerald-100 text-emerald-600 text-xs font-medium px-2 py-1 rounded-md mt-1">Publicado</span>: 
        <span className="inline-block bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-md mt-1">Sin Publicar</span>}
        </div>
        {description &&(
            <p className="text-gray-400 w-full max-w-lg line-clamp-1 text-sm">
                {description}
            </p>
        )}       
        <div className="flex flex-col md:flex-row gap-4 items-center">

            <div className="flex gap-1 items-center text-sm mt-2">
                <DollarSign className="h-4 w-4 text-gray-400"/>
                <span className="text-gray-400">Precio</span>
                <span className="font-semibold">{price || 0}</span>
            </div>

            <div className="flex gap-1 items-center text-sm mt-2">
                <ChartNoAxesColumn className="h-4 w-4 text-gray-400"/>
                <span className="text-gray-400">Nivel</span>
                <span className="font-semibold">{level || "Principiante"}</span>
            </div>
        </div>
     </div>
    </div>
  
    <Actions courseId={id}/>
  </div>
</div>
  );
}
