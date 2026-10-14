import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { ContactInformation } from '../components/ContactInformation';
import { ContactForm } from '../components/ContactForm';
import { GoogleMap } from '@/components/common/GoogleMap';
import { useContact } from '@/hooks/useContact';
import { ContactFormValues } from '../schemas/contact.schema';
import { Card } from '@/components/ui';

export const ContactPage: React.FC = () => {
  const { sendMessage, isLoading, response, error, resetState } = useContact();

  const handleFormSubmit = async (values: ContactFormValues) => {
    await sendMessage({
      name: values.name,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
    });
  };

  return (
    <div>
      <PageHero
        title="Contact Our Workshop"
        subtitle="Visit our repair facility, call our service desk, or submit your automotive project inquiries directly."
        badge="Direct Communication"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card variant="elevated" className="p-4 sm:p-7 lg:p-10 bg-slate-900 border-slate-800">
              <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">
                  Drop Us a Line
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                  Submit a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Our service advisors respond to customer inquiries within 1 business hour.
                </p>
              </div>

              <ContactForm
                onSubmit={handleFormSubmit}
                isLoading={isLoading}
                response={response}
                error={error}
                onReset={resetState}
              />
            </Card>
          </div>

          {/* Right Column: Contact Details & Opening Hours */}
          <div className="lg:col-span-5">
            <ContactInformation />
          </div>
        </div>

        {/* Full-width Map Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Workshop Map & Directions</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Find our intake bays inside Enterprise Industrial Park. Easy access for tow flatbeds and transporters.
            </p>
          </div>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};
