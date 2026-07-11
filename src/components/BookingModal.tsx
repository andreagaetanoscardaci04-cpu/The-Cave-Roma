/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { X, Dumbbell, Flame, Send, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SessionType = 'crossfit' | 'hyrox';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sessionType, setSessionType] = useState<SessionType | null>(null);
  const [status, setStatus] = useState<SubmitStatus>('idle');

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

  // Reset the form back to a blank state each time the modal is reopened.
  useEffect(() => {
    if (isOpen) return;
    const timeout = setTimeout(() => {
      setNome('');
      setEmail('');
      setTelefono('');
      setSessionType(null);
      setStatus('idle');
    }, 300);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, telefono, sessionType }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
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
          {status === 'success' ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={30} className="text-brand-yellow" />
              </div>
              <h3 className="font-display text-3xl text-white tracking-tight uppercase mb-4">
                Grazie per aver contattato The Cave!
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
                Abbiamo ricevuto la tua richiesta. Un nostro coach ti contatterà al più presto per conoscere i tuoi obiettivi e prenotare una lezione demo.
              </p>
              <p className="font-sans text-xs font-bold tracking-widest text-brand-yellow uppercase mb-2">
                The Cave – Hyrox &amp; CrossFit
              </p>
              <p className="font-sans text-xs text-white/40 leading-relaxed">
                Con i nostri allenamenti troverai la tua migliore forma psico-fisica.
              </p>
            </div>
          ) : (
          <>
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

            {status === 'error' && (
              <p className="font-sans text-xs text-red-400 text-center">
                Invio non riuscito. Riprova o chiamaci direttamente.
              </p>
            )}

            <button
              type="submit"
              disabled={!sessionType || status === 'submitting'}
              className="w-full py-4 bg-brand-yellow text-near-black font-sans font-bold text-sm text-center tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              {status === 'submitting' ? 'INVIO IN CORSO…' : 'INVIA RICHIESTA'}
            </button>
          </form>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
