"use client";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ProductType } from "@/lib/prisma";

const formSchema = z.object({
  petName: z
    .string()
    .min(1, "Pet name is required.")
    .max(12, "Pet name must be 12 characters or less."),
});

function PetNameForm({ product }: { product: ProductType }) {
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
    <div className="space-y-2">
      <p>Select Size</p>
      <ToggleGroup
        size={"lg"}
        type="single"
        className="justify-start flex-wrap"
      >
        {product.category === "dog" && (
          <ToggleGroupItem
            value="XS"
            disabled={product.sizes.some(
              (size) => size.size === "XS" && size.quantity > 0
            )}
          >
            XS
          </ToggleGroupItem>
        )}
        <ToggleGroupItem
          value="S"
          disabled={product.sizes.some(
            (size) => size.size === "S" && size.quantity > 0
          )}
        >
          S
        </ToggleGroupItem>
        <ToggleGroupItem
          value="M"
          disabled={product.sizes.some(
            (size) => size.size === "M" && size.quantity > 0
          )}
        >
          M
        </ToggleGroupItem>
        <ToggleGroupItem
          value="L"
          disabled={product.sizes.some(
            (size) => size.size === "L" && size.quantity > 0
          )}
        >
          L
        </ToggleGroupItem>
        {product.category === "dog" && (
          <ToggleGroupItem
            value="XL"
            disabled={product.sizes.some(
              (size) => size.size === "XL" && size.quantity > 0
            )}
          >
            XL
          </ToggleGroupItem>
        )}
      </ToggleGroup>
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
    </div>
  );
}

export default PetNameForm;
