/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const TP_GREEN = '#00b67a';

const TrustpilotStarBox = ({ size = 40 }: { size?: number }) => (
  <span
    style={{
      width: size,
      height: size,
      backgroundColor: TP_GREEN,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    <svg
      width={size * 0.64}
      height={size * 0.64}
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 3.9 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  </span>
);

export default function TrustpilotBanner() {
  return (
    <section className="bg-[#060908] border-t border-white/5 py-20 px-4 md:px-6 relative overflow-hidden">

      {/* Subtle Trustpilot-green radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,182,122,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">

        {/* 5 Trustpilot star boxes */}
        <div className="flex items-center justify-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <TrustpilotStarBox key={i} size={42} />
          ))}
        </div>

        {/* Brand label */}
        <span
          className="font-sans text-[11px] font-bold tracking-[0.35em] uppercase block"
          style={{ color: TP_GREEN }}
        >
          Trustpilot
        </span>

        {/* Headline */}
        <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-none text-white uppercase">
          LA TUA VOCE{' '}
          <span
            style={{
              WebkitTextStroke: `2px ${TP_GREEN}`,
              color: 'transparent',
            }}
          >
            CONTA
          </span>
        </h2>

        {/* Accent divider */}
        <div
          className="w-10 h-0.5 mx-auto"
          style={{ backgroundColor: TP_GREEN }}
        />

        {/* Body copy */}
        <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed tracking-wide max-w-xl mx-auto">
          Sei già un atleta della Cave? La tua esperienza conta davvero. Aiuta altri a trovare la propria community — lascia una recensione su Trustpilot. Ci vogliono solo 2 minuti.
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-10 font-sans font-black text-xs tracking-[0.25em] uppercase btn-cut text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            style={{ backgroundColor: TP_GREEN }}
          >
            <TrustpilotStarBox size={18} />
            LASCIA UNA RECENSIONE
          </a>
        </div>

        {/* Fine print */}
        <p className="font-sans text-[10px] text-white/20 tracking-[0.2em] uppercase">
          Recensioni indipendenti e verificate — Trustpilot.com
        </p>

      </div>
    </section>
  );
}
