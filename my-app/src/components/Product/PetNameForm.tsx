"use client";
import React, { useState } from "react";
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
import { MinusIcon, PlusIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "@/context/cartContext";
import { CartItemType } from "../../../types/types";

const formSchema = z.object({
  petName: z
    .string()
    .min(1, "Pet name is required.")
    .max(12, "Pet name must be 12 characters or less."),
});

function PetNameForm({ product }: { product: ProductType }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { toast } = useToast();
  const { cart, saveCart } = useCart();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      petName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const item: CartItemType = {
      id: uuidv4(),
      name: product.name,
      quantity: selectedQuantity,
      size: selectedSize,
      petName: values.petName,
      image: product.images[0],
      price: product.price,
    };

    const newCart = [...cart, item];
    await saveCart(newCart);

    setSelectedQuantity(1);
    setSelectedSize("");
    form.reset();
  };

  const plus = () => {
    if (selectedSize.length === 0) {
      toast({
        description: "Please select size first.",
      });
      return;
    }

    const size = product.sizes.find(
      (size) => size.size === selectedSize
    )?.quantity;

    if (size && selectedQuantity < size) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  const minus = () => {
    if (selectedSize.length === 0) {
      toast({
        description: "Please select size first.",
      });
      return;
    }

    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const setSize = (size: string) => {
    setSelectedSize(size);
    setSelectedQuantity(1);
  };

  return (
    <>
      <div className="space-y-2">
        <p>Select Size</p>
        <ToggleGroup
          size={"lg"}
          type="single"
          value={selectedSize}
          className="justify-start flex-wrap"
        >
          {product.category === "dog" && (
            <ToggleGroupItem
              value="XS"
              onClick={() => setSize("XS")}
              disabled={!product.sizes.some((size) => size.size === "XS")}
            >
              XS
            </ToggleGroupItem>
          )}
          <ToggleGroupItem
            value="S"
            onClick={() => setSize("S")}
            disabled={!product.sizes.some((size) => size.size === "S")}
          >
            S
          </ToggleGroupItem>
          <ToggleGroupItem
            value="M"
            onClick={() => setSize("M")}
            disabled={!product.sizes.some((size) => size.size === "M")}
          >
            M
          </ToggleGroupItem>
          <ToggleGroupItem
            value="L"
            onClick={() => setSize("L")}
            disabled={!product.sizes.some((size) => size.size === "L")}
          >
            L
          </ToggleGroupItem>
          {product.category === "dog" && (
            <ToggleGroupItem
              value="XL"
              onClick={() => setSize("XL")}
              disabled={!product.sizes.some((size) => size.size === "XL")}
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
            <div className="flex border rounded-md max-w-36 items-center">
              <button className="px-3 py-2" type="button" onClick={minus}>
                <MinusIcon />
              </button>
              <p className="w-full text-center">{selectedQuantity}</p>
              <button className="px-3 py-2" type="button" onClick={plus}>
                <PlusIcon />
              </button>
            </div>
            <Button size={"lg"} className="font-unbounded font-bold uppercase">
              Add to Cart
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default PetNameForm;
