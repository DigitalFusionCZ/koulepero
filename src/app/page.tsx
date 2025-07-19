'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "Full‑Stack vývojář Vladislav Novák | Weby & Aplikace na míru";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D4AF37" /><stop offset="100%" stop-color="#C0C0C0" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
      (faviconLink as HTMLLinkElement).href = faviconUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconUrl;
      document.head.appendChild(link);
    }
  }, []);

  const PageTitle = "Full‑Stack vývojář Vladislav Novák";
  const MetaDescription = "Hledáte spolehlivého full‑stack programátora, který rozumí i byznysu? Vladislav Novák kombinuje ekonomické myšlení z VŠE s praxi ve vývoji webových aplikací, automatizaci procesů a datové analytice. Přetavím váš nápad v škálovatelný produkt.";

  return (
    <div className="bg-[#1A1A1A] text-white font-sans overflow-x-hidden min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-sm shadow-lg py-4 px-8 md:px-16 lg:px-24 flex justify-between items-center">
        <div className="text-2xl font-serif text-[#D4AF37] font-bold tracking-wider">
          Vladislav Novák
        </div>
        <nav className="hidden md:flex space-x-8 lg:space-x-12 fancy-text-shadow">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors duration-300">O mně</a>
          <a href="#services" className="hover:text-[#D4AF37] transition-colors duration-300">Služby</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">Kontakt</a>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#1A1A1A] p-8 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="flex flex-col space-y-6 pt-16 text-lg tracking-wider">
          <a href="#about" onClick={toggleMenu} className="hover:text-[#D4AF37] transition-colors duration-300">O mně</a>
          <a href="#services" onClick={toggleMenu} className="hover:text-[#D4AF37] transition-colors duration-300">Služby</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-[#D4AF37] transition-colors duration-300">Kontakt</a>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center p-4 bg-gradient-to-br from-[#1A1A1A] to-zinc-900 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            src="https://videos.pexels.com/videos/programmer-coding-on-laptop-6725350/programmer-coding-on-laptop-6725350.mp4"
          />
          <div className="relative z-10 space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#D4AF37] font-extrabold leading-tight tracking-tighter drop-shadow-lg animate-fade-in-down">
              Potřebujete kód, který vydělává?
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mt-4 leading-relaxed animate-fade-in-up">
              „Kóduju to, co ostatní jen plánují.“
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#D4AF37] text-[#1A1A1A] tracking-wider text-lg md:text-xl font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-[#C0C0C0] transition-all duration-300 transform hover:scale-105 fancy-button-shadow animate-fade-in-up-delay"
            >
              Domluvit 30min call zdarma
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-gradient-to-br from-[#1A1A1A] to-black-900 fancy-pattern-background relative">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-x-12 md:space-y-0">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] font-bold mb-8 text-center md:text-left">O mně</h2>
              <p className="text-lg leading-relaxed mb-4 text-gray-300">
                Jsem Vlad&thinsp;Novák, full&thinsp;stack vývojář a&thinsp;student IT na VŠE v&thinsp;Praze.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-300">
                <strong className="text-[#D4AF37]">Business&thinsp;+&thinsp;Tech:</strong> Díky ekonomickému zázemí chápu, že kód sám o&thinsp;sobě nic neřeší – musí zvyšovat zisk, šetřit čas nebo otvírat nové příležitosti.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-300">
                <strong className="text-[#D4AF37]">Stack:</strong> TypeScript&thinsp;/&thinsp;Node.js, Python, React, Next.js, PostgreSQL, Docker.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-300">
                <strong className="text-[#D4AF37]">Data&thinsp;driven:</strong> Fascinuje mě biologická komplexita i&thinsp;ekonomické modely; stejnou preciznost přináším do analýz a&thinsp;optimalizace backendu.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-300">
                <strong className="text-[#D4AF37]">Brutálně upřímný:</strong> Když je váš nápad díra na peníze, řeknu to na rovinu ještě předtím, než spálíte rozpočet.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                <strong className="text-[#D4AF37]">Co dělám, když nekóduju:</strong> Cestuju, čtu historii a&thinsp;lovím politické/economic geek&thinsp;fakty.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Vladislav Novák" className="rounded-lg shadow-2xl w-full h-auto max-w-md object-cover border-4 border-[#D4AF37]/50" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-gradient-to-br from-black-900 to-[#1A1A1A]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] font-bold mb-16 text-center">Co nabízím</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#D4AF37]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-3xl font-serif text-[#D4AF37] font-semibold mb-4 relative z-10">Vývoj webových aplikací</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  MVP do 6&thinsp;týdnů, důkladné testy, CI/CD pipeline
                </p>
                <p className="text-sm text-gray-400 relative z-10">
                  <strong className="text-white">Proč se mnou dává smysl:</strong> Rychle validujete trh a neplatíte za zbytečné fíčury
                </p>
              </div>

              <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#D4AF37]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-3xl font-serif text-[#D4AF37] font-semibold mb-4 relative z-10">Automatizace &nbsp;integrace</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Skripty a&thinsp;micro&thinsp;služby, co propojí CRM, ERP, Slack ap.
                </p>
                <p className="text-sm text-gray-400 relative z-10">
                  <strong className="text-white">Proč se mnou dává smysl:</strong> Šetříte manuální práci a&thinsp;eliminujete lidské chyby
                </p>
              </div>

              <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#D4AF37]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-3xl font-serif text-[#D4AF37] font-semibold mb-4 relative z-10">Datová analytika</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  ETL, dashboardy, prediktivní modely
                </p>
                <p className="text-sm text-gray-400 relative z-10">
                  <strong className="text-white">Proč se mnou dává smysl:</strong> Rozhodujete se podle dat, ne pocitu
                </p>
              </div>

              <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#D4AF37]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-3xl font-serif text-[#D4AF37] font-semibold mb-4 relative z-10">Technické konzultace</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Audit kódu, cost&thinsp;cutting v cloudu
                </p>
                <p className="text-sm text-gray-400 relative z-10">
                  <strong className="text-white">Proč se mnou dává smysl:</strong> Platíte jen za odborný názor, ne za sales bullsh*t
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-gradient-to-br from-[#1A1A1A] to-zinc-900 fancy-pattern-background-dark">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] font-bold mb-12">Získejte kód, který vydělává</h2>
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">E-mail: </strong>
                <a href="mailto:hello@vladnovak.dev" className="text-[#D4AF37] hover:underline underline-offset-4 transition-colors duration-300">
                  hello@vladnovak.dev
                </a>
              </p>
              <p>
                <strong className="text-white">Telefon: </strong>
                <span className="text-gray-300">+420&thinsp;[PLACEHOLDER]</span>
              </p>
              <p>
                <strong className="text-white">Adresa pro fakturaci: </strong>
                <span className="text-gray-300">[PLACEHOLDER]</span>
              </p>
              <p>
                <strong className="text-white">IČO / DIČ: </strong>
                <span className="text-gray-300">[PLACEHOLDER]</span>
              </p>
            </div>
            <p className="mt-12 text-sm text-gray-400">
              Těším se na vaši zprávu a na to, jak společně přetavíme vaše nápady v realitu.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-zinc-900 text-center text-gray-500 text-sm">
        <p>
          Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">DigitalFusion</a>
        </p>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .fancy-text-shadow { text-shadow: 0 0 5px rgba(212, 175, 55, 0.4), 0 0 10px rgba(212, 175, 55, 0.2); }
        .fancy-button-shadow { box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4); }
        .fancy-pattern-background { background-image: radial-gradient(#333 1px, transparent 1px), radial-gradient(#333 1px, transparent 1px); background-size: 40px 40px; background-position: 0 0, 20px 20px; }
        .fancy-pattern-background-dark { background-image: radial-gradient(#222 1px, transparent 1px), radial-gradient(#222 1px, transparent 1px); background-size: 40px 40px; background-position: 0 0, 20px 20px; }
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up-delay { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in-up-delay { animation: fade-in-up-delay 1s ease-out forwards 0.5s; }
      `}</style>
    </div>
  );
}
