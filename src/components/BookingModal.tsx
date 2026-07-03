/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { X, Dumbbell, Flame, Send } from 'lucide-react';
import { CONTACT_EMAIL } from '../data.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SessionType = 'crossfit' | 'hyrox';

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sessionType, setSessionType] = useState<SessionType | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Richiesta prova gratuita — ${sessionType === 'hyrox' ? 'HYROX' : 'CrossFit'}`;
    const body = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefono: ${telefono}`,
      `Sessione richiesta: ${sessionType === 'hyrox' ? 'HYROX' : 'CrossFit'}`,
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="premium-card relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#0c0c0b] border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute top-4 right-4 p-2 rounded-full bg-near-black/70 border border-white/10 text-white hover:bg-brand-yellow hover:text-near-black transition-all z-10"
        >
          <X size={16} />
        </button>

        <div className="p-8">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-2">
            PRENOTA UNA PROVA
          </span>
          <h3 className="font-display text-3xl text-white tracking-tight uppercase mb-6">
            Lascia i tuoi dati
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="booking-nome" className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                Nome
              </label>
              <input
                id="booking-nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full py-3 px-4 bg-white/[0.03] border border-white/10 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-yellow transition-colors"
                placeholder="Il tuo nome"
              />
            </div>

            <div>
              <label htmlFor="booking-email" className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                Email
              </label>
              <input
                id="booking-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-4 bg-white/[0.03] border border-white/10 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-yellow transition-colors"
                placeholder="nome@esempio.it"
              />
            </div>

            <div>
              <label htmlFor="booking-telefono" className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                Telefono
              </label>
              <input
                id="booking-telefono"
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full py-3 px-4 bg-white/[0.03] border border-white/10 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-yellow transition-colors"
                placeholder="333 123 4567"
              />
            </div>

            <div>
              <span className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                Sessione di prova
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSessionType('crossfit')}
                  className={`min-h-[44px] px-4 py-3 font-sans font-bold text-xs tracking-widest uppercase btn-cut flex items-center justify-center gap-2 transition-colors ${
                    sessionType === 'crossfit'
                      ? 'bg-brand-yellow text-near-black'
                      : 'bg-white/[0.03] border border-white/10 text-white/60'
                  }`}
                >
                  <Dumbbell size={14} />
                  CrossFit
                </button>
                <button
                  type="button"
                  onClick={() => setSessionType('hyrox')}
                  className={`min-h-[44px] px-4 py-3 font-sans font-bold text-xs tracking-widest uppercase btn-cut flex items-center justify-center gap-2 transition-colors ${
                    sessionType === 'hyrox'
                      ? 'bg-brand-yellow text-near-black'
                      : 'bg-white/[0.03] border border-white/10 text-white/60'
                  }`}
                >
                  <Flame size={14} />
                  HYROX
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!sessionType}
              className="w-full py-4 bg-brand-yellow text-near-black font-sans font-bold text-sm text-center tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              INVIA RICHIESTA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
