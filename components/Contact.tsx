export default function Contact() {
  return (
    <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary/40 block mb-4">
          Kontakt
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6">
          Pojďme společně tvořit
        </h2>
        <p className="text-primary/65 text-lg mb-12 leading-relaxed">
          Máte projekt, který chcete realizovat? Napište mi, rád proberu vaše představy.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 text-left">
          <div className="p-8 border border-primary/10 rounded-2xl hover:border-primary/25 transition-colors">
            <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="font-medium text-sm uppercase tracking-wider text-primary/40 mb-2">
              E-mail
            </p>
            <a
              href="mailto:grainform@seznam.cz"
              className="text-primary font-medium hover:opacity-60 transition-opacity break-all"
            >
              grainform@seznam.cz
            </a>
          </div>

          <div className="p-8 border border-primary/10 rounded-2xl hover:border-primary/25 transition-colors">
            <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p className="font-medium text-sm uppercase tracking-wider text-primary/40 mb-2">
              Telefon
            </p>
            <a
              href="tel:+420601184259"
              className="text-primary font-medium hover:opacity-60 transition-opacity"
            >
              +420 601 184 259
            </a>
          </div>

          <div className="p-8 border border-primary/10 rounded-2xl hover:border-primary/25 transition-colors">
            <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="font-medium text-sm uppercase tracking-wider text-primary/40 mb-2">
              Lokalita
            </p>
            <p className="text-primary font-medium">Benešov u Prahy</p>
          </div>
        </div>
      </div>
    </section>
  )
}
