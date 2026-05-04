/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, Star, Users, ArrowRight, Zap, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CTAButton = ({ className = "", showIcon = true }: { className?: string, showIcon?: boolean }) => {
  const handleClick = () => {
    // @ts-ignore
    if (typeof fbq !== 'undefined') {
      // @ts-ignore
      fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <motion.a
      href="https://pay.hotmart.com/N105390694J?off=9lexojyd&checkoutMode=10"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-[#ff7e00] hover:bg-[#ff8e1a] text-white font-black py-4 px-6 rounded-2xl shadow-[0_10px_20px_-5px_rgba(255,126,0,0.4)] transition-all text-lg md:text-xl flex items-center justify-center gap-2 w-full md:w-auto cursor-pointer border-b-4 border-[#cc6500] active:border-b-0 active:translate-y-1 no-underline ${className}`}
    >
      ¡ACCEDER AHORA POR $9.90!
      {showIcon && <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />}
    </motion.a>
  );
};

export default function App() {
  const [isStickyVisible, setIsStickyVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden pb-24 md:pb-0">
      {/* Botón Sticky Animado para Mobile */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
          >
            <CTAButton className="!text-sm py-4 shadow-2xl" showIcon={true} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="bg-white relative overflow-hidden pt-10 pb-16 md:py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-50/50 rounded-[100%] blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-2"
          >
            Método Natural Paso a Paso
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px] md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Vuelve a sentirte <span className="text-green-600 italic">increíble</span> con este secreto natural
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            El Protocolo Natural 7D es la guía definitiva para quienes buscan reducir medidas y mejorar su salud sin restricciones extremas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-4 space-y-10"
          >
            <div className="relative inline-block px-2">
              <img 
                src="https://i.ibb.co/2YSVZ0Jg/APP.jpg" 
                alt="Protocolo Natural 7D" 
                className="rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] w-full max-w-[300px] md:max-w-[420px] h-auto mx-auto border-[6px] border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-orange-500 text-white p-3 md:p-5 rounded-3xl shadow-xl transform rotate-6 border-4 border-white flex flex-col items-center">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-tighter opacity-80">Solo Hoy</p>
                <p className="text-xl md:text-3xl font-black leading-none">$9.90</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-tighter opacity-80">USD</p>
              </div>
            </div>
            
            <div className="flex justify-center px-4">
              <CTAButton />
            </div>

            <div className="flex flex-col items-center gap-3 pt-6">
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Compra 100% Segura</span>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-tighter">🔒 Acceso inmediato garantizado</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Pain Points */}
      <section className="py-16 md:py-24 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-black mb-6 px-4">¿Te sientes atrapado en el mismo ciclo?</h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              "Sensación de hinchazón constante después de las comidas.",
              "Falta de energía para completar tus tareas diarias.",
              "Frustración al probar ropa que antes te quedaba perfecta.",
              "Dificultad para seguir planes complicados de alimentación."
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4"
              >
                <div className="bg-orange-50 p-2.5 rounded-xl shrink-0">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                </div>
                <p className="text-slate-700 leading-relaxed font-semibold text-base md:text-lg">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20 md:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-3xl md:text-6xl font-black leading-[1.1]">Es hora de simplificar tu <span className="text-green-600">éxito</span></h2>
          <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
            El <span className="text-slate-900 font-bold">Protocolo Natural 7D</span> rompe con las complicaciones. Te revela cómo optimizar tu nutrición usando lo que ya tienes en casa. Sin polvos mágicos, sin suplementos costosos. Solo ciencia aplicada de forma natural.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-slate-400 font-bold tracking-widest text-xs md:text-sm uppercase">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 100% Digital</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Acceso de por vida</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Soporte incluido</div>
          </div>
        </div>
      </section>

      {/* Transformation Result Section */}
      <section className="py-12 md:py-20 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-black uppercase mb-2 animate-pulse">
            CASO REAL DE TRANSFORMACIÓN
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
            ¿Qué sucede cuando aplicas el <span className="text-green-600">Protocolo adecuado?</span>
          </h2>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full scale-90 group-hover:scale-100 transition-transform"></div>
            <img 
              src="https://i.ibb.co/b5LxvMfk/Whats-App-Image-2026-05-04-at-15-11-12.jpg" 
              alt="Caso de éxito antes y después" 
              className="relative rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-[600px] mx-auto border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-slate-500 italic text-sm md:text-base font-medium">
            *Los resultados pueden variar según cada organismo, pero el compromiso con el método es la clave.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <h3 className="text-2xl md:text-5xl font-black leading-tight">Transforma tu cuerpo, <span className="text-green-600">paso a paso</span></h3>
            <div className="grid gap-6">
              {[
                { title: "Metabolismo activo", desc: "Aprende a despertar tu cuerpo de forma natural cada mañana." },
                { title: "Adiós a la ansiedad", desc: "Técnicas probadas para reducir el hambre emocional de inmediato." },
                { title: "Ropa que te encanta", desc: "Vuelve a usar tus prendas favoritas con mayor confianza." },
                { title: "Energía sin límites", desc: "Mejora tu descanso y nivel de vitalidad durante todo el día." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 md:p-6 rounded-[2rem] border border-slate-100 bg-slate-50/50">
                  <div className="bg-green-500 p-2 md:p-3 rounded-2xl h-fit">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-lg md:text-xl text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 bg-slate-900 text-white p-8 md:p-16 rounded-[3rem] shadow-3xl space-y-8 md:space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-3xl rounded-full"></div>
            <h3 className="text-2xl md:text-4xl font-black">Tu nueva vida incluye:</h3>
            <ul className="space-y-6">
              {[
                "La Guía Maestra 'Protocolo 7D'",
                "Lista de compras inteligente y económica",
                "Calendario de implementación diaria",
                "Recetario de bebidas naturales",
                "Acceso al área de alumnos privada"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300 font-bold text-base md:text-lg">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 shrink-0 mt-1" />
                  {text}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>)}
              </div>
              <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest">+1,200 Alumnos inscritos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 md:py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Resultados Reales</h2>
            <p className="text-slate-500 font-bold text-lg">Inspiración de nuestra comunidad</p>
          </div>
          
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {[
              { name: "Sonia G.", text: "Lo mejor es que no paso hambre. El protocolo es tan lógico que te preguntas por qué no lo hiciste antes." },
              { name: "Miguel A.", text: "Como profesional ocupado, necesitaba algo rápido. He recuperado mi energía y mis niveles están mejor que nunca." },
              { name: "Isabel V.", text: "Me sorprendió la calidad de la guía por el precio. He perdido la hinchazón abdominal en solo 4 días." },
              { name: "Roberto L.", text: "Práctico, directo y sobre todo efectivo. Lo recomiendo a cualquiera que quiera un cambio de hábitos." }
            ].map((t, idx) => (
              <div key={idx} className="break-inside-avoid bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-5 item-start">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-700 leading-relaxed text-lg font-medium italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-black text-green-600">{t.name[0]}</div>
                  <p className="font-black text-slate-900">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-20 md:py-32 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black leading-none">¿Listo para el cambio?</h2>
          
          <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(34,197,94,0.15)]">
            <div className="space-y-4 mb-10 md:mb-14">
              <p className="text-slate-500 line-through text-2xl font-black opacity-50">VALOR REAL: $47 USD</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-7xl md:text-[10rem] font-black text-white leading-none tracking-tighter">$9.90</span>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-2xl font-black bg-green-500 text-slate-900 px-3 py-1 rounded-xl">USD</span>
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-widest text-left">Pago<br/>único</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <CTAButton className="scale-110 md:scale-125" />
              <div className="flex flex-col items-center gap-2 pt-4">
                <div className="flex items-center gap-2 text-green-400">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest">Pago Seguro & Encriptado</span>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest opacity-60 italic">Recibirás el acceso en tu email de inmediato</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/10008/10008064.png" 
            alt="Garantía de Satisfacción" 
            className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
          />
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-black">Prueba sin riesgos</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Tu satisfacción es nuestra prioridad. Accede al <span className="text-slate-900 font-black italic">Protocolo Natural 7D</span> hoy y si en los próximos 7 días no estás 100% convencido, solicita tu reembolso completo. Sin letras pequeñas, sin complicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6 border-t border-white/5 text-slate-500">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left text-[10px] md:text-xs leading-relaxed uppercase font-bold tracking-widest opacity-40">
            <div className="space-y-4">
              <p>LOS RESULTADOS PUEDEN VARIAR SEGÚN EL METABOLISMO DE CADA PERSONA. ESTE CONTENIDO NO REEMPLAZA LA CONSULTA CON UN PROFESIONAL DE LA SALUD.</p>
            </div>
            <div className="space-y-4">
              <p>ESTA PÁGINA NO ES PARTE DE FACEBOOK O META INC. NI ESTÁ RESPALDADA POR ELLOS DE NINGUNA MANERA.</p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-black text-xs uppercase tracking-[0.2em]">
            <p>&copy; 2024 Protocolo Natural 7D</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

