import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Mail, 
  Send, 
  Linkedin, 
  Github,
  ChevronRight,
  Zap,
  ShieldCheck,
  Users,
  ExternalLink,
  TrendingUp,
  BarChart3,
  Workflow,
  Cpu
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react'; // РАСКОММЕНТИРОВАТЬ ЭТУ СТРОКУ ПЕРЕД ДЕПЛОЕМ

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ОПТИМИЗАЦИЯ ДЛЯ МОБИЛЬНЫХ И SEO
  useLayoutEffect(() => {
    // 1. Принудительно ставим темный фон для body и html
    document.documentElement.style.backgroundColor = '#020617';
    document.body.style.backgroundColor = '#020617';
    
    // 2. SEO: Установка Title и Description (ОБНОВЛЕНО)
    document.title = "Новый Код | Разработка сайтов и мобильных приложений";
    
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Профессиональная разработка веб-сайтов, мобильных приложений и автоматизация бизнес-процессов (n8n, OpenClaw). Комплексные IT-решения для вашего бизнеса.";

    // 3. Красим адресную строку Safari/Chrome в цвет сайта
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = "#020617";
    
  }, []);

  // Handle scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Global Style Hack to prevent white flash before React loads css */}
      <style>{`
        html, body { background-color: #020617 !important; }
        /* Optimization for iOS scrolling */
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">New<span className="text-blue-500">Code</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-blue-400 transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('automation')} className="text-sm font-medium hover:text-blue-400 transition-colors">Автоматизация</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-blue-400 transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-blue-400 transition-colors">Процесс</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              >
                Обсудить проект
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Услуги</button>
              <button onClick={() => scrollToSection('automation')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Автоматизация</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Портфолио</button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Процесс</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-3 text-base font-medium text-blue-400 hover:bg-slate-800 rounded-md">Связаться с нами</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients - OPTIMIZED FOR MOBILE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[120px] -z-10 opacity-50 pointer-events-none transform-gpu will-change-transform"></div>
        <div className="absolute bottom-0 right-0 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[80px] sm:blur-[100px] -z-10 pointer-events-none transform-gpu will-change-transform"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Готовы к новым проектам</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Разрабатываем сложные <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">IT-решения для бизнеса</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            Полный цикл разработки: от MVP до Enterprise-систем. Мы превращаем ваши идеи в надежный код, масштабируемую архитектуру и реальную прибыль.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2"
            >
              Рассчитать проект
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 rounded-xl text-lg font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center"
            >
              Наши работы
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-20 pt-10 border-t border-slate-800/50">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-semibold">Мы используем современный стек</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['React', 'Node.js', 'Python', 'Flutter', 'PostgreSQL', 'AWS'].map((tech) => (
                <span key={tech} className="text-xl font-bold text-slate-400 hover:text-white transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Скорость разработки"
              desc="Запуск MVP за 4-8 недель. Быстрый старт позволяет проверить гипотезы и начать зарабатывать раньше."
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-8 h-8 text-green-400" />}
              title="Качество кода"
              desc="Строгий TypeScript, тесты, Code Review и CI/CD пайплайны. Мы пишем код, который легко поддерживать и масштабировать."
            />
            <BenefitCard 
              icon={<Users className="w-8 h-8 text-blue-400" />}
              title="Прозрачность"
              desc="Ежедневные отчеты, доступ к Jira/Trello, еженедельные демо. Вы всегда знаете статус проекта."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши компетенции</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Мы берем на себя все технические вопросы, чтобы вы могли сосредоточиться на развитии бизнеса.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe className="w-10 h-10 text-blue-500" />}
              title="Web Разработка"
              features={['Корпоративные порталы', 'SaaS решения', 'SPA & PWA', 'E-commerce платформы']}
            />
            <ServiceCard 
              icon={<Smartphone className="w-10 h-10 text-purple-500" />}
              title="Мобильная Разработка"
              features={['iOS & Android (Flutter/RN)', 'Публикация в сторах', 'Оптимизация производительности', 'Адаптивный UI/UX']}
            />
            <ServiceCard 
              icon={<Database className="w-10 h-10 text-emerald-500" />}
              title="Backend & DevOps"
              features={['Микросервисы', 'High-load архитектура', 'Облачные решения (AWS/GCP)', 'Настройка CI/CD']}
            />
            <ServiceCard 
              icon={<Code2 className="w-10 h-10 text-pink-500" />}
              title="Аутстаффинг"
              features={['Усиление вашей команды', 'Middle/Senior разработчики', 'Быстрый онбординг', 'Прозрачный трекинг часов']}
            />
             <ServiceCard 
              icon={<Users className="w-10 h-10 text-orange-500" />}
              title="IT Консалтинг"
              features={['Аудит архитектуры', 'Выбор тех. стека', 'Оценка сроков и бюджета', 'Техническое задание']}
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-10 h-10 text-cyan-500" />}
              title="Поддержка и QA"
              features={['Мониторинг 24/7', 'Ручное и авто-тестирование', 'Рефакторинг легаси', 'SLA гарантии']}
            />
          </div>
        </div>
      </section>

      {/* Automation Section (n8n & OpenClaw) - NEW */}
      <section id="automation" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-sm font-medium mb-4">
                <Workflow size={16} />
                Автоматизация & Low-code
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ускоряем бизнес с помощью <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">n8n и OpenClaw</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Мы не просто пишем код — мы оптимизируем процессы. Использование продвинутых инструментов автоматизации позволяет нам сократить time-to-market и стоимость интеграций.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-orange-500/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Workflow size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">n8n Оркестрация</h4>
                    <p className="text-sm text-slate-400">Построение сложных сценариев автоматизации, интеграция CRM, ERP и мессенджеров без раздувания бэкенда.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-purple-500/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">OpenClaw Integration</h4>
                    <p className="text-sm text-slate-400">Продвинутые решения для работы с данными. Гибкая настройка потоков информации и аналитика.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20 blur-[80px] rounded-full group-hover:blur-[100px] transition-all duration-700"></div>
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Workflow size={120} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     <div className="ml-auto text-xs font-mono text-slate-500">automation_workflow.json</div>
                  </div>

                  {/* Визуализация процесса n8n */}
                  <div className="flex flex-col gap-4 relative">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded bg-blue-600/20 flex items-center justify-center border border-blue-600/50">
                          <Globe size={20} className="text-blue-500" />
                       </div>
                       <div className="h-0.5 w-8 bg-slate-700"></div>
                       <div className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">Webhook Trigger</div>
                    </div>
                    
                    <div className="w-0.5 h-6 bg-slate-700 ml-5"></div>

                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded bg-orange-600/20 flex items-center justify-center border border-orange-600/50">
                          <Workflow size={20} className="text-orange-500" />
                       </div>
                       <div className="h-0.5 w-8 bg-slate-700"></div>
                       <div className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">Data Transformation</div>
                    </div>

                    <div className="w-0.5 h-6 bg-slate-700 ml-5"></div>
                    
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded bg-purple-600/20 flex items-center justify-center border border-purple-600/50">
                          <Cpu size={20} className="text-purple-500" />
                       </div>
                       <div className="h-0.5 w-8 bg-slate-700"></div>
                       <div className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">OpenClaw Processing</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-green-500 flex items-center gap-1"><CheckCircle2 size={12}/> Execution Success</span>
                    <span className="text-slate-500">230ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
              <Code2 size={16} />
              Кейсы
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Избранные проекты</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Реальные задачи, которые мы решили для наших клиентов.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Единая платформа Burger King"
              category="FoodTech / Enterprise"
              description="Единая цифровая платформа для мобильных приложений, киосков и доставки в нескольких регионах. Централизация заказов, меню и платежей."
              impact={['+15% объем заказов доставки', '-20% пищевых отходов', 'Ноль простоев в праздники']}
              tags={['High-load', 'Mobile', 'Kiosks']}
              color="text-orange-500"
            />
            <ProjectCard 
              title="Инфраструктура Lendflow"
              category="Fintech / SaaS"
              description="Встраиваемая платформа кредитования для SaaS. Мы ускорили разработку, чтобы помочь быстрее подключать новых финансовых партнеров."
              impact={['-30% время интеграции', '40% улучшение надежности', 'Масштабируемая архитектура']}
              tags={['Fintech', 'SaaS', 'API']}
              color="text-blue-500"
            />
            <ProjectCard 
              title="AI Инвентаризация Dodo Pizza"
              category="Retail / AI"
              description="Система инвентаризации на базе ИИ для прогнозирования спроса в реальном времени и автоматизации пополнения запасов в сети франшиз."
              impact={['Точный прогноз спроса', 'Снижение дефицита', 'Автоматизация поставок']}
              tags={['AI', 'Predictive Analytics', 'Retail']}
              color="text-amber-500"
            />
            <ProjectCard 
              title="Система обнаружения фрода"
              category="Security / AI"
              description="Облачная платформа для обнаружения мошенничества для европейского кредитного агрегатора. Анализ заявок в реальном времени с помощью ML."
              impact={['Снижение мошенничества на 35%', 'Ускорение одобрения', 'Мониторинг 24/7']}
              tags={['Machine Learning', 'Security', 'Cloud']}
              color="text-emerald-500"
            />
             <ProjectCard 
              title="Портал пациентов HealthMatch"
              category="Healthcare / HIPAA"
              description="Защищенный портал для записи на прием и телемедицины. Полное соответствие требованиям HIPAA и GDPR."
              impact={['Шифрование данных', 'Интеграция телемедицины', 'Доступ 24/7']}
              tags={['Healthcare', 'React Native', 'WebRTC']}
              color="text-red-500"
            />
            <ProjectCard 
              title="Управление логистическим флотом"
              category="Logistics / IoT"
              description="Дашборд для трекинга автопарка в реальном времени с интеграцией IoT-датчиков для контроля температуры и оптимизации маршрутов."
              impact={['-15% расходы на топливо', 'Трекинг грузов', 'Аналитика водителей']}
              tags={['IoT', 'Google Maps API', 'Big Data']}
              color="text-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Как мы работаем</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Мы работаем по методологии Agile/Scrum. Это позволяет гибко реагировать на изменения рынка и требований в процессе разработки, сохраняя контроль над бюджетом.
              </p>
              
              <div className="space-y-6">
                <ProcessStep number="01" title="Аналитика и оценка" desc="Погружаемся в бизнес-задачи, составляем техническое задание и смету." />
                <ProcessStep number="02" title="Дизайн и прототипирование" desc="Создаем UI/UX макеты, утверждаем логику работы интерфейса." />
                <ProcessStep number="03" title="Разработка спринтами" desc="Пишем код итерациями по 2 недели. В конце каждого спринта — демо результата." />
                <ProcessStep number="04" title="Релиз и поддержка" desc="Помогаем с запуском, мониторим работу, развиваем функционал." />
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>
               <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                 <div className="space-y-6">
                   <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <span className="text-xs text-slate-500">project_dashboard.tsx</span>
                   </div>
                   
                   <div className="space-y-4">
                     <div className="h-2 w-1/3 bg-slate-800 rounded"></div>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="h-24 bg-slate-800/50 rounded border border-slate-800 p-4">
                         <div className="h-2 w-8 bg-blue-500/50 rounded mb-2"></div>
                         <div className="h-8 w-16 bg-slate-700 rounded"></div>
                       </div>
                       <div className="h-24 bg-slate-800/50 rounded border border-slate-800 p-4">
                         <div className="h-2 w-8 bg-purple-500/50 rounded mb-2"></div>
                         <div className="h-8 w-16 bg-slate-700 rounded"></div>
                       </div>
                     </div>
                     <div className="h-32 bg-slate-800/30 rounded border border-slate-800 flex items-center justify-center text-slate-600 text-sm">
                       Architecture Diagram Preview
                     </div>
                   </div>
                   
                   <div className="pt-4 flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-[10px]">Dev</div>
                        ))}
                      </div>
                      <span className="text-xs text-green-400 font-mono">Build Passing</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Готовы обсудить проект?</h2>
              <p className="text-slate-400">Оставьте заявку, и мы свяжемся с вами в течение рабочего дня для бесплатной консультации и оценки.</p>
            </div>

            <ContactForm />
            
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-slate-400">
              <a href="mailto:v.kozlov@pangolindev.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                v.kozlov@pangolindev.com
              </a>
              <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                NDA по запросу
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="text-blue-600 w-5 h-5" />
                <span className="font-bold text-xl text-white">NewCode</span>
              </div>
              <p className="text-slate-500 text-sm">Профессиональная веб и мобильная разработка.</p>
            </div>
            
            <div className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} NewCode. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

// Helper Components

function ProjectCard({ title, category, description, impact, tags, color }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all hover:shadow-xl group flex flex-col">
      <div className="p-8 flex-1">
        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${color}`}>{category}</div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6">{description}</p>
        
        <div className="mb-6 space-y-2">
          {impact.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
              <TrendingUp size={16} className={`mt-0.5 ${color}`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-slate-950/50 p-6 border-t border-slate-800">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all hover:shadow-lg group">
      <div className="mb-6 bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function ServiceCard({ icon, title, features }) {
  return (
    <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:bg-slate-900 transition-colors group">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-400">
            <CheckCircle2 className="w-5 h-5 text-blue-500/50 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-6 border-t border-slate-800/50 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
        Подробнее <ChevronRight size={16} />
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 font-bold border border-slate-700">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/mdalkqan', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          console.error(data.errors.map(error => error.message).join(", "));
        }
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Сообщение отправлено!</h3>
        <p className="text-slate-400">Спасибо за заявку. Мы свяжемся с вами по адресу {formState.email || 'email'} в ближайшее время.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-slate-500 hover:text-white underline"
        >
          Отправить еще одно сообщение
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Ваше Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="Иван Петров"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="ivan@company.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">О проекте</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          placeholder="Нам нужно разработать мобильное приложение для..."
        ></textarea>
      </div>

      {status === 'error' && (
         <div className="text-red-500 text-sm text-center">
            Упс! Возникла проблема при отправке формы. Пожалуйста, попробуйте позже.
         </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/25 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Отправка...
          </>
        ) : (
          <>
            Отправить заявку
            <Send size={18} />
          </>
        )}
      </button>
      
      <p className="text-center text-xs text-slate-500">
        Нажимая кнопку, вы соглашаетесь с нашей Политикой Конфиденциальности.
      </p>
    </form>
  );
}
