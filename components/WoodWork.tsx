import Image from 'next/image'

const services = [
  'Vyřezávané dřevěné sochy (často variace duté spirály)',
  'Stoly vyrobené z jednoho kusu kmene (příčný řez stromem)',
  'Fošny z celé šířky kmene',
  'Dřevěný nábytek na míru',
  'Další dřevěné výrobky na zakázku',
]

export default function WoodWork() {
  return (
    <section id="drevene-prace" className="py-20 bg-stone-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/woodwork-section.jpg"
            alt="Ukázka práce se dřevem – Grainform"
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/40 block mb-4">
            Práce se dřevem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
            Práce se dřevem
          </h2>
          <p className="text-primary/65 text-lg mb-8 leading-relaxed">
            Dřevo používám především pro solitérní objekty a nábytek.
            Nejčastěji pracuji s celými kusy kmene, jejichž tvar se snažím zachovat a pouze ho dál rozvíjet.
          </p>
          <ul className="space-y-3 mb-10" aria-label="Nabízené dřevěné práce">
            {services.map(service => (
              <li key={service} className="flex items-start gap-3 text-primary/75">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-none mt-2" aria-hidden />
                {service}
              </li>
            ))}
          </ul>
          <a
            href="#kontakt"
            className="inline-flex items-center px-7 py-3.5 bg-[#444A3E] text-white font-medium rounded transition-opacity hover:opacity-75"
          >
            Poptat realizaci
          </a>
        </div>
      </div>
    </section>
  )
}
