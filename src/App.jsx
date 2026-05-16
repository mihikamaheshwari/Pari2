import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import {
  Heart,
  Sparkles,
  Music2,
  Gift,
  Stars,
  Crown,
} from 'lucide-react'

const memorySlides = [
  {
    image: '/memories/memory-1.jpeg',
    caption: 'This smile is one of my favorite memories ever.',
    moment: 'One of my favorite Pari moments',
  },
  {
    image: '/memories/memory-2.jpeg',
    caption: 'I LOVE TO BE CRINGE WITH YOU,',
    moment: 'fun day',
  },

  {
    image: '/memories/memory-5.jpeg',
    caption: 'Cheers to endless coffee dates',
    moment: 'OG Fifthember',
  },
  {
    image: '/memories/memory-6.jpeg',
    caption: 'And here is Just a cute pic :) ',
    moment: 'Coz why not',
  },
    {
    image: '/memories/memory-3.jpeg',
    caption: 'Last day in Kota together.',
    moment: 'A memory I will keep forever',
  },
  {
    image: '/memories/memory-7.jpeg',
    caption: 'And a little bit family time.',
    moment: 'I love uncle auntyy',
  },
  {
    image: '/memories/memory-11.jpeg',
    caption: 'Throwback to good old kota phase.',
    moment: 'Pure nostalgia',
  },
  {
    image: '/memories/memory-12.jpeg',
    caption: 'Cheers to being this chhapri.',
    moment: 'Another chapter',
  },
  {
    image: '/memories/memory-13.jpeg',
    caption: 'I mean , it was a phase.',
    moment: 'Embarassing yet cute',
  },
  {
    image: '/memories/memory-14.jpeg',
    caption: 'Another frame we had to keep forever.',
    moment: 'New memory drop',
  },
  {
    image: '/memories/memory-15.jpeg',
    caption: 'Still us, still chaos, still home.',
    moment: 'One more favorite',
  },
  {
    image: '/memories/memory-16.jpeg',
    caption: 'This one feels straight out of our story.',
    moment: 'Fresh chapter',
  },
  {
    image: '/memories/memory-17.jpeg',
    caption: 'Could not skip this picture at all.',
    moment: 'Too good to miss',
  },
  {
    image: '/memories/memory-18.jpeg',
    caption: 'Saving this smile forever.',
    moment: 'Latest memory',
  },
]

const reasons = [
  { title: 'You are brave', text: 'Leaving home and living alone isnt easy bbg.', icon: Heart },
  { title: 'Your Strength', text: 'You smile even in your hardest chapters.', icon: Crown },
  { title: 'Your Energy', text: 'You turn ordinary moments into mom lores.', icon: Sparkles },
  { title: 'Your friendship', text: 'You stay, you care, you never pretend.', icon: Heart },
]

const comfortMessages = [
  "Hey... breathe first, okay? You've survived every bad day before this too.",
  "I know things feel heavy right now, but you never have to carry everything alone.",
  "If I could, I'd sit beside you silently until things hurt a little less.",
  "You are so much stronger than the thoughts trying to convince you otherwise.",
  'Bad moments are temporary. You are permanent in my life.',
  'Even on your worst days, I will still choose you.',
  'I hope you know how loved you are.',
  'The world genuinely feels softer with you in it.',
  "Please don't be too hard on yourself today.",
  'Rest is allowed. Crying is allowed. Feeling lost is allowed.',
  "You don't always have to pretend you're okay with me.",
  "Some days are just hard. That doesn't mean you're failing.",
  'I wish you could see yourself the way I see you.',
  "You've carried so much and still continued smiling. That's strength.",
  "I'm proud of you for making it this far.",
  'One bad day does not define your entire life.',
  'You deserve the same kindness you give everyone else.',
  'If your heart feels tired, let mine hold it for a while.',
  'The sun still rises for you every morning for a reason.',
  'I know life gets messy, but I hope you never doubt your worth.',
  'You are not difficult to love.',
  'You make people feel safe without even realizing it.',
  'Please stay. Better days are slowly finding their way to you.',
  'If we can survive all our chaos together, we can survive this too.',
  "I'll always be here, even during your silent days.",
  'You are one of the most beautiful things life gave me.',
  'Nothing could ever make me regret being your friend.',
  'I hope someday you realize how deeply appreciated you are.',
  "You don't need to have everything figured out right now.",
  'Healing takes time. Be gentle with yourself.',
  'Your existence matters more than you think.',
  'The people who truly love you are not going anywhere.',
  'You make ordinary moments feel special.',
  'I hope life becomes softer for you soon.',
  "You've already survived days you thought would destroy you.",
  'You deserve happiness that stays.',
  'I know your heart gets tired from feeling everything so deeply.',
  'If today hurts, tomorrow can still heal.',
  'I wish I could hug every sadness out of you.',
  'No matter what happens, you will never be alone while I exist.',
  'You are worth staying for.',
  'You are worth fighting for.',
  'Your smile has healed me more times than you know.',
  'Thank you for staying alive through every difficult chapter.',
  "You don't have to earn love. You already deserve it.",
  'Even broken stars still shine.',
  'I hope your future self thanks you for not giving up today.',
  'Some people are blessings. You are one of them.',
  "Home is not always a place. Sometimes it's a person. You are mine.",
  'If your heart feels loud tonight, come back and read this again: You are loved more than you realize.',
]

