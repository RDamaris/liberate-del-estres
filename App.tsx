/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Moon, 
  Utensils, 
  Smartphone, 
  Heart, 
  Users, 
  ChevronDown,
  ChevronUp,
  BookOpen,
  Brain,
  Wrench,
  Activity,
  Scale,
  BarChart3,
  RefreshCw,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return { hours: 24, minutes: 0, seconds: 0 }; // Reset or stop
        }
        
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-[#10b981] text-white py-2 px-4 text-center font-bold text-sm md:text-base sticky top-0 z-50 shadow-md flex items-center justify-center gap-4">
      <span className="uppercase tracking-wider hidden sm:inline">Oferta especial termina en:</span>
      <div className="flex gap-2 items-center font-mono text-lg">
        <div className="bg-white/20 px-2 py-1 rounded">{format(timeLeft.hours)}h</div>
        <span>:</span>
        <div className="bg-white/20 px-2 py-1 rounded">{format(timeLeft.minutes)}m</div>
        <span>:</span>
        <div className="bg-white/20 px-2 py-1 rounded">{format(timeLeft.seconds)}s</div>
      </div>
    </div>
  );
};

const CTAButton = ({ className = "", children, onClick }: { className?: string, children: React.ReactNode, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`bg-[#10b981] hover:bg-[#059669] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 text-center uppercase tracking-wider text-sm md:text-base ${className}`}
  >
    {children}
  </button>
);

