export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Grainform. Všechna práva vyhrazena.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/p/Such%C3%A9-kamenn%C3%A9-z%C3%ADdky-workshop-61574753138031/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Grainform na Facebooku"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  )
}
