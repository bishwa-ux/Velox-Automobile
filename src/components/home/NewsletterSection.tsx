import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <section className="py-32 bg-velox-void relative border-t border-velox-white/5 opacity-90 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <h2 className="text-h2 md:text-5xl font-display font-light text-velox-white mb-6">
          Join the Inner Circle
        </h2>
        <p className="text-velox-silver font-light mb-12">
          Exclusive releases, private events, and first access &mdash; for those who know.
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-velox-white/5 border border-velox-white/10 rounded-none px-6 py-4 text-velox-white focus:outline-none focus:border-velox-gold transition-colors font-body text-sm placeholder:text-velox-white/30 backdrop-blur-md"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary"
                >
                  {status === 'submitting' ? '...' : 'Subscribe'}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4 text-velox-gold"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-mono uppercase tracking-widest text-sm">You're in.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
