import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Faqs() {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto max-w-screen-sm lg:max-w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I customize a collar?</AccordionTrigger>
        <AccordionContent>
          You can customize a collar by selecting the design, colors, and adding
          your pet's name through our easy-to-use online tool.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What materials are the collars made of?
        </AccordionTrigger>
        <AccordionContent>
          Our collars are made from durable, high-quality materials that ensure
          comfort and longevity for your pet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How long does it take to receive my order?
        </AccordionTrigger>
        <AccordionContent>
          Typically, orders are processed within 2-3 business days and shipping
          times vary depending on your location, but most orders arrive within
          5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do you offer different sizes?</AccordionTrigger>
        <AccordionContent>
          Yes, our collars come in various sizes to fit small, medium, and large
          breeds. Please refer to our size guide to find the perfect fit for
          your pet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          What if the collar doesn’t fit my pet?
        </AccordionTrigger>
        <AccordionContent>
          We offer a hassle-free exchange policy. If the collar doesn’t fit,
          contact our customer support for assistance with a size exchange.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Are the collars machine washable?</AccordionTrigger>
        <AccordionContent>
          Yes, our collars are machine washable. We recommend using a gentle
          cycle and air drying to maintain the quality.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Faqs;
