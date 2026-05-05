import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Tvořím trvalé hodnoty z kamene a dřeva
          </h1>
          <p className="text-lg text-primary/65 mb-10 max-w-lg leading-relaxed">
            Tvořím stavby z kamene a výrobky ze dřeva. Při práci používám původní postupy a k surovinám nepřistupuji jen jako k materiálu, ale i jako k prvku, který si sám předurčuje své použití.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kamenne-prace"
              className="inline-flex justify-center items-center px-7 py-3.5 bg-[#444A3E] text-white font-medium rounded transition-opacity hover:opacity-75"
            >
              Moje služby
            </a>
            <a
              href="#kontakt"
              className="inline-flex justify-center items-center px-7 py-3.5 border border-[#444A3E] text-[#444A3E] font-medium rounded transition-colors hover:bg-[#444A3E] hover:text-white"
            >
              Poptat realizaci
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-square">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-photo-1.png"
              alt="Ukázka suché kamenné zídky"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-photo-2.png"
              alt="Kamenné schodiště v zahradě"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-photo-3.png"
              alt="Terasa z přírodního kamene"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-photo-4.png"
              alt="Dřevěná pergola a zahradní terasa"
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
