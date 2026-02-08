"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

export  function FormCreateCourse() {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: "",
      slug: ""
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
