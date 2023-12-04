"use client";

import { useStoreModalStore } from "@/hooks/use-store-modal-store";
import { Modal } from "@/components/ui/modal";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const storemodal = useStoreModalStore();
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

      try{
        setLoading(true);
        const response = await axios.post("/api/stores", values);
        toast.success("User Created");
        console.log(response.data);
      }catch(error){
        toast.error("Something went Wrong");
      }finally{
        setLoading(false);
      }
    }

    return (
        <Modal isOpen={storemodal.isOpen} onClose={storemodal.onClose} title="Add a Store" description="Add a store to manage your products">
            <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="E-Commerce" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button disabled={loading} variant="outline" onClick={storemodal.onClose}>
                    Cancel
                  </Button>
                  <Button disabled={loading} type="submit">Continue</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
        </Modal>
    ); 
};