const missYouMessages = [
  'I miss you too, idiot.',
  'Distance could never make me forget you.',
  'Somewhere right now, I was probably thinking about you too.',
  'Missing you is basically part of my daily routine now.',
  'Life feels a little incomplete without you around.',
  'I still randomly see things and think, "Pari would laugh at this."',
  'No matter how busy life gets, a part of me always looks for you.',
  'You are one of those people my heart automatically reaches for.',
  'I think pieces of us exist in every memory we made together.',
  'Missing you feels like revisiting old sunsets.',
  'Some people leave memories. You left a whole home inside my heart.',
  'Every playlist, every joke, every place somehow reminds me of you.',
  "If I had one free teleportation, I'd probably use it for you.",
  'We may not talk every second, but you never leave my mind.',
  'I hope you know you are deeply missed and deeply loved.',
  'Sometimes I miss our old days so much it physically hurts.',
  'Growing up is scary because I just want us to stay like this forever.',
  'I miss our random calls, random fights, random everything.',
  'Nothing feels the same as laughing with you.',
  'You are genuinely one of my favorite chapters in life.',
  'If missing someone was visible, my entire sky would probably spell your name.',
  'I miss the comfort of your presence.',
  'Home is wherever you are.',
  "I don't think you realize how attached I am to you.",
  'Even silence felt nice with you.',
  'I carry our memories everywhere without even trying.',
  'Some friendships become soul memories. Ours did.',
  'No matter where life takes us, I hope it always somehow brings us back together.',
  'You are impossible to replace.',
  'Missing you feels soft and painful at the same time.',
  'I hope future versions of us are still this close.',
  'Thank you for existing in my life.',
  "You'll always have a place with me.",
  'I miss the version of me that existed around you too.',
  'You made ordinary days feel unforgettable.',
  'I wish we could pause time in our favorite memories forever.',
  'Sometimes I replay our old moments just to feel close to you again.',
  'I think a part of my heart permanently belongs to our friendship.',
  'If souls recognize people, mine definitely recognizes yours.',
  'No matter how much time passes, you will still be my person.',
]