const SectionTitle = ({ children, light = false, className = "" }: { children: React.ReactNode, light?: boolean, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 text-center leading-tight ${light ? 'text-white' : 'text-slate-900'} ${className}`}>
    {children}
  </h2>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left font-bold text-slate-800 hover:text-[#1a3a4a] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 ml-2" /> : <ChevronDown className="flex-shrink-0 ml-2" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <CountdownTimer />
      {/* Hero Section */}
      <section className="relative bg-[#1a3a4a] text-white pt-20 pb-24 md:pt-32 md:pb-40 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
              ¿Cansado de vivir en modo supervivencia? Descubre cómo recuperar tu calma interior y despertar cada mañana con energía renovada, sin depender de soluciones complicadas ni pastillas
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Un sistema completo y práctico de estrategias basadas en ciencia que te guiará paso a paso para regular tu sistema nervioso, eliminar el agotamiento mental y construir una vida equilibrada que realmente puedas sostener... aunque ahora sientas que no tienes tiempo para ti mismo.
            </p>
            <CTAButton onClick={scrollToPricing}>
              Sí, quiero recuperar mi equilibrio ahora
            </CTAButton>
          </motion.div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#10b981] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Si estás leyendo esto, probablemente...</SectionTitle>
          <div className="space-y-8 mt-12">
            {[
              "Te despiertas cansado aunque hayas dormido 7 horas. La mente ya está acelerada antes de que suene la alarma.",
              "Durante el día, saltas de una tarea a otra sin realmente terminar ninguna. El celular no para de vibrar.",
              "Cuando finalmente llegas a casa, tu cuerpo pide descanso pero tu mente no puede apagarse."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <XCircle className="text-red-400 mt-1 mr-4 flex-shrink-0" size={24} />
                <p className="text-slate-700 text-lg">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-bold text-[#1a3a4a] mb-6">La verdad incómoda es que...</p>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "Estás viviendo en piloto automático, reaccionando constantemente, nunca realmente presente. Y lo peor es que empiezas a creer que 'así es la vida' y que no hay escapatoria."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {[
              "Mentalmente agotado",
              "Irritable con seres queridos",
              "Incapaz de concentrarte",
              "Constantemente preocupado",
              "Atrapado en el estrés"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-slate-100 p-4 rounded-xl">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 italic">¿Cuándo fue la última vez que te sentiste verdaderamente tranquilo?</h3>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            No hablo de estar viendo una serie mientras tu mente repasa la lista de pendientes. Hablo de esa sensación profunda de calma, donde tu cuerpo está relajado, tu mente está clara y sientes que realmente estás viviendo, no solo sobreviviendo.
          </p>
          
          <div className="bg-[#f0f9ff] p-8 md:p-12 rounded-3xl border border-blue-100 text-left">
            <p className="text-blue-900 font-bold mb-6 text-xl">La verdad que nadie te dice:</p>
            <p className="text-blue-800 leading-relaxed text-lg mb-8">
              Tu cuerpo no fue diseñado para vivir en estado de alerta constante. Cuando el estrés se vuelve crónico, tu sistema nervioso pierde la capacidad de regularse. Es como si el interruptor de "calma" se hubiera roto.
            </p>
            <p className="text-blue-900 font-extrabold text-xl">
              Y aquí viene lo esperanzador: ese interruptor se puede reparar.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Presentation */}
      <section className="py-24 px-6 bg-[#1a3a4a] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#10b981] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">Presentación de la solución</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Libérate del Estrés: Estrategias para recuperar tu equilibrio interior</h2>
            <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto">
              La caja de herramientas completa y práctica que te guiará paso a paso desde el caos mental hasta la calma sostenible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Activity className="text-[#10b981]" size={32} />, 
                title: "1. Regulación Corporal", 
                desc: "Aprenderás cómo tu cuerpo almacena el estrés y las técnicas específicas para liberarlo." 
              },
              { 
                icon: <Brain className="text-[#10b981]" size={32} />, 
                title: "2. Reprogramación Mental", 
                desc: "Descubrirás cómo establecer límites saludables, gestionar el agotamiento y recuperar tu enfoque." 
              },
              { 
                icon: <RefreshCw className="text-[#10b981]" size={32} />, 
                title: "3. Rutinas Sostenibles", 
                desc: "Construirás hábitos que previenen la recaída del estrés, creando un estilo de vida equilibrado." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-8 rounded-3xl border border-white/10">
            <img 
              src="https://picsum.photos/seed/author/200/200" 
              alt="Damaris Martínez" 
              className="w-24 h-24 rounded-full border-4 border-[#10b981] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="text-center md:text-left">
              <p className="text-lg italic text-slate-300 mb-2">"Este libro traduce conceptos científicos complejos en acciones simples que puedes implementar HOY MISMO."</p>
              <p className="font-bold text-white">— Damaris Martínez, Psicóloga Clínica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Al implementar las estrategias de este libro, experimentarás:</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { icon: <Zap />, title: "Regulación Natural", desc: "Pasarás del estado de 'lucha o huida' a un estado de calma funcional." },
              { icon: <BarChart3 />, title: "Energía Recuperada", desc: "Despertarás sintiéndote realmente descansado y con mente clara." },
              { icon: <Moon />, title: "Sueño Reparador", desc: "Técnicas exactas para optimizar tu descanso y eliminar el insomnio." },
              { icon: <ShieldCheck />, title: "Límites Saludables", desc: "Aprenderás a decir 'no' sin culpa y proteger tu paz mental." },
              { icon: <Heart />, title: "Paz Interior", desc: "Desactivarás los patrones mentales que mantienen tu ansiedad activa." },
              { icon: <Smartphone />, title: "Detox Digital", desc: "Romperás la adicción al celular que sobreestimula tu sistema." },
              { icon: <RefreshCw />, title: "Hábitos Sostenibles", desc: "Un estilo de vida que naturalmente previene el regreso del estrés." },
              { icon: <Sun />, title: "Presencia Real", desc: "Recuperarás la capacidad de sentir y estar presente en el ahora." },
              { icon: <Users />, title: "Mejores Relaciones", desc: "Dejarás de proyectar irritabilidad en las personas que amas." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow bg-slate-50/50"
              >
                <div className="text-[#10b981] mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-slate-800">{benefit.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle light>Dentro de "Libérate del Estrés" encontrarás:</SectionTitle>
          <div className="mt-16 space-y-6">
            {[
              { icon: <BookOpen />, text: "Un sistema completo de regulación del estrés estructurado en capítulos progresivos." },
              { icon: <Brain />, text: "Fundamentos científicos explicados de forma simple para que entiendas el POR QUÉ." },
              { icon: <Wrench />, text: "Ejercicios prácticos y aplicables inmediatamente sin equipos especiales." },
              { icon: <Moon />, text: "Protocolo completo de optimización del sueño para cada tipo de problema." },
              { icon: <Utensils />, text: "Guía de alimentación para la regulación emocional y reducción de ansiedad." },
              { icon: <Activity />, text: "Estrategias de movimiento inteligente para liberar tensión acumulada." },
              { icon: <Smartphone />, text: "Plan de detox digital sostenible para recuperar tu atención." },
              { icon: <Heart />, text: "Técnicas de regulación emocional en tiempo real para momentos de crisis." },
              { icon: <Scale />, text: "Sistema para establecer límites saludables con scripts y ejemplos concretos." }
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-[#10b981] flex-shrink-0">{feature.icon}</div>
                <p className="text-slate-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Phases */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>El sistema de 3 fases que transforma tu relación con el estrés:</SectionTitle>
          <div className="mt-20 relative">
            {/* Vertical Line for Mobile, Horizontal for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { 
                  phase: "FASE 1", 
                  title: "Comprensión y Evaluación", 
                  desc: "Entenderás exactamente qué le está pasando a tu cuerpo y mente. Identificarás tus desencadenantes principales.",
                  result: "Claridad total sobre tu situación actual."
                },
                { 
                  phase: "FASE 2", 
                  title: "Regulación Corporal", 
                  desc: "Implementarás las bases: sueño, alimentación, movimiento y desconexión digital estratégica.",
                  result: "Mayor energía y reducción de tensión física."
                },
                { 
                  phase: "FASE 3", 
                  title: "Reprogramación Mental", 
                  desc: "Técnicas de gestión emocional, límites y construcción de rutinas sostenibles personalizadas.",
                  result: "Equilibrio sostenible y paz natural."
                }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-[#1a3a4a] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold border-4 border-white shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="text-[#10b981] font-bold mb-2 tracking-widest text-sm">{step.phase}</h4>
                  <h5 className="text-xl font-extrabold mb-4 text-slate-800">{step.title}</h5>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{step.desc}</p>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Resultado:</p>
                    <p className="text-slate-800 font-medium text-sm">{step.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation (Before/After) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>La Transformación Real</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Before */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-red-500 mb-8 flex items-center">
                <XCircle className="mr-2" /> ANTES DE IMPLEMENTAR
              </h4>
              <ul className="space-y-4">
                {[
                  "Despiertas ya ansioso y acelerado",
                  "Sueño superficial y poco reparador",
                  "Revisas el celular compulsivamente",
                  "Irritabilidad con seres queridos",
                  "Mente en bucle constante",
                  "Vives en piloto automático"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-500 text-sm">
                    <span className="mr-2 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="bg-[#1a3a4a] p-8 rounded-3xl shadow-xl border border-[#1a3a4a] text-white transform md:scale-105">
              <h4 className="text-xl font-bold text-[#10b981] mb-8 flex items-center">
                <CheckCircle2 className="mr-2" /> DESPUÉS DE IMPLEMENTAR
              </h4>
              <ul className="space-y-4">
                {[
                  "Despiertas tranquilo y con energía",
                  "Sueño profundo y reparador",
                  "Control consciente de la tecnología",
                  "Paciencia y amor con los demás",
                  "Mente clara, enfocada y presente",
                  "Disfrutas los pequeños momentos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-200 text-sm font-medium">
                    <CheckCircle2 className="mr-2 mt-0.5 text-[#10b981] flex-shrink-0" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Lo que dicen quienes ya lo probaron</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { 
                name: "Ana Sofía Reyes", 
                age: "36 años", 
                role: "Gerente de Marketing", 
                text: "Recuperé mi capacidad de disfrutar la vida. Empecé con el protocolo de sueño y en 10 días ya dormía mejor que en años. Siento que volví a ser yo." 
              },
              { 
                name: "Roberto Fernández", 
                age: "42 años", 
                role: "Ingeniero de Software", 
                text: "Soy ingeniero, necesito cosas que tengan lógica. Este libro cumplió ambas. Las técnicas de regulación corporal me ayudaron a liberar tensión que ni sabía que tenía." 
              },
              { 
                name: "Laura Mendoza", 
                age: "29 años", 
                role: "Diseñadora Gráfica", 
                text: "Finalmente entiendo cómo funciona mi ansiedad. Me encantó que no minimiza el problema. Te enseña paso a paso qué hacer." 
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                <Star className="text-yellow-400 absolute top-8 right-8" size={20} fill="currentColor" />
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-slate-800">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.age}, {testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-[#1a3a4a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle light>Tu inversión hoy</SectionTitle>
          <div className="mt-12 bg-white text-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#10b981] text-white px-8 py-2 rounded-bl-3xl font-bold text-sm uppercase tracking-widest">
              Oferta de Lanzamiento
            </div>
            
            <p className="text-slate-500 uppercase tracking-widest font-bold text-sm mb-4">Inversión Única</p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-3xl font-bold text-slate-400 line-through mr-4">$49.00</span>
              <span className="text-6xl md:text-8xl font-black text-[#1a3a4a]">$8.99</span>
              <span className="text-xl font-bold text-slate-500 ml-2">USD</span>
            </div>

            <div className="space-y-4 mb-12 text-left max-w-md mx-auto">
              {[
                "Sistema completo de regulación del estrés",
                "Protocolos de sueño, alimentación y movimiento",
                "Técnicas de regulación en tiempo real",
                "Guía de límites saludables",
                "Acceso instantáneo de por vida"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-[#10b981] flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <CTAButton className="w-full md:w-auto px-12 py-6 text-xl">
              ¡Quiero mi copia ahora!
            </CTAButton>
            
            <div className="mt-8 flex items-center justify-center space-x-4 text-slate-400">
              <ShieldCheck size={20} />
              <span className="text-xs font-medium uppercase tracking-widest">Pago 100% Seguro y Encriptado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-50 p-10 md:p-16 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col md:flex-row items-center gap-12">
          <div className="w-40 h-40 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-inner border-4 border-[#10b981]">
            <ShieldCheck className="text-[#10b981]" size={80} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-4 uppercase tracking-tight">Garantía de Satisfacción Total - 7 Días</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Lee el libro. Implementa al menos 3 estrategias durante 7 días. Si no sientes una diferencia notable en tu nivel de estrés, calidad de sueño o claridad mental... simplemente envíame un correo y te devuelvo el 100% de tu dinero. Sin preguntas.
            </p>
            <p className="font-bold text-[#1a3a4a]">El riesgo es cero. El potencial de transformación es enorme.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Preguntas Frecuentes</SectionTitle>
          <div className="mt-12 space-y-2">
            <FAQItem 
              question="¿Este libro es para mí si nunca he leído sobre bienestar?" 
              answer="Absolutamente sí. Está diseñado específicamente para personas sin conocimientos previos. Todo se explica en lenguaje claro, sin jerga técnica innecesaria."
            />
            <FAQItem 
              question="¿Cuánto tiempo necesito dedicarle cada día?" 
              answer="No necesitas horas libres. Puedes empezar con solo 10-15 minutos diarios. Las estrategias están diseñadas para integrarse en tu rutina actual."
            />
            <FAQItem 
              question="¿Esto reemplaza la terapia psicológica?" 
              answer="No. Es una herramienta de autocuidado para el manejo del estrés cotidiano. Si experimentas condiciones severas, busca ayuda profesional. Muchas personas lo usan como complemento a su terapia."
            />
            <FAQItem 
              question="¿Qué formato tiene el libro?" 
              answer="Es un ebook en formato digital PDF que recibes inmediatamente después de tu compra por correo electrónico."
            />
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://picsum.photos/seed/damaris/600/600" 
                alt="Damaris Martínez" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[#10b981] font-bold uppercase tracking-widest text-sm mb-2 block">Sobre la creadora</span>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Damaris Martínez</h3>
              <p className="text-slate-700 font-bold mb-4">Psicóloga Clínica</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Especializada en acompañar a personas que enfrentan estrés crónico y agotamiento mental. Su enfoque integra rigurosidad científica con aplicabilidad práctica, traduciendo conceptos complejos en estrategias claras y accesibles.
              </p>
              <div className="flex flex-wrap gap-4">
                {["+10 años de experiencia", "Enfoque basado en evidencia", "Sostenibilidad real"].map((tag, i) => (
                  <span key={i} className="bg-white px-4 py-2 rounded-full text-xs font-bold text-slate-500 border border-slate-200 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#1a3a4a] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">¿Estás listo para liberarte del estrés?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
            La vida que quieres vivir - tranquila, equilibrada, con energía y claridad - está a un clic de distancia. Tú decides si hoy es el día en que todo cambia.
          </p>
          <CTAButton onClick={scrollToPricing} className="px-16 py-8 text-2xl">
            Sí, quiero mi copia ahora
          </CTAButton>
          <p className="mt-8 text-slate-400 text-sm italic">"El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora."</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-500 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm mb-4">© 2026 Libérate del Estrés. Todos los derechos reservados.</p>
          <p className="text-xs max-w-2xl mx-auto leading-relaxed">
            Este producto no garantiza resultados específicos. Los testimonios representan experiencias individuales y pueden variar. Este material no sustituye el consejo médico o psicológico profesional.
          </p>
        </div>
      </footer>
    </div>
  );
}
