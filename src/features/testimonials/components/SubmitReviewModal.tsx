import React, { useState } from 'react';
import { Star, X, CheckCircle, Sparkles } from 'lucide-react';
import { RestorationReview, ReviewSubmissionPayload } from '@/types/testimonial';
import { Modal, Button, Input } from '@/components/ui';

interface SubmitReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: RestorationReview) => void;
}

const CATEGORIES: RestorationReview['serviceCategory'][] = [
  'Classic Restoration',
  'Panel Beating & Coachwork',
  'Custom Paint & Refinishing',
  'Chassis & Accident Recovery',
  'Engine & Mechanical',
];

export const SubmitReviewModal: React.FC<SubmitReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('1985');
  const [serviceCategory, setServiceCategory] = useState<RestorationReview['serviceCategory']>('Classic Restoration');
  const [rating, setRating] = useState(5);
  const [turnaroundTime, setTurnaroundTime] = useState('30 Working Days');
  const [title, setTitle] = useState('');
  const [quote, setQuote] = useState('');
  const [workPerformed, setWorkPerformed] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !vehicleMake || !vehicleModel || !quote || !title) return;

    const newReview: RestorationReview = {
      id: `rev-${Date.now()}`,
      author,
      role: role || 'Vehicle Owner & Enthusiast',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
      vehicle: {
        make: vehicleMake,
        model: vehicleModel,
        year: parseInt(vehicleYear, 10) || 1990,
        color: 'Workshop Refinish',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      },
      serviceCategory,
      rating,
      date: 'Just Now',
      turnaroundTime: turnaroundTime || 'Estimated 30 Days',
      title,
      quote,
      highlight: `${rating}-Star Verified Customer Workshop Assessment`,
      verifiedCustomer: true,
      workPerformed: workPerformed
        ? workPerformed.split(',').map((s) => s.trim())
        : ['Custom metal shaping', 'Oven bake finish', 'Mechanical inspection'],
    };

    onSubmitReview(newReview);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      // Reset form
      setAuthor('');
      setRole('');
      setVehicleMake('');
      setVehicleModel('');
      setTitle('');
      setQuote('');
      setWorkPerformed('');
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Submit a Restoration Review"
      description="Share your automotive restoration or garage experience with the Antique Panels community."
      size="lg"
    >
      {isSubmitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h4 className="text-2xl font-bold text-white">Review Added to Live Showcase!</h4>
          <p className="text-sm text-slate-300">
            Thank you for sharing your experience. Your review is now visible in our dynamic restoration slider.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Your Full Name"
              placeholder="e.g. Anthony Chege"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <Input
              label="Title / Enthusiast Role"
              placeholder="e.g. Classic Land Cruiser Owner"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Input
              label="Vehicle Make"
              placeholder="e.g. Porsche"
              value={vehicleMake}
              onChange={(e) => setVehicleMake(e.target.value)}
              required
            />
            <Input
              label="Vehicle Model"
              placeholder="e.g. 911 SC"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              required
            />
            <Input
              label="Year"
              type="number"
              placeholder="1982"
              value={vehicleYear}
              onChange={(e) => setVehicleYear(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Restoration Service Category
              </label>
              <select
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value as RestorationReview['serviceCategory'])}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Rating
              </label>
              <div className="flex items-center gap-1.5 h-10 px-3 bg-slate-950 border border-slate-800 rounded-lg">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="p-1 focus:outline-none text-slate-600 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        (hoverRating !== null ? hoverRating >= star : rating >= star)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-700'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-amber-400 font-semibold ml-2">
                  {rating}.0 / 5.0
                </span>
              </div>
            </div>
          </div>

          <Input
            label="Review Headline"
            placeholder="e.g. Masterful coachbuilding and flawless engine restoration"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Your Detailed Restoration Review
            </label>
            <textarea
              rows={4}
              placeholder="Describe the initial condition of the car, the craftsmanship of Antique Panels, and the final results upon delivery..."
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
              required
            />
          </div>

          <Input
            label="Work Performed (comma separated)"
            placeholder="e.g. Chassis realignment, Bare-metal respray, Engine timing"
            value={workPerformed}
            onChange={(e) => setWorkPerformed(e.target.value)}
          />

          <div className="pt-2 flex justify-end gap-3">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="amber" type="submit" leftIcon={<Sparkles className="w-4 h-4" />}>
              Publish Review
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
