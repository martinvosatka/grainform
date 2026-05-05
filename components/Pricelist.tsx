export default function Pricelist() {
  return (
    <section id="cenik" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary/40 block mb-4">
          Ceník
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6">
          Orientační ceník služeb
        </h2>
        <p className="text-primary/65 text-lg mb-10 leading-relaxed">
          Stáhněte si náš ceník pro přehled cen jednotlivých prací a materiálů. Pro přesnou cenovou nabídku na váš projekt nás neváhejte kontaktovat.
        </p>
        <a
          href="/pricelist.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#444A3E] text-white font-medium rounded transition-opacity hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 flex-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Ceník služeb
        </a>
      </div>
    </section>
  )
}
