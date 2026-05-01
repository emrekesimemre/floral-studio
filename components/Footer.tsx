export default function Footer() {
  return (
    <footer className="bg-floral-bg py-12 border-t border-floral-accent/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-light tracking-widest text-floral-text">
          S T U D I O <span className="text-floral-primary font-normal">.</span>
        </div>
        
        <p className="text-sm font-light text-floral-text/60">
          © {new Date().getFullYear()} Studio. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}