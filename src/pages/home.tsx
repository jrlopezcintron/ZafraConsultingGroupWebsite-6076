import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FadeInSection = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 shadow-sm' : 'bg-[#1a4d3a]'
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.jpg" 
                alt="Zafra Consulting Group Logo" 
                className="h-14 w-14 object-contain rounded-md"
              />
              <div className="flex flex-col">
                <span className={`text-2xl font-semibold tracking-[0.15em] ${isScrolled ? 'text-[#1a4d3a]' : 'text-white'}`}>
                  ZAFRA
                </span>
                <span className={`text-xs tracking-[0.1em] ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
                  Consulting Group
                </span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-[#d4a574]' : 'text-white hover:text-[#d4a574]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-[#d4a574]' : 'text-white hover:text-[#d4a574]'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('principles')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-[#d4a574]' : 'text-white hover:text-[#d4a574]'
                }`}
              >
                Principles
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-[#d4a574]' : 'text-white hover:text-[#d4a574]'
                }`}
              >
                Contact
              </button>
            </nav>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-[73px] right-0 bottom-0 left-0 z-40 bg-white md:hidden"
        >
          <nav className="flex flex-col p-6 space-y-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-lg font-medium text-foreground hover:text-[#d4a574] transition-colors py-3 border-b border-border"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-lg font-medium text-foreground hover:text-[#d4a574] transition-colors py-3 border-b border-border"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('principles')}
              className="text-left text-lg font-medium text-foreground hover:text-[#d4a574] transition-colors py-3 border-b border-border"
            >
              Principles
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-lg font-medium text-foreground hover:text-[#d4a574] transition-colors py-3 border-b border-border"
            >
              Contact
            </button>
          </nav>
        </motion.div>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-[#1a4d3a]/85"></div>
      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Strategic. Scientific. Scalable.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            Shaping a healthier global food system by enabling bold, commercially sound moves—grounded
            in science, driven by strategy, built to scale.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#1a4d3a] hover:bg-[#d4a574] hover:text-white text-base px-10 py-6 rounded-md font-medium shadow-lg transition-all"
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
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20 text-center">
            Built for Impact
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 max-w-7xl mx-auto items-center">
          <FadeInSection delay={0.1} className="md:col-span-5">
            <div className="relative">
              <img
                src="/about-visual.png"
                alt="Zafra Consulting - Food and Nutrition Strategy"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </FadeInSection>

          <div className="md:col-span-7 space-y-12">
            <FadeInSection delay={0.2}>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
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

            <FadeInSection delay={0.3}>
              <div className="relative bg-[#1a4d3a] text-white p-10 md:p-12 rounded-md overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                  style={{ backgroundImage: 'url(/agriculture-bg.png)' }}
                />
                <div className="absolute inset-0 bg-[#1a4d3a]/60"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
                  <p className="text-base md:text-lg leading-relaxed opacity-95 mb-4">
                    Meaningful impact in the food industry requires more than insight. It requires precision,
                    credibility, and a deep understanding of how business decisions get made—and executed.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed opacity-95">
                    With a focus on commercially relevant strategy, science-backed innovation, and real-world
                    execution, Zafra serves as a strategic partner for organizations ready to lead, not
                    follow.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
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
    },
    {
      title: 'Innovation Acceleration',
      description:
        'Science-backed innovation agendas that translate emerging research into commercial opportunities. From functional nutrition to novel ingredients, we bridge the gap between lab and market.',
    },
    {
      title: 'Growth Execution',
      description:
        'Implementation-ready deliverables designed for action, not admiration. Our work integrates seamlessly with your business timelines and supports both capability building and measurable outcomes.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20 text-center">
            How We Work
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)}>
              <div className="h-full bg-white border border-border rounded-md p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{service.description}</p>
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
      number: '01',
      title: 'No RFPs. No Pitches. No Theatrics.',
      description: 'Engagements begin with decisions, not dance routines.',
    },
    {
      number: '02',
      title: 'Strategy That Ships',
      description: 'Output is designed to be used, not admired.',
    },
    {
      number: '03',
      title: 'Zero Patience for Fluff',
      description: 'Work is judged on impact, not slides.',
    },
    {
      number: '04',
      title: 'Built for the Real World',
      description: 'We balance short-term gains with long-term resilience.',
    },
    {
      number: '05',
      title: 'Time is Finite',
      description: 'No work during year-end, early January, or holidays.',
    },
    {
      number: '06',
      title: 'USD Only',
      description: 'Simple terms. Global standard.',
    },
  ];

  return (
    <section id="principles" className="py-24 md:py-32 bg-[#1a4d3a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">
            Business Principles
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <FadeInSection key={index} delay={0.05 * (index + 1)}>
              <div className="flex gap-6">
                <div className="text-6xl font-bold text-[#d4a574] opacity-40 leading-none">
                  {principle.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-xl mb-2 text-white">{principle.title}</h3>
                  <p className="text-white/80 leading-relaxed">{principle.description}</p>
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
    <section id="contact" className="py-32 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10 text-center">
            Ready to Lead?
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center mb-16 text-muted-foreground">
            We work exclusively with senior decision-makers at multinationals, mid-sized firms, and
            high-potential startups who value sharp thinking, fast execution, and honest advice.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="max-w-2xl mx-auto bg-[#1a4d3a] text-white rounded-md p-12 md:p-16">
            <h3 className="text-3xl font-bold mb-6">Let's Talk Strategy</h3>
            <p className="text-lg leading-relaxed mb-10 opacity-95">
              Global scope, excluding restricted markets. All engagements in USD. Direct access to
              experienced operators—not traditional consultants.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1a4d3a] hover:bg-[#d4a574] hover:text-white text-base px-10 py-6 rounded-md font-medium w-full md:w-auto transition-all"
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
    <footer className="bg-[#1a4d3a] text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/70 text-sm">© 2025 Zafra Consulting Group. All rights reserved.</p>
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
