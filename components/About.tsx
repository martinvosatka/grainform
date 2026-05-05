import Image from 'next/image'

export default function About() {
  return (
    <section id="o-nas" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/40 block mb-4">
            O Grainformu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
            O Grainformu
          </h2>

          <p className="italic text-lg text-primary/75 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-roboto)' }}>
            Slovo grain lze přeložit jako zrno, zrnitost nebo vlákno. Odkazuje na strukturu materiálu, se kterým pracuji – kámen a dřevo. Form pak znamená podobu, kterou těmto materiálům dávám.
            <br /><br />
            Grainform je tedy spojení přirozené struktury materiálu a lidského zásahu, který z ní vytváří nový tvar.
          </p>

          <div className="space-y-4 text-primary/65 text-lg leading-relaxed">
            <p>
              Se dřevem a kamenem pracuji už osmým rokem. Původně to byla náhoda, která se postupně změnila v moji profesi.
            </p>
            <p>Ke každému materiálu přistupuji trochu jinak:</p>
            <ul className="space-y-1 pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-none mt-2.5" aria-hidden />
                kámen používám hlavně pro stavby a konstrukce
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-none mt-2.5" aria-hidden />
                dřevo je pro mě prostor pro více volnou a kreativní práci
              </li>
            </ul>
            <p>
              U dřeva se často nechávám vést původním tvarem kmene – vznikají tak sochy, stoly z jednoho kusu nebo jiné solitérní objekty.
            </p>
          </div>
        </div>

        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/images/grainform-about-photo.png"
            alt="Krystof Jung – Grainform, práce s kamenem a dřevem"
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
