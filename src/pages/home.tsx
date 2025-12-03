import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GeometricPattern = ({ className = '' }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    <div className="absolute top-0 left-[10%] w-32 h-1 bg-[#6b8e3d] opacity-60 rotate-[30deg]"></div>
    <div className="absolute top-[15%] right-[20%] w-24 h-1 bg-[#d4a574] opacity-60 rotate-[-30deg]"></div>
    <div className="absolute top-[40%] left-[5%] w-40 h-1 bg-[#1a4d3a] opacity-40 rotate-[45deg]"></div>
    <div className="absolute bottom-[30%] right-[10%] w-36 h-1 bg-[#8bb55c] opacity-50 rotate-[-45deg]"></div>
    <div className="absolute bottom-[10%] left-[25%] w-28 h-1 bg-[#d4a574] opacity-60 rotate-[20deg]"></div>
    <div className="absolute top-[60%] right-[30%] w-32 h-1 bg-[#6b8e3d] opacity-40 rotate-[-20deg]"></div>
  </div>
);

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Zafra Logo" className="h-12 w-12 rounded-md object-cover" />
            <span className="text-2xl font-bold text-[#1a4d3a]">ZAFRA</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-[#1a4d3a] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-[#1a4d3a] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('principles')}
              className="text-foreground hover:text-[#1a4d3a] transition-colors font-medium"
            >
              Principles
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-[#1a4d3a] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a4d3a] via-[#1a4d3a] to-[#2a5d4a]">
      <GeometricPattern />
      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Strategic. Scientific. Scalable.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed serif">
            Shaping a healthier global food system by enabling bold, commercially sound moves—grounded
            in science, driven by strategy, built to scale.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#1a4d3a] hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Start the Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Built for Impact
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <FadeInSection delay={0.1}>
            <div className="space-y-6 serif text-lg leading-relaxed">
              <p>
                Every category is getting disrupted—by changing science, shifting demand, and investor
                pressure. Winners won't be the loudest or the biggest. They'll be the ones making
                clear-eyed bets, building capabilities, and executing fast.
              </p>
              <p>
                Zafra exists for those companies. We partner with food and nutrition businesses to
                strengthen commercial strategy, accelerate innovation, and drive sustainable, long-term
                growth.
              </p>
              <p className="font-semibold text-[#1a4d3a]">
                We operate with a bias for action, skepticism of noise, and zero tolerance for strategic
                theater.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-[#1a4d3a] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
              <p className="serif text-lg leading-relaxed opacity-95">
                Meaningful impact in the food industry requires more than insight. It requires precision,
                credibility, and a deep understanding of how business decisions get made—and executed.
              </p>
              <p className="serif text-lg leading-relaxed opacity-95 mt-4">
                With a focus on commercially relevant strategy, science-backed innovation, and real-world
                execution, Zafra serves as a strategic partner for organizations ready to lead, not
                follow.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Commercial Strategy',
      description:
        'Clear-eyed market analysis, competitive positioning, and growth strategies that balance short-term wins with long-term resilience. We help you make the right bets in rapidly evolving markets.',
      color: '#1a4d3a',
    },
    {
      title: 'Innovation Acceleration',
      description:
        'Science-backed innovation agendas that translate emerging research into commercial opportunities. From functional nutrition to novel ingredients, we bridge the gap between lab and market.',
      color: '#6b8e3d',
    },
    {
      title: 'Growth Execution',
      description:
        'Implementation-ready deliverables designed for action, not admiration. Our work integrates seamlessly with your business timelines and supports both capability building and measurable outcomes.',
      color: '#8bb55c',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            How We Work
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)}>
              <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div
                  className="w-12 h-1 mb-6 rounded-full"
                  style={{ backgroundColor: service.color }}
                ></div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-[#1a4d3a] transition-colors">
                  {service.title}
                </h3>
                <p className="serif text-lg leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Principles = () => {
  const principles = [
    {
      title: 'No RFPs. No Pitches. No Theatrics.',
      description: 'Engagements begin with decisions, not dance routines.',
    },
    {
      title: 'Strategy That Ships',
      description: 'Output is designed to be used, not admired.',
    },
    {
      title: 'Zero Patience for Fluff',
      description: 'Work is judged on impact, not slides.',
    },
    {
      title: 'Built for the Real World',
      description: 'We balance short-term gains with long-term resilience.',
    },
    {
      title: 'Time is Finite',
      description: 'No work during year-end, early January, or holidays.',
    },
    {
      title: 'USD Only',
      description: 'Simple terms. Global standard.',
    },
  ];

  return (
    <section id="principles" className="py-24 bg-background relative overflow-hidden">
      <GeometricPattern className="opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Business Principles
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <FadeInSection key={index} delay={0.05 * (index + 1)}>
              <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#6b8e3d] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{principle.title}</h3>
                    <p className="text-muted-foreground serif leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Ready to Lead?
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <p className="text-xl serif leading-relaxed max-w-3xl mx-auto text-center mb-12 text-muted-foreground">
            We work exclusively with senior decision-makers at multinationals, mid-sized firms, and
            high-potential startups who value sharp thinking, fast execution, and honest advice.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#1a4d3a] to-[#2a5d4a] text-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Let's Talk Strategy</h3>
            <p className="serif text-lg leading-relaxed mb-8 opacity-95">
              Global scope, excluding restricted markets. All engagements in USD. Direct access to
              experienced operators—not traditional consultants.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1a4d3a] hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold w-full md:w-auto"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a4d3a] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/80">© 2025 Zafra Consulting Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Principles />
      <Contact />
      <Footer />
    </div>
  );
}
