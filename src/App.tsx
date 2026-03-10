import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Menu, X, Zap, Shield, Globe, Star, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">Nexus</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#recursos" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Recursos</a>
              <a href="#depoimentos" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Depoimentos</a>
              <a href="#precos" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Preços</a>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                Começar Grátis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4"
          >
            <a href="#recursos" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Recursos</a>
            <a href="#depoimentos" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a href="#precos" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Preços</a>
            <button className="w-full bg-slate-900 text-white px-4 py-3 rounded-xl text-sm font-medium">
              Começar Grátis
            </button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-8 border border-indigo-100"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              Nova versão 2.0 disponível
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight"
            >
              Construa o futuro do seu negócio <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">hoje mesmo</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              A plataforma completa para equipes modernas. Escale suas operações, automatize processos e alcance resultados extraordinários em tempo recorde.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                Começar agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium text-lg hover:bg-slate-50 transition-colors">
                Agendar demonstração
              </button>
            </motion.div>

            {/* Hero Image Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-20 relative mx-auto max-w-5xl"
            >
              <div className="rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-indigo-900/5">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80" 
                  alt="Dashboard Preview" 
                  className="rounded-xl border border-slate-100 w-full object-cover aspect-[16/9]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo que você precisa para crescer</h2>
              <p className="text-lg text-slate-600">Nossa plataforma foi desenhada pensando na produtividade da sua equipe, com ferramentas poderosas e fáceis de usar.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-amber-500" />,
                  title: "Performance Extrema",
                  desc: "Arquitetura otimizada para garantir tempos de resposta em milissegundos, não importa o volume de dados."
                },
                {
                  icon: <Shield className="w-6 h-6 text-emerald-500" />,
                  title: "Segurança de Nível Bancário",
                  desc: "Seus dados protegidos com criptografia de ponta a ponta e conformidade com as principais leis de proteção."
                },
                {
                  icon: <Globe className="w-6 h-6 text-indigo-500" />,
                  title: "Escala Global",
                  desc: "Infraestrutura distribuída globalmente para atender seus clientes onde quer que eles estejam."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-100/50 transition-all"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section id="depoimentos" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Amado por equipes inovadoras</h2>
              <p className="text-slate-400 text-lg">Junte-se a mais de 10.000 empresas que já transformaram seus negócios.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote: "A implementação foi incrivelmente rápida. Em menos de uma semana já estávamos vendo resultados reais na nossa produtividade.",
                  author: "Mariana Silva",
                  role: "Diretora de Operações, TechCorp",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                },
                {
                  quote: "O suporte é excepcional e a plataforma evolui constantemente. É exatamente o parceiro tecnológico que precisávamos.",
                  author: "Carlos Mendes",
                  role: "CEO, StartupX",
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                },
                {
                  quote: "Reduzimos nossos custos operacionais em 40% após migrar para o Nexus. A melhor decisão que tomamos este ano.",
                  author: "Ana Costa",
                  role: "CFO, GlobalRetail",
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50"
                >
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing/CTA Section */}
        <section id="precos" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para dar o próximo passo?</h2>
            <p className="text-xl text-slate-600 mb-10">Comece gratuitamente hoje. Sem necessidade de cartão de crédito.</p>
            
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-2">Plano Pro</h3>
                <p className="text-slate-600 mb-6">Tudo que você precisa para escalar.</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">R$ 97</span>
                  <span className="text-slate-500">/mês</span>
                </div>
                <ul className="space-y-3">
                  {['Usuários ilimitados', 'Suporte prioritário 24/7', 'Integrações premium', 'Analytics avançado'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-4">
                <button className="w-full md:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                  Assinar Agora
                </button>
                <p className="text-sm text-center text-slate-500">Garantia de 14 dias de devolução</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Nexus</span>
              </div>
              <p className="text-slate-500 text-sm">
                Construindo as ferramentas do futuro para as equipes de hoje.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600">Recursos</a></li>
                <li><a href="#" className="hover:text-indigo-600">Integrações</a></li>
                <li><a href="#" className="hover:text-indigo-600">Preços</a></li>
                <li><a href="#" className="hover:text-indigo-600">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600">Sobre nós</a></li>
                <li><a href="#" className="hover:text-indigo-600">Carreiras</a></li>
                <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-indigo-600">Privacidade</a></li>
                <li><a href="#" className="hover:text-indigo-600">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Nexus Inc. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
