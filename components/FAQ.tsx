'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Kam se hodí suchá kamenná zeď?',
    a: 'Suché zídky jsou ideální do zahrad, svahů a přírodních prostor, kde pomáhají zpevnit terén a zároveň přirozeně splynou s okolím. Hodí se i k oddělení záhonů nebo jako dekorativní prvek.',
  },
  {
    q: 'Jaký je rozdíl mezi suchou a maltovanou zdí?',
    a: 'Suchá zeď se staví bez použití malty – kameny se skládají ručně tak, aby držely vlastní vahou. Výhodou je přirozený vzhled, schopnost odvádět vodu a snadná oprava.',
  },
  {
    q: 'Jak dlouho vydrží suchá kamenná zeď?',
    a: 'Při správné stavbě a údržbě může vydržet desítky až stovky let. Trvanlivost závisí na kvalitě kamene, sklonu terénu a způsobu založení.',
  },
  {
    q: 'Jaký kámen je nejlepší pro stavbu suché zdi?',
    a: 'Při práci s kamenem lze využít téměř jakýkoli druh kamene. Důležité je především to, aby měl vhodný tvar, rovné plochy a byl dostatečně odolný vůči mrazu.',
  },
  {
    q: 'Jak náročná je údržba suché zdi?',
    a: 'Minimální. Stačí občas zkontrolovat stabilitu a doplnit menší kameny, pokud se časem uvolní. Výhodou je snadná oprava bez bourání celé konstrukce.',
  },
  {
    q: 'Stavíte i zídky na svazích nebo u vodních ploch?',
    a: 'Ano. Při správném založení a odvodnění lze suché zdi bezpečně použít i v náročnějším terénu nebo v kombinaci s potokem či jezírkem.',
  },
  {
    q: 'Vyrábíte i dřevěné prvky do zahrad?',
    a: 'Ano, vyrábím lavice, pergoly, stoly i drobné doplňky ze dřeva, které ladí s kamennými stavbami. Každý kus je originál vyrobený na míru.',
  },
  {
    q: 'Kde působíte?',
    a: 'Pracuji převážně ve Středočeském kraji a okolí Benešova, ale po domluvě mohu realizovat projekty i jinde v Česku.',
  },
  {
    q: 'Stavíte i v zimě?',
    a: 'Většina kamenických prací probíhá od jara do podzimu, kdy jsou vhodné podmínky pro práci s materiálem. Konzultace, návrhy a přípravy lze řešit celoročně.',
  },
  {
    q: 'Jak dlouho trvá realizace projektu?',
    a: 'Menší projekty (např. zídka do 5 metrů) zvládnu během několika dní, větší stavby nebo kombinace s dřevem trvají 1–3 týdny podle rozsahu a počasí.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/40 block mb-4">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            Časté dotazy
          </h2>
        </div>

        <dl className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-primary/10 rounded-xl bg-white overflow-hidden">
              <dt>
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-medium hover:bg-primary/3 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.q}</span>
                  <span
                    className="ml-6 flex-none text-2xl leading-none transition-transform duration-300"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '400px' : '0px' }}
              >
                <p className="px-6 pb-6 text-primary/65 leading-relaxed">{faq.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
