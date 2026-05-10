import Image from 'next/image'

const services = [
  'Obvodové zdi',
  'Opěrné zdi (i suché)',
  'Opravy starých zdí',
  'Sloupy',
  'Koruny studny',
  'Schody',
  'Klenby',
]

export default function StoneWork() {
  return (
    <section id="kamenne-prace" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/40 block mb-4">
            Práce s kamenem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
            Práce s kamenem
          </h2>
          <p className="text-primary/65 text-lg mb-8 leading-relaxed">
            Kámen využívám především pro stavební a zahradní prvky s důrazem na trvanlivost a přirozený vzhled. Pracuji s různými druhy kamene, které opracovávám s respektem k jejich struktuře a charakteru.
          </p>
          <ul className="space-y-3" aria-label="Nabízené kamenné práce">
            {services.map(service => (
              <li key={service} className="flex items-center gap-3 text-primary/75">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-none" aria-hidden />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
          <Image
            src="/images/stone-work-section.jpg"
            alt="Ukázka práce s kamenem – Grainform"
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
