"use client"
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  petName: z
    .string()
    .min(1, "Pet name is required.")
    .max(12, "Pet name must be 12 characters or less."),
});

function PetNameForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      petName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="petName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Name</FormLabel>
              <FormControl>
                <Input placeholder="Charlie" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"lg"} className="font-unbounded font-bold uppercase">
          Add to Cart
        </Button>
      </form>
    </Form>
  );
}

export default PetNameForm;
