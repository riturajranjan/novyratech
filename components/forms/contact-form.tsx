'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, Mail, Phone, MapPin } from 'lucide-react';
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
import { contactSchema, type ContactFormValues } from '@/lib/schemas';
import { services, companyInfo } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const budgetOptions = [
  { value: 'under-10k', label: 'Under $10k' },
  { value: '10k-50k', label: '$10k – $50k' },
  { value: '50k-100k', label: '$50k – $100k' },
  { value: '100k+', label: '$100k+' },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: undefined,
      message: '',
    },
  });

  const serviceValue = watch('service');
  const budgetValue = watch('budget');

  const onSubmit = async (data: ContactFormValues) => {
    const { error } = await supabase.from('contacts').insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || null,
      service: data.service,
      budget: data.budget,
      message: data.message,
    });
    if (error) throw error;
    setSubmitted(true);
    toast.success('Message sent! We\'ll respond within 24 hours.');
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
        <h3 className="mt-6 font-display text-2xl font-bold">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">
          Your message is on its way. Expect a reply from our team within 24 hours.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
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
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" {...register('email')} placeholder="jane@company.com" className="bg-background/40" />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <Input {...register('phone')} placeholder="+1 415 555 0192" className="bg-background/40" />
        </Field>
        <Field label="Company (optional)" error={errors.company?.message}>
          <Input {...register('company')} placeholder="Acme Inc." className="bg-background/40" />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Service interested in" error={errors.service?.message}>
          <Select
            value={serviceValue}
            onValueChange={(v) => setValue('service', v, { shouldValidate: true })}
          >
            <SelectTrigger className="bg-background/40">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.name}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Budget range" error={errors.budget?.message}>
          <Select
            value={budgetValue}
            onValueChange={(v) => setValue('budget', v as ContactFormValues['budget'], { shouldValidate: true })}
          >
            <SelectTrigger className="bg-background/40">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((b) => (
                <SelectItem key={b.value} value={b.value}>
                  {b.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label="Project details" error={errors.message?.message}>
        <Textarea
          {...register('message')}
          placeholder="Tell us about your project, goals, and timeline..."
          className="bg-background/40 min-h-[140px]"
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
            Send message <ArrowRight className="ml-2 h-4 w-4" />
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

export function ContactInfo() {
  const items = [
    { icon: Mail, label: 'Email', value: companyInfo.email },
    { icon: Phone, label: 'Phone', value: companyInfo.phone },
    { icon: MapPin, label: 'Office', value: companyInfo.address },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something <span className="text-gradient">extraordinary</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Whether you have a fully spec&apos;d project or just an idea, we&apos;d love to hear from you. Fill out the form and we&apos;ll respond within 24 hours.
        </p>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="font-medium text-foreground">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative h-48 overflow-hidden rounded-2xl glass-card">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-2 text-sm text-muted-foreground">{companyInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
