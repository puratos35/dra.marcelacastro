/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511947306537?text=*Ol%C3%A1%2C%20vim%20pelo%20site!*";
const INSTAGRAM_LINK = "https://www.instagram.com/dra.marcelacastro/";
const MAPS_LINK = "https://maps.app.goo.gl/YUTiCATgWLC6X1M57";

const SERVICES = [
  {
    id: 1,
    title: "Bioestimulador de Colágeno",
    img: "https://i.imgur.com/2fKAAwi.png",
    desc: "Revitaliza sua pele com colágeno natural, rejuvenescendo rosto e sorriso."
  },
  {
    id: 2,
    title: "Preenchimento em Ácido Hialurônico",
    img: "https://i.imgur.com/AgpbJag.png",
    desc: "Contornos perfeitos e hidratados para harmonia facial."
  },
  {
    id: 3,
    title: "Clínica Geral",
    img: "https://i.imgur.com/9L3Zxmd.png",
    desc: "Cuidado integral com excelência premium."
  },
  {
    id: 4,
    title: "Profilaxia Profissional (Limpeza)",
    img: "https://i.imgur.com/SEPSnWf.png",
    desc: "Limpeza profunda para brilho saudável."
  },
  {
    id: 5,
    title: "Clareamento Dental",
    img: "https://i.imgur.com/5JBkf4F.png",
    desc: "Sorriso branco e radiante sem sensibilidade."
  },
  {
    id: 6,
    title: "Toxina Botulínica",
    img: "https://i.imgur.com/KsSpvsu.png",
    desc: "Suaviza rugas com resultados elegantes."
  }
];

const TESTIMONIALS = [
  { id: 1, img: "https://i.imgur.com/qPHlvmb.jpeg", name: "Ana Paula", text: "Minha autoestima mudou completamente. Resultados naturais e atendimento impecável." },
  { id: 2, img: "https://i.imgur.com/X8ds46S.jpeg", name: "Mariana Silva", text: "A Dra. Marcela é uma artista. Superou todas as minhas expectativas no preenchimento." },
  { id: 3, img: "https://i.imgur.com/C2V6iEk.jpeg", name: "Fernanda Costa", text: "Localização fácil e clínica maravilhosa. Recomendo para quem busca o melhor." },
  { id: 4, img: "https://i.imgur.com/Q3IIliE.jpeg", name: "Beatriz Lopes", text: "O clareamento foi indolor e o resultado ficou incrível. Sorriso de cinema!" }
];

