import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Linkedin,
  Mail, Menu, X, Braces, Database, Globe, Layers, Monitor, Palette,
  Server, Sparkles, Workflow,  Send, CheckCircle2
} from 'lucide-react'

const skills = [
  { title: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'], icon: Monitor },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'], icon: Server },
  { title: 'Database & Tools', items: ['MongoDB', 'Git', 'GitHub', 'VS Code'], icon: Database },
  { title: 'WordPress & Design', items: ['WordPress', 'Elementor', 'Landing Pages', 'UI/UX Basics'], icon: Palette },
]

const projects = [
  {
    number: '01', name: 'ToyVerse', type: 'MERN STACK PROJECT',
    description: 'A full-stack toy shopping experience concept with product browsing and a clear e-commerce user flow.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    accent: 'violet', link: 'https://github.com/Mohitnakhva'
  },
  {
    number: '02', name: 'Cafe Landing Page', type: 'WORDPRESS / ELEMENTOR',
    description: 'A welcoming café website concept with a visual hero, menu highlights, customer reviews, and contact call-to-action.',
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
    accent: 'orange', link: 'https://github.com/Mohitnakhva'
  },
  {
    number: '03', name: 'Shoes Shopping UI', type: 'FRONTEND PROJECT',
    description: 'A product-focused shopping interface concept designed around clean product presentation and simple navigation.',
    tags: ['React', 'JavaScript', 'CSS'],
    accent: 'blue', link: 'https://github.com/Mohitnakhva'
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
const reveal = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.16 },
  variants: fadeUp
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const closeMenu = () => setMenuOpen(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to send message.')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('demo')
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">M.</span><span>MOHIT NAKHVA<span className="brand-sub">DEVELOPER PORTFOLIO</span></span></a>
          <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
            <motion.div className="eyebrow" variants={fadeUp}><span className="status-dot" /> OPEN TO OPPORTUNITIES</motion.div>
            <motion.h1 variants={fadeUp}>Building digital<br />experiences with <span className="gradient-text">purpose.</span></motion.h1>
            <motion.p className="hero-description" variants={fadeUp}>Hey, I'm <strong>Mohit Nakhva</strong> — a developer who enjoys turning ideas into useful, polished web experiences with React, full-stack technologies, and WordPress.</motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </motion.div>
            <motion.div className="hero-meta" variants={fadeUp}>
              <span><span className="meta-icon"><Code2 size={16} /></span> Full-Stack Development</span>
              <span><span className="meta-icon"><Globe size={16} /></span> WordPress & Elementor</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .25 }}>
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>mohit.jsx</span><span className="code-language">JSX</span></div>
              <div className="code-content">
                <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><span className="line-no">02</span><span className="code-key"> name:</span> <span className="code-green">'Mohit Nakhva'</span>,</div>
                <div><span className="line-no">03</span><span className="code-key"> focus:</span> <span className="code-green">'Full-Stack'</span>,</div>
                <div><span className="line-no">04</span><span className="code-key"> builds:</span> [</div>
                <div><span className="line-no">05</span><span className="indent code-green">'Web Apps'</span>,</div>
                <div><span className="line-no">06</span><span className="indent code-green">'WordPress Sites'</span></div>
                <div><span className="line-no">07</span> ]</div>
                <div><span className="line-no">08</span>{'}'};</div>
                <div className="code-gap"><span className="line-no">09</span></div>
                <div><span className="line-no">10</span><span className="code-purple">export default</span> <span className="code-blue">developer</span>;</div>
              </div>
              <div className="code-footer"><span><span className="status-dot" /> Available to build</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
            </div>
            <div className="float-chip chip-react"><Braces size={17} /><span>React.js</span></div>
            <div className="float-chip chip-wp"><Globe size={17} /><span>WordPress</span></div>
            <div className="hero-orb"><Sparkles size={26} /></div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner"><span>CURIOUS BY NATURE</span><i /><span>BUILT WITH INTENTION</span><i /><span>ALWAYS LEARNING</span><i /><span>DETAIL-DRIVEN</span></div>
        </section>

        <section className="section container" id="about">
          <motion.div {...reveal} className="section-heading"><span className="section-index">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></motion.div>
          <div className="about-grid">
            <motion.div {...reveal} className="about-main">
              <p className="big-copy">I like exploring how things work — and using that curiosity to create things on the web.</p>
              <p className="body-copy">I'm pursuing my Master of Computer Applications (MCA) and building my skills across frontend development, backend fundamentals, and website design. I enjoy learning by making projects, solving problems, and improving the details that make a digital experience feel right.</p>
              <p className="body-copy">My goal is to grow into a well-rounded developer who can take an idea from the first sketch to a working product.</p>
              <a className="text-link" href="https://github.com/Mohitnakhva" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a>
            </motion.div>
            <motion.div {...reveal} className="about-aside">
              <div className="aside-card"><span className="aside-icon"><Layers size={20} /></span><div><h3>Build & iterate</h3><p>Turn concepts into practical projects and keep refining.</p></div></div>
              <div className="aside-card"><span className="aside-icon"><Workflow size={20} /></span><div><h3>Think end-to-end</h3><p>Explore the user interface, application logic, and data flow.</p></div></div>
              <div className="aside-card"><span className="aside-icon"><Sparkles size={20} /></span><div><h3>Keep learning</h3><p>Stay curious, welcome feedback, and improve every day.</p></div></div>
              <div className="education-note"><span className="mono-label">CURRENTLY</span><p>MCA · Pursuing</p><span className="muted">LJ University · 2025–2027</span></div>
            </motion.div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <motion.div {...reveal} className="section-heading"><span className="section-index">02 / SKILLS</span><h2>Tools of the <span className="gradient-text">trade.</span></h2><p className="section-subtitle">A growing toolkit for building thoughtful digital experiences.</p></motion.div>
            <div className="skills-grid">
              {skills.map((group, i) => {
                const Icon = group.icon
                return <motion.article {...reveal} transition={{ delay: i * .07 }} className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-count">0{i + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.article>
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <motion.div {...reveal} className="section-heading project-heading"><div><span className="section-index">03 / SELECTED WORK</span><h2>Things I've been <span className="gradient-text">building.</span></h2></div><a className="text-link" href="https://github.com/Mohitnakhva" target="_blank" rel="noreferrer">All projects on GitHub <ArrowUpRight size={16} /></a></motion.div>
          <div className="projects-list">
            {projects.map((project, i) => <motion.article {...reveal} transition={{ delay: i * .08 }} className={`project-card project-${project.accent}`} key={project.number}>
              <div className="project-preview">
                <div className="preview-window"><div className="preview-bar"><i /><i /><i /><span>{project.name.toLowerCase().replaceAll(' ', '-')}.app</span></div>
                  {i === 0 ? <div className="toy-preview"><div className="toy-nav">toy<span>verse.</span><small>SHOP&nbsp;&nbsp; PLAY&nbsp;&nbsp; DISCOVER</small></div><div className="toy-hero"><small>MADE FOR LITTLE IMAGINATIONS</small><b>Big fun.<br/>Little prices.</b><span className="toy-pill">EXPLORE TOYS ↗</span></div><div className="toy-products"><span>🧸</span><span>🚀</span><span>🧩</span></div></div>
                  : i === 1 ? <div className="cafe-preview"><div className="cafe-nav">BREW<span>&</span>BEAN <small>MENU &nbsp; OUR STORY &nbsp; VISIT</small></div><div className="cafe-hero"><small>YOUR DAILY RITUAL</small><b>Good coffee.<br/>Good company.</b><span>DISCOVER OUR MENU ↗</span></div></div>
                  : <div className="shoe-preview"><div className="shoe-nav">STEP / <span>FORM</span><small>NEW IN &nbsp; COLLECTION</small></div><div className="shoe-hero"><small>MOVE YOUR WAY</small><b>Find your<br/>next stride.</b><span className="shoe-art">👟</span></div></div>}
                </div>
              </div>
              <div className="project-info"><div className="project-topline"><span className="section-index">{project.number} — {project.type}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRight size={19} /></a></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </motion.article>)}
          </div>
          <p className="project-disclaimer">Project cards are portfolio concepts. Replace links and descriptions with your actual repositories and live demos before publishing.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <motion.div {...reveal} className="contact-copy"><span className="section-index">04 / CONTACT</span><h2>Have an idea?<br/><span className="gradient-text">Let's build it.</span></h2><p>Have a project, opportunity, or just want to connect? My inbox is open.</p><a className="contact-email" href="mailto:mohitnakhva@example.com"><Mail size={17} /> mohitnakhva@example.com <ArrowUpRight size={16} /></a><div className="social-links"><a href="https://github.com/Mohitnakhva" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a></div></motion.div>
            <motion.form {...reveal} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span className="mono-label">SEND A MESSAGE</span><span className="form-spark"><Send size={17} /></span></div>
              <label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" /></label>
              <label>What are you thinking about?<textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your idea..." /></label>
              <button className="button button-primary submit-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={17} /></button>
              {status === 'success' && <p className="form-status success"><CheckCircle2 size={16} /> Message sent successfully.</p>}
              {status === 'demo' && <p className="form-status">Backend isn't connected yet. Start the server and configure MongoDB to send messages.</p>}
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="footer container"><a className="brand footer-brand" href="#home"><span className="brand-mark">M.</span></a><span>Designed & built by Mohit Nakhva</span><span>© {new Date().getFullYear()} · KEEP BUILDING.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
