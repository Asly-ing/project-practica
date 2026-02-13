"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
} from "@/components/ui/form"
import { formSchema } from "./FormCreateCourse.form"
import{toast} from "sonner"
import { useRouter } from "next/dist/client/components/navigation";

export  function FormCreateCourse() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: "",
      slug: ""
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
        const res= await axios.post("/api/course", values);
        toast.success("Curso creado exitosamente🎉");

        router.push(`/teacher/${res.data.id}`);
    }catch(error){
        console.log(error);
        toast.error("Error al crear el curso😶");
    }
  }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <FormField
                control={form.control}
                name="courseName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nombre del Curso</FormLabel>
                        <FormControl>
                            <Input placeholder="Curso de React JS" {...field} />
                        </FormControl>
                        
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Slug del Curso</FormLabel>
                        <FormControl>
                            <Input placeholder="curso-de-react-js" {...field} />
                        </FormControl>
                        
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit">Crear Curso</Button>
        </form>
    </Form>
  )
}
