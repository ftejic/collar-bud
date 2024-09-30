"use client";
import PaymentTab from "@/components/Checkout/PaymentTab";
import ReviewTab from "@/components/Checkout/ReviewTab";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

function CheckoutPage() {
  const [tab, setTab] = useState<"review" | "payment">("review");
  const [email, setEmail] = useState("");

  const onTabChange = (value: "review" | "payment") => {
    setTab(value);
  };

  return (
    <section className="container mx-auto mt-[68px] md:mt-[124px] lg:mt-[152px] py-10 md:py-16">
      <Tabs value={tab} defaultValue="review" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="review" className="cursor-default">
            Review
          </TabsTrigger>
          <TabsTrigger value="payment" className="cursor-default">
            Payment
          </TabsTrigger>
        </TabsList>
        <ReviewTab onTabChange={onTabChange} setEmail={setEmail} />
        <PaymentTab onTabChange={onTabChange} email={email} />
      </Tabs>
    </section>
  );
}

export default CheckoutPage;
