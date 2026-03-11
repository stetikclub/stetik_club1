const SiteFooter = () => {
  return (
    <footer className="border-t border-primary/10 py-10 px-6 z-10 relative text-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-display text-lg font-light italic text-foreground/20 mb-1.5">
          por <b className="text-primary/40 not-italic font-semibold">Fellipe Fuzaro</b>
        </div>
        <div className="font-body text-[9px] tracking-[3px] uppercase text-foreground/10">
          Stetik Club © &nbsp;·&nbsp; Estratégia &nbsp;·&nbsp; Execução &nbsp;·&nbsp; Liberdade
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
