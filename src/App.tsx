import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CalendarClock, Menu, MessageCircleMore, ShieldCheck, Sparkles, X } from 'lucide-react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import logo from './assets/logo.svg'
import featurePanel from './assets/images/features-panel.svg'
import bannerConversion from './assets/images/banner-conversion.svg'
import bannerWhatsapp from './assets/images/banner-whatsapp.svg'
import bannerOperations from './assets/images/banner-operations.svg'

const steps = [
  {
    title: 'Cliente chama no WhatsApp',
    text: 'Ele escreve como já escreve hoje: “tem horário amanhã à tarde?”.',
    icon: MessageCircleMore,
  },
  {
    title: 'IA entende a intenção',
    text: 'O SmartAgenda interpreta serviço, horário e preferências em linguagem natural.',
    icon: Sparkles,
  },
  {
    title: 'Agenda valida em tempo real',
    text: 'Slots disponíveis são oferecidos sem risco de choque entre profissionais.',
    icon: ShieldCheck,
  },
  {
    title: 'Confirmação instantânea',
    text: 'Cliente recebe confirmação no chat e sua agenda fica atualizada automaticamente.',
    icon: CalendarClock,
  },
]

const features = [
  'Configuração de serviços, duração e equipe',
  'Bloqueio automático de conflitos de agenda',
  'Reagendamento e cancelamento via WhatsApp',
  'Painel web simples para gestão diária',
  'Experiência pensada para baixa maturidade digital',
]

const banners = [
  { src: bannerConversion, alt: 'Banner de conversão de leads para agendamentos' },
  { src: bannerWhatsapp, alt: 'Banner sobre agendamento via WhatsApp' },
  { src: bannerOperations, alt: 'Banner sobre organização operacional do salão' },
]

