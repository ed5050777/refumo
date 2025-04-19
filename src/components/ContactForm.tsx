
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const formData = new URLSearchParams();
    formData.append("website", "Refumo");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone || "");
    formData.append("company", "--");
    formData.append("message", data.message);

    try {
      toast.loading("Sending your message...");

      const response = await fetch("https://script.google.com/macros/s/AKfycbzU22lb2iYGN1aSB1FKLTbi86H2_Hau5pSTXzhvKwfGn4MXPLT9MZ_3LAxiBpsmR7ebfA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString()
      });

      const result = await response.text();
      console.log('Success:', result);

      toast.dismiss();
      toast.success("Thank you for your message! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input 
                    placeholder="Your name" 
                    className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-refumo-coral pl-10" 
                    {...field} 
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
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
              <FormLabel className="text-sm font-medium">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-refumo-coral pl-10" 
                    {...field} 
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Phone (optional)</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-refumo-coral pl-10" 
                    {...field} 
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium">Message</FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea 
                    placeholder="Your message" 
                    className="min-h-[120px] bg-white/50 backdrop-blur-sm border-gray-200 focus:border-refumo-coral pl-10" 
                    {...field} 
                  />
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 h-4 w-4" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full bg-refumo-coral hover:bg-refumo-lightcoral text-white font-medium"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