const BEFORE_AFTER = [
  { id: 1, img: "https://i.imgur.com/1QHJN5O.jpeg", label: "Harmonização Orofacial" },
  { id: 2, img: "https://i.imgur.com/LjfmFvN.jpeg", label: "Estética Bucal" },
  { id: 3, img: "https://i.imgur.com/BTlGZua.jpeg", label: "Transformação Natural" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, mobile }: { href: string; children: ReactNode; mobile?: boolean }) => (
    <a 
      href={href} 
      onClick={() => mobile && setMobileMenuOpen(false)}
      className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${mobile ? 'text-lg py-4 border-b border-nude-dark w-full text-center font-medium' : 'font-medium'}`}
    >
      {children}
    </a>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-premium-black">
            [Dra. Marcela Castro]
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#resultados">Resultados</NavLink>
            <NavLink href="#depoimentos">Depoimentos</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </nav>

          <div className="hidden lg:block">
            <a 
              href={WHATSAPP_LINK}
              className="bg-premium-black text-white px-6 py-2.5 rounded-full flex items-center space-x-2 transition-all hover:bg-gold hover:scale-105 glow-hover"
            >
              <MessageCircle size={18} className="text-white fill-current" />
              <span className="font-semibold text-sm">Agende WhatsApp</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-premium-black cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-8"
          >
            <button 
              className="absolute top-8 right-8 text-premium-black p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center w-full space-y-2">
              <NavLink href="#home" mobile>Home</NavLink>
              <NavLink href="#sobre" mobile>Sobre</NavLink>
              <NavLink href="#servicos" mobile>Serviços</NavLink>
              <NavLink href="#resultados" mobile>Resultados</NavLink>
              <NavLink href="#depoimentos" mobile>Depoimentos</NavLink>
              <NavLink href="#contato" mobile>Contato</NavLink>
              <a 
                href={WHATSAPP_LINK}
                className="mt-8 bg-premium-black text-white w-full py-4 rounded-full flex items-center justify-center space-x-3 text-lg font-bold glow-hover"
              >
                <MessageCircle size={22} className="fill-current" />
                <span>Agende no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center bg-[#FDFDFB] pt-20 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-nude-soft/30 -z-0 rounded-l-[5rem]"></div>
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-gold/5 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-premium-black"
              >
                <span className="inline-block px-4 py-1.5 bg-gold/10 rounded-full text-gold font-semibold text-xs tracking-widest uppercase mb-8">
                  Referência em Estética Facial
                </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                  Descubra Sua Versão <br />
                  <span className="text-gold italic font-serif">Mais Radiante</span> <br />
                  com Dra. Marcela Castro
                </h1>
                <p className="text-lg md:text-xl font-light mb-10 max-w-lg text-gray-600 leading-relaxed">
                  Transformações naturais que elevam sua autoestima através da Odontologia Premium e Harmonização Facial no Tatuapé, SP.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <motion.a 
                    href={WHATSAPP_LINK}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-premium-black text-white px-10 py-5 rounded-full flex items-center justify-center space-x-3 text-lg font-bold glow-hover shadow-xl"
                  >
                    <MessageCircle size={22} className="fill-current" />
                    <span>Agendar Consulta</span>
                  </motion.a>
                  <div className="flex items-center space-x-3 px-6 py-4 bg-white border border-nude-dark rounded-full shadow-sm">
                    <Star size={20} className="text-gold fill-gold" />
                    <span className="text-sm font-semibold tracking-wide">Resultados de Alta Performance</span>
                  </div>
                </div>

                <div className="mt-12 flex items-center space-x-8 opacity-60">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-nude-dark"></div>
                    ))}
                  </div>
                  <p className="text-sm font-medium">+500 Sorrisos Transformados</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="relative"
              >
                {/* Image Frame */}
                <div className="relative z-10 p-4">
                  <div className="image-frame-premium aspect-[4/5] bg-nude-dark">
                    <img 
                      src="https://i.imgur.com/imvyjUt.jpeg" 
                      alt="Dra. Marcela Castro" 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-nude-soft max-w-[200px]"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider">Expertise</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-tight">Resultados naturais e personalizados para cada paciente.</p>
                  </motion.div>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gold/10 rounded-full -z-0"></div>
                <div className="absolute top-10 right-0 w-32 h-32 bg-gold/10 blur-3xl -z-0 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="sobre" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  <div className="image-frame-premium aspect-[3/4] max-w-md mx-auto overflow-hidden">
                    <img 
                      src="https://i.imgur.com/5Kg7wi6.png" 
                      alt="Dra. Marcela Castro Profissional" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Geometric accent */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-gold/30 rounded-tr-[4rem] -z-0"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-gold/30 rounded-bl-[4rem] -z-0"></div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Por Que Escolher <br />
                  <span className="text-gold">Odontologia e Harmonização?</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Com expertise de alto nível em harmonização orofacial e odontologia premium, entrego resultados naturais que restauram a confiança e a beleza autêntica de cada paciente.
                  </p>
                  <p>
                    Cada sorriso é uma história de transformação personalizada. Meu foco está em utilizar o que há de mais moderno em bioestimuladores, preenchimentos e clareamentos indolores para garantir conforto e satisfação absoluta.
                  </p>
                </div>

                <div className="mt-10 space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                      <Sparkles size={20} />
                    </div>
                    <span className="font-medium text-premium-black">Abordagem humanizada e high-ticket</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                      <Zap size={20} />
                    </div>
                    <span className="font-medium text-premium-black">Tecnologia de ponta para naturalidade</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                      <MapPin size={20} />
                    </div>
                    <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-premium-black hover:text-gold transition-colors flex items-center gap-1 underline underline-offset-4 decoration-gold/30">
                      Atendimento exclusivo em Tatuapé - SP
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <a 
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center space-x-2 text-premium-black font-bold uppercase tracking-widest text-sm group"
                  >
                    <span>Saiba Mais Pelo WhatsApp</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-gold" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicos" className="py-24 bg-nude-soft">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold tracking-widest uppercase text-xs">Excelência em cada detalhe</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Serviços Exclusivos para Sua Transformação</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">Resultados personalizados que combinam ciência, arte e cuidado integral.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group glow-hover transition-all"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <a 
                        href={WHATSAPP_LINK} 
                        className="text-white flex items-center space-x-2 font-semibold text-sm"
                      >
                        <span>Solicitar Protocolo</span>
                        <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <a 
                      href={WHATSAPP_LINK}
                      className="text-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn"
                    >
                      Saiba Mais <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-premium-black font-medium text-lg italic">"Beleza em harmonia com sua essência."</p>
            </div>
          </div>
        </section>

        {/* BEFORE AND AFTER SECTION */}
        <section id="resultados" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-gold font-semibold tracking-widest uppercase text-xs">Galeria de Resultados</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4">Transformações Reais</h2>
              </div>
              <div className="max-w-md">
                <p className="text-gray-500 italic">"Veja o poder da harmonização natural – resultados autênticos de pacientes que recuperaram a autoestima através de protocolos exclusivos."</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BEFORE_AFTER.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group"
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl mb-4 relative">
                    <img 
                      src={item.img} 
                      alt={item.label} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-xs uppercase tracking-[0.2em] font-medium opacity-80 mb-1">Resultado de Paciente</p>
                      <h4 className="text-white text-lg font-bold">{item.label}</h4>
                    </div>
                  </div>
                  <p className="text-center text-sm font-medium text-gray-400 italic">De insegura a confiante em semanas</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <a 
                href={WHATSAPP_LINK}
                className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 rounded-full font-bold transition-all glow-hover flex items-center space-x-3"
              >
                <span>Sua Transformação Começa Aqui</span>
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="depoimentos" className="py-24 bg-premium-black text-white relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 text-[20rem] font-serif leading-none italic font-bold">"</div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">O Que Minhas Pacientes Dizem</h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
              <p className="mt-8 text-white/60 tracking-widest uppercase text-sm">Confiança validada por quem viveu a transformação</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((testi, i) => (
                <motion.div 
                  key={testi.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center group hover:border-gold/50 transition-colors"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gold/30 p-1">
                    <img 
                      src={testi.img} 
                      alt={testi.name} 
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-gold fill-gold" />)}
                  </div>
                  <p className="italic text-white/80 text-sm leading-relaxed mb-6">"{testi.text}"</p>
                  <span className="font-bold text-gold tracking-wider">{testi.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIALS SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12">O Que Nos Tornam Únicos</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-nude-soft rounded-xl flex items-center justify-center text-gold">
                      <ShieldCheck size={28} />
                    </div>
                    <h4 className="text-xl font-bold">Autoridade Premium</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Expertise comprovada com especializações em harmonização orofacial avançada.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-nude-soft rounded-xl flex items-center justify-center text-gold">
                      <Sparkles size={28} />
                    </div>
                    <h4 className="text-xl font-bold">Exclusividade</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Atendimentos personalizados e tempo dedicado exclusivamente a entender seu desejo.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-nude-soft rounded-xl flex items-center justify-center text-gold">
                      <Zap size={28} />
                    </div>
                    <h4 className="text-xl font-bold">Tecnologia Avançada</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Equipamentos de última geração para resultados naturais, seguros e duradouros.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-nude-soft rounded-xl flex items-center justify-center text-gold">
                      <MapPin size={28} />
                    </div>
                    <h4 className="text-xl font-bold">Tatuapé - SP</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Localização privilegiada com fácil acesso e infraestrutura de luxo no coração de SP.</p>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="image-frame-premium aspect-square relative z-10 p-2 bg-white">
                  <img 
                    src="https://i.imgur.com/5Kg7wi6.png" 
                    alt="Dra. Marcela Castro" 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent pointer-events-none"></div>
                </div>
                {/* Decorative backgrounds */}
                <div className="absolute -top-10 -left-10 w-full h-full bg-nude-soft -z-0 rounded-[2rem]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border-2 border-dashed border-gold/10 rounded-full animate-spin-slow"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA FINAL SECTION */}
        <section id="contato" className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-gradient-to-br from-nude-dark via-gold/40 to-nude-soft rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/20 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-premium-black">
                Pronto para Sua <br />
                <span className="italic font-serif">Transformação Premium?</span>
              </h2>
              <p className="text-xl text-premium-black/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Agende agora e receba um retorno prioritário via WhatsApp. Sua jornada para uma nova versão começa aqui.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  className="bg-premium-black text-white px-12 py-5 rounded-full flex items-center space-x-4 text-xl font-bold transition-all hover:scale-105 hover:bg-black glow-hover shadow-2xl"
                >
                  <MessageCircle size={28} className="fill-current" />
                  <span>Agende Pelo WhatsApp</span>
                </a>
                <p className="text-sm font-semibold tracking-widest text-premium-black/60 uppercase">
                  Vagas semanais limitadas para excelência.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white pt-24 pb-12 px-6 border-t border-nude-soft">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-serif font-bold mb-4">[Dra. Marcela Castro]</h3>
              <p className="text-gray-400 max-w-xs">Especialista em Odontologia e Harmonização Facial de alto padrão.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Links Rápidos</h4>
                <div className="flex flex-col space-y-3">
                  <a href="#sobre" className="text-sm hover:text-gold transition-colors">A Expert</a>
                  <a href="#servicos" className="text-sm hover:text-gold transition-colors">Serviços</a>
                  <a href="#contato" className="text-sm hover:text-gold transition-colors">Agendamento</a>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">Localização</h4>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-gold transition-colors">
                  <MapPin size={16} className="text-gold" />
                  <span>Tatuapé - São Paulo, SP</span>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-nude-soft rounded-full flex items-center justify-center text-premium-black hover:bg-gold hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} className="w-12 h-12 bg-nude-soft rounded-full flex items-center justify-center text-premium-black hover:bg-gold hover:text-white transition-all transform hover:-translate-y-1">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-nude-soft flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">
            <p>Dra. Marcela Castro © 2026 | Todos os direitos reservados</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-premium-black transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-premium-black transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top / Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={32} className="fill-current" />
      </a>
    </div>
  );
}
