import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  ContactFormValues,
} from '../schemas/contact.schema';
import { Button, Input, Card } from '@/components/ui';
import { CheckCircle2, AlertCircle, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { ContactResponse } from '@/types/contact';

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<void>;
  isLoading: boolean;
  response: ContactResponse | null;
  error: string | null;
  onReset: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isLoading,
  response,
  error,
  onReset,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleFormSubmit = async (values: ContactFormValues) => {
    await onSubmit(values);
    reset();
  };

  if (response) {
    return (
      <div className="p-8 sm:p-10 text-center bg-slate-900 border border-slate-800 rounded-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-white">Message Dispatched!</h4>
        <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
          {response.message}
        </p>

        {response.ticketNumber && (
          <div className="my-5 p-3 rounded-lg bg-slate-950 border border-slate-800 inline-block font-mono text-xs text-amber-400">
            Ticket ID: {response.ticketNumber}
          </div>
        )}

        <div className="mt-6">
          <Button variant="secondary" onClick={onReset}>
            Send Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-sm">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Your Full Name"
          placeholder="e.g. Samuel Karanja"
          required
          leftIcon={<User className="w-4 h-4" />}
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="e.g. +254 700 123 456"
          required
          leftIcon={<Phone className="w-4 h-4" />}
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="e.g. samuel@company.com"
          required
          leftIcon={<Mail className="w-4 h-4" />}
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Inquiry Subject"
          placeholder="e.g. Insurance estimate for Prado collision"
          required
          leftIcon={<MessageSquare className="w-4 h-4" />}
          error={errors.subject?.message}
          {...register('subject')}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Detailed Message / Vehicle Inquiry <span className="text-amber-500">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Provide vehicle make, model, problem symptoms, or general garage questions..."
          className="w-full bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="amber"
        size="lg"
        className="w-full"
        isLoading={isLoading}
        rightIcon={<Send className="w-4 h-4" />}
      >
        Send Inquiry to Antique Panels
      </Button>
    </form>
  );
};
