"use client";
import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import CartItemList from "../Cart/CartItemList";
import { useCart } from "@/context/cartContext";
import formatPrice from "@/lib/formatPrice";
import { calculateTotalPrice } from "@/lib/cartUtils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

interface ReviewTabProps {
  onTabChange: (value: "review" | "payment") => void;
  setEmail: (value: string) => void;
}

const formSchema = z.object({
  country: z.string().min(1, { message: "Country is required" }),
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name can't exceed 50 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name can't exceed 50 characters" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[0-9+\-().\s]+$/, { message: "Invalid phone number format" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  streetName: z.string().min(1, { message: "Street name is required" }),
  houseNumber: z
    .string()
    .min(1, { message: "House number is required" })
    .max(10, { message: "House number can't exceed 10 characters" }),
  moreInfo: z.string().optional(),
  postalCode: z
    .string()
    .min(1, { message: "Postal code is required" })
    .regex(/^[A-Za-z0-9\- ]{3,10}$/, { message: "Invalid postal code format" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
});

function ReviewTab({ onTabChange, setEmail }: ReviewTabProps) {
  const { cart } = useCart();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      streetName: "",
      houseNumber: "",
      moreInfo: "",
      postalCode: "",
      state: "",
      city: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setEmail(values.email);
    onTabChange("payment");
  };

  return (
    <TabsContent value="review">
      <Card>
        <CardContent className="flex flex-col lg:flex-row-reverse gap-x-10 py-10 gap-y-10">
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold mb-10">Order Review</h2>
            <CartItemList fullHeight />
            <p className="mt-4">
              Your total is: {formatPrice(calculateTotalPrice(cart))}&#8364;
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold mb-5">Shipping Details</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country / Region</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Serbia" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid sm:grid-cols-2 sm:space-x-4 space-y-4 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 123456789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. someone@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-6 space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                  <FormField
                    control={form.control}
                    name="streetName"
                    render={({ field }) => (
                      <FormItem className="col-start-1 col-end-7 lg:col-end-5">
                        <FormLabel>Street Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="houseNumber"
                    render={({ field }) => (
                      <FormItem className="col-start-1 col-end-7 lg:col-start-5">
                        <FormLabel>House Number</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="moreInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Apartment, entrance, floor, room (optional)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postal code</FormLabel>
                      <FormControl>
                        <Input placeholder="Postal code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State / Province</FormLabel>
                      <FormControl>
                        <Input placeholder="Postal code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Postal code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant={"outline"} className="mt-10">
                  Next
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default ReviewTab;
