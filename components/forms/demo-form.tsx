'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { demoSchema, type DemoFormValues } from '@/lib/schemas';
import { products } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: { name: '', email: '', company: '', product: '', message: '' },
  });

  const productValue = watch('product');

  const onSubmit = async (data: DemoFormValues) => {
    const { error } = await supabase.from('demo_requests').insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      product: data.product,
      message: data.message,
    });
    if (error) throw error;
    setSubmitted(true);
    toast.success('Demo request received! We\'ll be in touch within 24 hours.');
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl glass-card p-12 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks! Our team will reach out within 24 hours to schedule your demo.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl glass-card p-8 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <Input {...register('name')} placeholder="Jane Doe" className="bg-background/40" />
        </Field>
        <Field label="Work email" error={errors.email?.message}>
          <Input type="email" {...register('email')} placeholder="jane@company.com" className="bg-background/40" />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company (optional)" error={errors.company?.message}>
          <Input {...register('company')} placeholder="Acme Inc." className="bg-background/40" />
        </Field>
        <Field label="Product" error={errors.product?.message}>
          <Select
            value={productValue}
            onValueChange={(v) => setValue('product', v, { shouldValidate: true })}
          >
            <SelectTrigger className="bg-background/40">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((p) => (
                <SelectItem key={p.slug} value={p.name}>
                  {p.name} — {p.tagline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label="Tell us about your needs" error={errors.message?.message}>
        <Textarea
          {...register('message')}
          placeholder="What are you hoping to solve?"
          className="bg-background/40 min-h-[120px]"
        />
      </Field>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Request demo <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={cn('block text-sm font-medium mb-1.5', error ? 'text-destructive' : 'text-foreground')}>
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