const geometricSample = {
  src: '/images/hero_square.png',
  alt: 'Barbeiro segurando celular com conversa do SmartAgenda no WhatsApp',
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)

    const timer = window.setInterval(() => {
      emblaApi.scrollNext()
    }, 5500)

    return () => {
      window.clearInterval(timer)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none fixed -left-24 top-36 -z-10 h-56 w-56 rotate-12 rounded-[2.5rem] bg-radial from-[#25d36655] via-[#25d3661a] to-transparent" />
      <div aria-hidden className="pointer-events-none fixed -right-8 top-96 -z-10 h-40 w-40 rounded-[5rem] border-2 border-[#25d3662a]" />

      <header className="sticky top-0 z-30 border-b border-[#ddf0e3] bg-[#f5fff8de] backdrop-blur-sm">
        <div className="mx-auto flex min-h-18 w-[min(1160px,92vw)] items-center justify-between gap-2">
          <a href="#inicio" className="inline-flex items-center gap-2" aria-label="SmartAgenda início">
            <img src={logo} alt="Logo SmartAgenda" className="size-8 rounded-xl" />
            <span className="font-display text-[0.9rem] leading-[0.9] font-bold">
              <span className="block">Smart</span>
              <span className="block">Agenda</span>
            </span>
          </a>

          <nav
            id="main-nav"
            className={clsx(
              'hidden md:static md:flex md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none',
            )}
          >
            <a className="block py-2 text-sm font-semibold" href="#como-funciona" onClick={() => setMenuOpen(false)}>
              Como funciona
            </a>
            <a className="block py-2 text-sm font-semibold" href="#recursos" onClick={() => setMenuOpen(false)}>
              Recursos
            </a>
            <a className="block py-2 text-sm font-semibold" href="#segmentos" onClick={() => setMenuOpen(false)}>
              Segmentos
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a className="btn btn-primary px-3.5 py-2 text-[0.72rem] tracking-wide" href="#contato">
              TESTE GRÁTIS
            </a>

            <button
              className="inline-flex items-center justify-center rounded-xl border border-sa-line bg-white p-2 text-sa-ink md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Abrir menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="absolute top-full right-0 left-0 z-40 w-full border-t border-sa-line bg-white shadow-[0_18px_25px_rgba(17,32,26,0.08)] md:hidden"
            >
              <div className="mx-auto grid w-[min(1160px,92vw)] py-3">
                <a className="block py-3 text-base font-semibold" href="#como-funciona" onClick={() => setMenuOpen(false)}>
                  Como funciona
                </a>
                <a className="block py-3 text-base font-semibold" href="#recursos" onClick={() => setMenuOpen(false)}>
                  Recursos
                </a>
                <a className="block py-3 text-base font-semibold" href="#segmentos" onClick={() => setMenuOpen(false)}>
                  Segmentos
                </a>
                <a
                  className="mt-2 inline-flex w-fit rounded-full border border-sa-ink px-6 py-2 text-sm font-black tracking-wide"
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                >
                  JÁ SOU CLIENTE
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="inicio">
        <section className="section pt-6 md:pt-16">
          <div className="mx-auto grid w-[min(1160px,92vw)] items-center gap-8 md:grid-cols-[1.06fr_0.94fr] md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="eyebrow">WhatsApp-first para pequenos negócios</p>
              <h1 className="mt-4 max-w-[16ch] text-4xl leading-[1.08] font-extrabold tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl">
                Seu atendimento agenda sozinho. <span className="text-sa-brand-dark">Em segundos.</span>
              </h1>
              <p className="mt-4 max-w-[44ch] text-base text-sa-muted sm:text-lg">
                O SmartAgenda conversa com seus clientes no WhatsApp, entende o pedido e confirma horários automaticamente.
                Sem app para o cliente final e sem equipe presa no celular.
              </p>
            </motion.div>

            <motion.div
              id="demo"
              className="bg-transparent p-0"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <div className="mt-0 flex justify-center">
                <motion.div
                  className="hero-image relative w-full max-w-[370px] overflow-hidden rounded-3xl sm:max-w-[460px]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="aspect-square w-full">
                    <img
                      src={geometricSample.src}
                      alt={geometricSample.alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="mx-auto mt-1 grid w-[min(1160px,92vw)] grid-cols-2 gap-2 md:max-w-[520px]">
            <a href="#contato" className="btn btn-primary w-full py-2.5">TESTE GRÁTIS</a>
            <a href="#como-funciona" className="btn btn-secondary w-full py-2.5">Ver na prática</a>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <div className="mx-auto w-[min(1160px,92vw)]">
            <div className="max-w-[54ch] space-y-3">
              <p className="eyebrow">Fluxo simples</p>
              <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
                Do “oi” ao agendamento confirmado
              </h2>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="rounded-2xl border border-sa-line bg-white p-4"
                  >
                    <div className="mb-2 inline-flex rounded-xl bg-[#edfff4] p-2 text-sa-brand-dark">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-extrabold">{i + 1}. {step.title}</h3>
                    <p className="mt-2 text-sm text-sa-muted sm:text-base">{step.text}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section" id="recursos">
          <div className="mx-auto grid w-[min(1160px,92vw)] items-center gap-5 md:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="eyebrow">Recursos principais</p>
              <h2 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
                Plataforma completa para operação diária
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-sa-muted sm:text-base">
                {features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-sa-line bg-white shadow-[0_20px_40px_rgba(17,32,26,0.08)]">
              <img src={featurePanel} alt="Painel web do SmartAgenda com serviços e horários" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto w-[min(1160px,92vw)]">
            <div className="max-w-[54ch] space-y-3">
              <p className="eyebrow">Materiais visuais</p>
              <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
                Banners e peças de campanha (amostras)
              </h2>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-3xl border border-sa-line bg-white">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {banners.map((banner) => (
                    <div className="min-w-0 shrink-0 grow-0 basis-full" key={banner.alt}>
                      <img src={banner.src} alt={banner.alt} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="absolute top-1/2 left-2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-sa-line bg-white/90 text-xl"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Slide anterior"
              >
                ‹
              </button>
              <button
                className="absolute top-1/2 right-2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-sa-line bg-white/90 text-xl"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Próximo slide"
              >
                ›
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/75 px-2 py-1 backdrop-blur">
                {banners.map((banner, i) => (
                  <button
                    key={banner.alt}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={clsx('size-2.5 rounded-full transition', selectedIndex === i ? 'bg-sa-brand' : 'bg-[#b8d9c5]')}
                    aria-label={`Ir para slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contato">
          <div className="mx-auto grid w-[min(1160px,92vw)] gap-5 rounded-3xl border border-sa-line bg-linear-to-br from-white to-[#ebffef] p-4 shadow-[0_20px_40px_rgba(17,32,26,0.08)] md:grid-cols-[1.05fr_0.95fr] md:p-6">
            <div>
              <p className="eyebrow">Pronto para testar?</p>
              <h2 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
                Ganhe tempo e aumente seus agendamentos no WhatsApp.
              </h2>
              <p className="mt-3 max-w-[48ch] text-sa-muted">
                Fale com o time SmartAgenda e veja uma simulação para o seu negócio.
              </p>
            </div>

            <form className="grid gap-3" action="#" method="post">
              <label className="grid gap-1 text-sm font-bold">
                Nome
                <input className="rounded-xl border border-[#c9e3d4] bg-white px-3 py-2.5" type="text" placeholder="Seu nome" required />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                WhatsApp
                <input className="rounded-xl border border-[#c9e3d4] bg-white px-3 py-2.5" type="tel" placeholder="(11) 99999-9999" required />
              </label>
              <label className="grid gap-1 text-sm font-bold">
                Tipo de negócio
                <select className="rounded-xl border border-[#c9e3d4] bg-white px-3 py-2.5" required defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option>Barbearia</option>
                  <option>Salão de beleza</option>
                  <option>Estética</option>
                  <option>Autônomo(a)</option>
                </select>
              </label>
              <button className="btn btn-primary mt-1" type="submit">Quero uma demonstração</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-sa-line py-6">
        <div className="mx-auto flex w-[min(1160px,92vw)] flex-wrap items-center justify-between gap-3 text-sm text-sa-muted">
          <p>© {new Date().getFullYear()} SmartAgenda. Todos os direitos reservados.</p>
          <a href="#inicio" className="font-semibold text-sa-ink">Voltar ao topo</a>
        </div>
      </footer>
    </div>
  )
}