const friendSince = new Date('2020-08-21T00:00:00')

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 8}s`,
      })),
    [],
  )

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  )
}

function ConfettiBurst({ bursts }) {
  return (
    <div className="confetti-layer" aria-hidden="true">
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="confetti"
          style={{
            '--x': `${burst.x}px`,
            '--y': `${burst.y}px`,
            '--dx': `${burst.dx}px`,
            '--dy': `${burst.dy}px`,
          }}
        />
      ))}
    </div>
  )
}

function App() {
  const [typedText, setTypedText] = useState('')
  const [muted, setMuted] = useState(true)
  const [slideIndex, setSlideIndex] = useState(0)
  const [letterOpen, setLetterOpen] = useState(false)
  const [comfortMessage, setComfortMessage] = useState('')
  const [missMessage, setMissMessage] = useState('')
  const [bursts, setBursts] = useState([])
  const [progress, setProgress] = useState(0)
  const [videoInView, setVideoInView] = useState(false)
  const [daysTogether, setDaysTogether] = useState(0)
  const trailRef = useRef(null)
  const glowRef = useRef(null)
  const audioRef = useRef(null)
  const reelVideoRef = useRef(null)
  const videoSectionRef = useRef(null)

  useEffect(() => {
    const fullText = 'Happy Birthday, Pari ❤️'
    let index = 0
    const typer = window.setInterval(() => {
      index += 1
      setTypedText(fullText.slice(0, index))
      if (index >= fullText.length) {
        clearInterval(typer)
      }
    }, 100)
    return () => clearInterval(typer)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((previous) => (previous + 1) % memorySlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress(total > 0 ? (current / total) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  useEffect(() => {
    setDaysTogether(Math.floor((Date.now() - friendSince.getTime()) / (1000 * 60 * 60 * 24)))
  }, [])

  useEffect(() => {
    const handleMove = (event) => {
      if (!glowRef.current || !trailRef.current) {
        return
      }
      glowRef.current.style.transform = `translate(${event.clientX - 120}px, ${event.clientY - 120}px)`
      trailRef.current.style.transform = `translate(${event.clientX - 10}px, ${event.clientY - 10}px)`
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  useEffect(() => {
    if (!videoSectionRef.current) {
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoInView(true)
        }
      },
      { threshold: 0.45 },
    )
    observer.observe(videoSectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!muted && audioRef.current) {
      audioRef.current.play().catch(() => null)
    }
  }, [muted])

  useEffect(() => {
    if (!reelVideoRef.current) {
      return
    }
    reelVideoRef.current.muted = false
    reelVideoRef.current.volume = 1
  }, [])

  useEffect(() => {
    gsap.fromTo(
      '.section-title',
      { y: 48, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.2, ease: 'power3.out' },
    )
  }, [])

  const triggerConfetti = (event) => {
    const burst = {
      id: Date.now() + Math.random(),
      x: event.clientX,
      y: event.clientY,
      dx: (Math.random() - 0.5) * 140,
      dy: -70 - Math.random() * 70,
    }
    setBursts((previous) => [...previous, burst])
    window.setTimeout(() => {
      setBursts((previous) => previous.filter((item) => item.id !== burst.id))
    }, 1300)
  }

  const randomComfortMessage = () => {
    const randomIndex = Math.floor(Math.random() * comfortMessages.length)
    setComfortMessage(comfortMessages[randomIndex])
  }

  const randomMissMessage = () => {
    const randomIndex = Math.floor(Math.random() * missYouMessages.length)
    setMissMessage(missYouMessages[randomIndex])
  }

  return (
    <main className="page" onClick={triggerConfetti}>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={trailRef} className="cursor-trail" aria-hidden="true" />
      <FloatingParticles />
      <ConfettiBurst bursts={bursts} />
      <audio
        ref={audioRef}
        src="/music/stand-by-me.mp3"
        loop
        muted={muted}
        preload="none"
      />

      <div className="progress-wrap" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <section className="hero-section section">
        <div className="floating-hearts" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <Heart key={index} size={18} className="heart-float" />
          ))}
        </div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          {typedText}
          <span className="typing-caret" />
        </motion.h1>

        <p className="hero-subtitle section-title">
          A tiny universe made from our memories, laughter, and all the moments that feel like home.
        </p>

        <div className="hero-actions">
          <a href="#surprise" className="glow-button">
            Open Your Surprise
          </a>
          <button
            type="button"
            className="glass-button"
            onClick={(event) => {
              event.stopPropagation()
              setMuted((previous) => !previous)
            }}
          >
            <Music2 size={18} />
            {muted ? 'Play Music' : 'Mute Music'}
          </button>
        </div>
      </section>

      <section className="section memory-section" id="surprise">
        <h2 className="section-title">Our Memory Reel</h2>
        <div className="slideshow-card">
          {memorySlides.map((slide, index) => (
            <article
              key={slide.image}
              className={`slide ${index === slideIndex ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - slideIndex) * 108}%) scale(${index === slideIndex ? 1 : 0.97})`,
              }}
            >
              <img
                src={slide.image}
                alt="Memory placeholder"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <h3>{slide.caption}</h3>
              <p>{slide.moment}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`section letter-section ${letterOpen ? 'reading' : ''}`}>
        <h2 className="section-title">A Letter For You</h2>
        <div className="envelope-wrap">
          <button
            type="button"
            className={`envelope ${letterOpen ? 'open' : ''}`}
            onClick={(event) => {
              event.stopPropagation()
              setLetterOpen((previous) => !previous)
            }}
          >
            <span className="seal">Open</span>
          </button>

          {letterOpen && (
            <motion.article
              className="letter glass-panel"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="handwriting">Dear Pari,</p>
              <p className="handwriting">
                Happy Birthday to the most important person in my life.<br /><br />
                Sometimes I sit and think about how everything started, honestly, it feels unreal. We met in 9th standard, just two random girls who met in coaching classes, without knowing that one day we would become such a huge part of each other’s lives.<br /><br />
                And now it’s been SEVEN years.<br />
                Seven years of memories, chaos, laughter, crying, late-night talks, stupid fights, emotional breakdowns, healing each other, and growing up together. Somewhere between all of that, you became my home.<br /><br />
                My life genuinely changed after meeting you.<br /><br />
                There were so many moments where our friendship was almost at the edge of breaking. We fought, stopped talking, patched up, broke apart again, and somehow… still found our way back to each other every single time. Maybe because some people are just meant to stay.<br /><br />
                And you stayed.<br /><br />
                When people left, when things changed, when life became messy and confusing, you still stayed beside me through everything. Through every breakup, every downfall, every emotional phase, every version of me — you never truly left my side.<br /><br />
                I don’t think you even realize how grateful I am for you.<br /><br />
                Thank you for being the one constant in my life.<br />
                Thank you for understanding me even when I couldn’t explain myself.<br />
                Thank you for growing with me instead of growing away from me.<br /><br />
                I really, really, really love you, Pari.<br /><br />
                And honestly? When I think about the future, I still see you in it. I want to see us grow older together, still laughing at stupid things, still annoying each other, still calling each other for every small thing happening in life. I hope years from now, nothing changes between us except our age.<br /><br />
                You are one of the best things that has ever happened to me, and no matter how many ups and downs life gives us, a part of my heart will always belong to our friendship.<br /><br />
                Happy Birthday once again, best friend.
              </p>
            </motion.article>
          )}
        </div>
      </section>

      <section className="section video-section" ref={videoSectionRef}>
        <h2 className="section-title">Our Little Movie</h2>
        <motion.div
          className={`video-card reel-card ${videoInView ? 'active' : ''}`}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: videoInView ? 1 : 0.9, opacity: videoInView ? 1 : 0.5 }}
        >
          <video
            ref={reelVideoRef}
            controls
            src="/videos/reel-v2.mp4?v=2"
            preload="metadata"
            playsInline
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
            onContextMenu={(event) => event.preventDefault()}
            onDoubleClick={(event) => event.preventDefault()}
            onPlay={() => {
              if (audioRef.current) {
                audioRef.current.pause()
              }
              setMuted(true)
            }}
            style={{
              width: 'auto',
              height: '480px',
              maxHeight: '70vh',
              aspectRatio: '9/16',
              borderRadius: '1.2rem',
              background: 'rgba(0,0,0,0)',
              objectFit: 'cover',
              margin: '0 auto',
              display: 'block',
            }}
            poster=""
          />
          <p className="subtitle">Every moment with you became a memory.</p>
        </motion.div>
      </section>

      <section className="section special-section">
        <h2 className="section-title">Why You Are Special</h2>
        <div className="special-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="flip-card">
                <div className="flip-card-inner">
                  <article className="flip-front glass-panel">
                    <Icon size={30} />
                    <h3>{reason.title}</h3>
                  </article>
                  <article className="flip-back glass-panel">
                    <p>{reason.text}</p>
                  </article>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section surprise-section">
        <h2 className="section-title">Extra Surprises</h2>
        <div className="surprise-grid">
          <button
            type="button"
            className="glass-button"
            onClick={(event) => {
              event.stopPropagation()
              randomComfortMessage()
            }}
          >
            <Gift size={18} />
            Click when you feel sad
          </button>
          <button
            type="button"
            className="glass-button"
            onClick={(event) => {
              event.stopPropagation()
              randomMissMessage()
            }}
          >
            <Heart size={18} />
            💌 Click if you miss me
          </button>
          <div className="glass-panel countdown">
            <Sparkles size={18} />
            <p>{daysTogether} days of friendship and counting.</p>
          </div>
        </div>

        {comfortMessage && (
          <article className="comfort-card glass-panel">
            <h3>💌 Click when you feel sad</h3>
            <p className="comfort-text">{comfortMessage}</p>
            <button
              type="button"
              className="retap-button"
              onClick={(event) => {
                event.stopPropagation()
                randomComfortMessage()
              }}
            >
              tap if this was not enough to make you stop crying
            </button>
          </article>
        )}
        {missMessage && (
          <article className="comfort-card miss-card glass-panel">
            <h3>💌 Click if you miss me</h3>
            <p className="comfort-text">{missMessage}</p>
            <button
              type="button"
              className="retap-button"
              onClick={(event) => {
                event.stopPropagation()
                randomMissMessage()
              }}
            >
              tap if this was not enough to make you smile
            </button>
          </article>
        )}
      </section>

      <section className="section cosmos-section">
        <div className="sky-overlay" aria-hidden="true" />
        <h2 className="section-title">The Night Sky Of Us</h2>
        <p className="constellation-text">
          Every constellation here is a promise that no matter where we are, we still belong in each other's story.
        </p>
      </section>

      <section className="section ending-section">
        <h2 className="section-title">No matter where life takes us, you will always be my favorite person.</h2>
        <p className="final-glow">I Love You Pari</p>
      
      </section>
    </main>
  )
}

export default App
