/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const SESSION_FLAG = 'the-cave-halloween-offer-seen';
const OPEN_DELAY_MS = 1200;
const PROMO_PRICE = '149';
const FULL_PRICE = '198';

/* Ragnatela d'angolo: raggi dal vertice + archi concentrici */
function SpiderWeb({ className = '' }: { className?: string }) {
  const rays = [0, 15, 30, 45, 60, 75, 90];
  const rings = [30, 58, 88, 120, 155];
  const point = (r: number, deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return `${(r * Math.cos(rad)).toFixed(1)} ${(r * Math.sin(rad)).toFixed(1)}`;
  };
  return (
    <svg viewBox="0 0 170 170" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      {rays.map((deg) => (
        <path key={deg} d={`M0 0 L${point(170, deg)}`} />
      ))}
      {rings.map((r) => (
        <path
          key={r}
          d={rays
            .slice(1)
            .map((deg, i) => {
              const prev = rays[i];
              const mid = (prev + deg) / 2;
              return `${i === 0 ? `M${point(r, prev)}` : ''} Q${point(r * 0.86, mid)} ${point(r, deg)}`;
            })
            .join(' ')}
        />
      ))}
    </svg>
  );
}

function Spider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor" stroke="currentColor" aria-hidden="true">
      <g strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M16 20 L8 14 L3 18" />
        <path d="M16 22 L7 21 L2 26" />
        <path d="M16 24 L9 28 L6 34" />
        <path d="M24 20 L32 14 L37 18" />
        <path d="M24 22 L33 21 L38 26" />
        <path d="M24 24 L31 28 L34 34" />
      </g>
      <ellipse cx="20" cy="24" rx="5" ry="6" stroke="none" />
      <circle cx="20" cy="16.5" r="3.4" stroke="none" />
    </svg>
  );
}

export default function HalloweenOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [nomeCognome, setNomeCognome] = useState('');
  const [telefono, setTelefono] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus('submitting');

    try {
      const res = await fetch('/api/promo-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nomeCognome, telefono, clientType: 'halloween' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_FLAG)) return;
    const timeout = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SESSION_FLAG, '1');
    }, OPEN_DELAY_MS);
    return () => clearTimeout(timeout);
  }, []);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[75] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="premium-card relative w-full max-w-md max-h-[90vh] overflow-y-auto overflow-x-hidden bg-[#0c0c0b] border border-[#ff7a1a]/40 shadow-[0_0_60px_-10px_rgba(255,122,26,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorazioni Halloween */}
        <SpiderWeb className="absolute top-0 left-0 w-40 h-40 text-white/15 pointer-events-none" />
        <SpiderWeb className="absolute bottom-0 right-0 w-32 h-32 text-white/10 rotate-180 pointer-events-none" />
        <div className="absolute top-0 right-16 flex flex-col items-center pointer-events-none">
          <div className="w-px h-14 bg-white/25" />
          <Spider className="w-6 h-6 text-white/70 -mt-1" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,122,26,0.12),_transparent_60%)] pointer-events-none" />

        <button
          type="button"
          onClick={close}
          aria-label="Chiudi"
          className="absolute top-4 right-4 p-2 rounded-full bg-near-black/70 border border-white/10 text-white hover:bg-[#ff7a1a] hover:text-near-black transition-all z-10"
        >
          <X size={16} />
        </button>

        <div className="relative p-8 pt-16 text-center">
          <span className="text-4xl block mb-3" aria-hidden="true">🎃</span>

          <span className="font-sans text-xs font-bold tracking-[0.3em] text-[#ff7a1a] uppercase block mb-2">
            Promo Halloween
          </span>

          <h3 className="font-display text-4xl text-white tracking-tight uppercase leading-none mb-6">
            Dolcetto o <span className="text-[#ff7a1a]">allenamento?</span>
          </h3>

          <div className="border border-[#ff7a1a]/30 bg-[#ff7a1a]/5 p-5 mb-6">
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-white/60 uppercase block mb-2">
              Riservata ai già iscritti
            </span>
            <p className="font-display text-2xl text-white uppercase leading-tight">
              2 mensilità
            </p>
            <p className="font-display text-5xl text-[#ff7a1a] leading-none my-2">
              {PROMO_PRICE}€
            </p>
            <p className="font-sans text-sm text-white/50">
              anziché <span className="line-through">{FULL_PRICE}€</span>
            </p>
          </div>

          {status === 'success' ? (
            <div className="py-2">
              <div className="w-14 h-14 rounded-full bg-[#ff7a1a]/10 border border-[#ff7a1a]/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={26} className="text-[#ff7a1a]" />
              </div>
              <h4 className="font-display text-2xl text-white tracking-tight uppercase mb-2">
                Richiesta inviata!
              </h4>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Il nostro staff ti contatterà al numero indicato per attivare la promo di Halloween.
              </p>
            </div>
          ) : (
            <>
              <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
                Sei già parte della community di The Cave? Lascia nome e numero: ti ricontattiamo noi per attivare la promo.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label htmlFor="halloween-nome" className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    id="halloween-nome"
                    type="text"
                    required
                    value={nomeCognome}
                    onChange={(e) => setNomeCognome(e.target.value)}
                    className="w-full py-3 px-4 bg-white/[0.03] border border-white/10 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ff7a1a] transition-colors"
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label htmlFor="halloween-telefono" className="font-sans text-[11px] font-bold tracking-widest text-white/50 uppercase block mb-2">
                    Telefono
                  </label>
                  <input
                    id="halloween-telefono"
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full py-3 px-4 bg-white/[0.03] border border-white/10 text-white font-sans text-sm placeholder:text-white/25 focus:outline-none focus:border-[#ff7a1a] transition-colors"
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
                  className="w-full py-4 bg-[#ff7a1a] text-near-black font-sans font-bold text-sm text-center tracking-widest uppercase btn-cut flex items-center justify-center gap-2 hover:bg-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  {status === 'submitting' ? 'INVIO IN CORSO…' : 'RICHIEDI LA PROMO'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
