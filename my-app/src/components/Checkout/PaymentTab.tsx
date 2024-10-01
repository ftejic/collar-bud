import { TabsContent } from "@radix-ui/react-tabs";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import formatPrice from "@/lib/formatPrice";
import { calculateTotalPrice } from "@/lib/cartUtils";
import { useCart } from "@/context/cartContext";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

interface PaymentTabProps {
  onTabChange: (value: "review" | "payment") => void;
  email: string;
}

const formSchema = z.object({
  cardNumber: z
    .string()
    .min(1, { message: "Card number is required" })
    .regex(/^\d{13,19}$/, { message: "Invalid card number" }),
  expirationMonth: z
    .string()
    .min(1, { message: "Expiration month is required" })
    .regex(/^(0[1-9]|1[0-2])$/, {
      message: "Invalid month. Must be between 01 and 12",
    }), // MM format
  expirationYear: z
    .string()
    .min(1, { message: "Expiration year is required" })
    .regex(/^\d{2}$/, {
      message: "Invalid year. Must be last two digits (e.g., 24)",
    }), // YY format
  CVV: z
    .string()
    .min(1, { message: "CVV is required" })
    .regex(/^\d{3,4}$/, { message: "Invalid CVV. Must be 3 or 4 digits" }),
});

function PaymentTab({ onTabChange, email }: PaymentTabProps) {
  const { cart } = useCart();
  const { toast } = useToast();
  const { clearCart } = useCart();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expirationMonth: "",
      expirationYear: "",
      CVV: "",
    },
  });

  const sendEmail = async () => {
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          subject: "Confirmation",
          message: "We received your order!",
        }),
      });
      const data = await res.json();
      console.log(data.message);
    } catch (error) {}
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    sendEmail();
    form.reset();
    await clearCart();
    toast({
      description: "Check your email for confirmation",
    });
    router.push("/");
  };

  return (
    <TabsContent value="payment">
      <Button
        variant={"outline"}
        className="my-5"
        onClick={() => onTabChange("review")}
      >
        Back
      </Button>
      <Card>
        <CardContent className="py-10 gap-x-10 flex flex-col md:flex-row-reverse">
          <div className="md:w-1/2">
            <p>
              Your total is: {formatPrice(calculateTotalPrice(cart))}&#8364;
            </p>
          </div>
          <div className="md:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card number</FormLabel>
                      <FormControl>
                        <Input placeholder="Card number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="space-y-4 sm:space-y-0 grid sm:grid-cols-3 sm:gap-4">
                  <div className="space-y-2 col-start-1 sm:col-end-3">
                    <FormLabel>Expiration date</FormLabel>
                    <div className="space-y-2 sm:space-y-0 grid sm:grid-cols-2 sm:gap-x-4">
                      <FormField
                        control={form.control}
                        name="expirationMonth"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Month" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="expirationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Year" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="CVV"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input placeholder="3-4 digits code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">Place order</Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default PaymentTab;
