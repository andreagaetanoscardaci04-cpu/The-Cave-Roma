/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { X, Send, CheckCircle2, Gift } from 'lucide-react';

const SESSION_FLAG = 'the-cave-promo-feedback-seen';
const OPEN_DELAY_MS = 1500;

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function PromoFeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [nomeCognome, setNomeCognome] = useState('');
  const [telefono, setTelefono] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_FLAG)) return;
    const timeout = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SESSION_FLAG, '1');
    }, OPEN_DELAY_MS);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/promo-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nomeCognome, telefono }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="premium-card relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#0c0c0b] border border-brand-yellow/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
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
                Richiesta inviata!
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Se rientri tra i primi 20, il nostro staff ti contatterà al numero indicato per la settimana di allenamento in regalo.
              </p>
            </div>
          ) : (
          <>
          <div className="w-14 h-14 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center mb-5">
            <Gift size={24} className="text-brand-yellow" />
          </div>

          <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-2">
            SOLO PER I PRIMI 20
          </span>
          <h3 className="font-display text-3xl text-white tracking-tight uppercase mb-3">
            Vinci una settimana gratis
          </h3>
          <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
            Le prime 20 persone che lasciano i propri dati riceveranno una settimana di allenamento in regalo a The Cave.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="promo-nome" className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                Nome e Cognome
              </label>
              <input
                id="promo-nome"
                type="text"
                required
                value={nomeCognome}
                onChange={(e) => setNomeCognome(e.target.value)}
                className="w-full py-3 px-4 bg-white/[0.03] border border-white/10 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-yellow transition-colors"
                placeholder="Mario Rossi"
              />
            </div>

            <div>
              <label htmlFor="promo-telefono" className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                Telefono
              </label>
              <input
                id="promo-telefono"
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full py-3 px-4 bg-white/[0.03] border border-white/10 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-yellow transition-colors"
                placeholder="333 123 4567"
              />
            </div>

            {status === 'error' && (
              <p className="font-sans text-xs text-red-400 text-center">
                Invio non riuscito. Riprova tra qualche istante.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 bg-brand-yellow text-near-black font-sans font-bold text-sm text-center tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              {status === 'submitting' ? 'INVIO IN CORSO…' : 'INVIA E PARTECIPA'}
            </button>
          </form>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
