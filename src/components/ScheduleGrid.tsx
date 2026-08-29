/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Calendar, ExternalLink, Loader2 } from 'lucide-react';

const BOOKING_WIDGET_BASE = 'https://cfthecave.shaggyowl.com/frame/palinsesto_completo/all';

const LOCATIONS = [
  { id: 'mandrione', label: 'Mandrione', param: '1229' },
  { id: 'cinecitta', label: 'Cinecittà', param: '16935' },
  { id: 'visita-mandrione', label: 'Visita Medica Mandrione', param: '157432' },
  { id: 'visita-cinecitta', label: 'Visita Medica Cinecittà', param: '157433' },
] as const;

type LocationId = typeof LOCATIONS[number]['id'];

function widgetUrl(locationId: LocationId): string {
  const location = LOCATIONS.find((l) => l.id === locationId)!;
  return `${BOOKING_WIDGET_BASE}?palinsesto=${location.param}`;
}

export default function ScheduleGrid() {
  const [loaded, setLoaded] = useState(false);
  const [activeLocation, setActiveLocation] = useState<LocationId>('mandrione');
  const bookingWidgetUrl = widgetUrl(activeLocation);

  const selectLocation = (id: LocationId) => {
    if (id === activeLocation) return;
    setLoaded(false);
    setActiveLocation(id);
  };

  return (
    <section id="orari" className="bg-near-black py-16 md:py-24 px-4 md:px-6 border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 md:mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase block mb-3">
              I NOSTRI TURNI GIORNALIERI
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              ORARI RUSH <span className="text-outline">HOUR</span>
            </h2>
            <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto md:mx-0"></div>
          </div>
          <p className="font-sans text-sm text-white/40 tracking-wider max-w-sm text-center md:text-right">
            Consulta il palinsesto completo e prenota direttamente la tua classe: il calendario qui sotto è collegato in tempo reale al nostro sistema di prenotazione.
          </p>
        </div>

        {/* Live booking widget */}
        <div className="premium-card bg-[#0c0c0b] border border-white/10 overflow-hidden relative">
          <div className="bg-white/[0.02] border-b border-white/10 p-5 flex flex-col md:flex-row items-center gap-4 md:gap-3">
            <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
              <Calendar size={16} className="text-brand-yellow/70" />
              <span className="font-sans text-xs font-bold tracking-widest text-white/60 uppercase whitespace-nowrap">
                Palinsesto & Prenotazioni Live
              </span>
            </div>

            {/* Location filter buttons — swap which box's schedule the widget shows */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:mx-auto">
              {LOCATIONS.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectLocation(id)}
                  className={`px-3.5 py-2 font-sans text-[10px] font-bold tracking-widest uppercase btn-cut transition-colors whitespace-nowrap ${
                    activeLocation === id
                      ? 'bg-brand-yellow text-near-black'
                      : 'bg-white/[0.03] border border-white/10 text-white/60 hover:border-brand-yellow/40 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <a
              href={bookingWidgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-[11px] font-bold tracking-wider text-brand-yellow/80 hover:text-brand-yellow uppercase transition-colors shrink-0 self-end md:self-center"
            >
              Apri a schermo intero
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="relative w-full h-[820px] md:h-[900px] bg-white">
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0c0c0b]">
                <Loader2 size={28} className="text-brand-yellow animate-spin" />
                <span className="font-sans text-[11px] tracking-widest text-white/40 uppercase">
                  Caricamento orari...
                </span>
              </div>
            )}
            <iframe
              key={activeLocation}
              src={bookingWidgetUrl}
              title="Palinsesto e prenotazione lezioni The Cave"
              onLoad={() => setLoaded(true)}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
