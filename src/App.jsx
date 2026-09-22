import { useEffect, useState } from "react";
import "./style.css";

const skills = [
  ["✎", "Concept Art"], ["🎮", "Game Design"], ["▧", "2D Art"],
  ["▶", "Animation"], ["✦", "Pixel Art"], ["♙", "Character Design"],
  ["F", "Figma"], ["Ps", "Photoshop"], ["A", "Aseprite"],
];

const projects = [
  {
    number: "01 / ANIMATION", title: "The Lightkeepers", role: "Аниматор",
    text: "Игра о Compass College, где направления колледжа представлены через мини-игры, сюжет и персонажей. Создавала анимации и кат-сцены для проекта.",
    tag: "Дипломный проект", type: "lightkeepers"
  },
  {
    number: "02 / PERSONAL PROJECT", title: "The Castle", role: "Автор · Game Designer · Artist",
    text: "Моя настольная игра — от идеи и концепта до тестирования. Создала правила, персонажей, 3 колоды карт, планшеты, поле и провела опрос среди 50 человек.",
    tag: "50+ участников исследования", type: "castle", featured: true
  },
  {
    number: "03 / INTERNSHIP", title: "Arklash", role: "Концепт-художник",
    text: "Пиксельная мобильная PvP-игра. Создала 3 концепта персонажей, полноценный баннер с главным героем и 11 игровых артефактов.",
    tag: "Учебная практика", type: "arklash"
  },
  {
    number: "04 / CLOSED PROJECT", title: "Cat The Wanderer", role: "Художник · Visual Art",
    text: "Полностью отвечала за визуальную часть проекта: создала главного кота и его базовые анимации — бег, рывок, шаг и прыжок.",
    tag: "Проект закрыт", type: "cat"
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="page-glow glow-one" />
      <div className="page-glow glow-two" />

      <header className="header">
        <a className="logo" href="#top"><span className="logo-star">✦</span><span>Wladyis</span></a>
        <button className="menu-toggle" aria-label="Открыть меню" aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Обо мне</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Навыки</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span>✦</span> GAME DESIGN / CONCEPT ART</div>
            <h1>Элина <span>(Wladyis)</span><br />Алагозова</h1>
            <h2>Game Designer <i>&</i> Concept Artist</h2>
            <p className="hero-text">Создаю персонажей, миры и визуальные концепты, чтобы превращать идеи и внутренние истории в игровые миры.</p>
            <a className="primary-btn" href="#projects"><span className="btn-icon">↗</span>Посмотреть проекты</a>
          </div>

          <div className="hero-art reveal">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="portrait-frame"><img src="/assets/profile.jpg" alt="Элина Алагозова" /></div>
            <div className="floating-card card-cat"><span>✦</span><small>dreams</small></div>
            <div className="floating-card card-note"><span>games<br />+ art<br />+ stories</span></div>
            <div className="spark spark-1">✦</div><div className="spark spark-2">✧</div><div className="spark spark-3">✦</div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading reveal"><span className="section-mark">✦</span><h2>Обо мне</h2></div>
          <div className="about-grid">
            <div className="about-main reveal">
              <p>Я из <strong>Бишкека, Кыргызстан.</strong> Сейчас учусь на 3 курсе по специальности <strong>IT & Product Design</strong>.</p>
              <p>Рисую с детства — примерно с 7 лет. В игровой сфере я пока относительно недавно, но уже успела поработать над несколькими проектами в ролях аниматора, художника и концепт-художника.</p>
              <p>Моя большая цель — поступить за границу и продолжить обучение в игровой сфере, а в будущем создать собственную игру, через которую смогу передать свой внутренний мир и свою историю.</p>
              <div className="achievement"><div className="achievement-icon">★</div><div><strong>u!skills — графический рисунок</strong><span>Высший итоговый балл курса</span></div></div>
            </div>

            <div className="about-facts reveal">
              <div className="fact"><span className="fact-icon">⌖</span><div><small>Местоположение</small><strong>Бишкек, Кыргызстан</strong></div></div>
              <div className="fact"><span className="fact-icon">⌘</span><div><small>Образование</small><strong>IT & Product Design · 3 курс</strong></div></div>
              <div className="fact"><span className="fact-icon">♡</span><div><small>Рисую</small><strong>С ~7 лет</strong></div></div>
              <div className="fact"><span className="fact-icon">☆</span><div><small>Цель</small><strong>Game Design · обучение за границей</strong></div></div>
            </div>

            <div className="languages reveal">
              <div className="language-title">Языки</div>
              {[["Русский","родной","100%"],["English","B1","58%"],["한국어","база","20%"],["日本語","чтение","24%"]].map(([name, level, width]) =>
                <div className="language" key={name}><div><span>{name}</span><small>{level}</small></div><div className="bar"><i style={{width}} /></div></div>
              )}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading reveal"><span className="section-mark">✦</span><h2>Навыки</h2></div>
          <div className="skills-layout">
            <div className="skills-grid reveal">{skills.map(([icon, name]) => <div className="skill" key={name}><span>{icon}</span>{name}</div>)}</div>
            <div className="learning reveal">
              <div className="learning-title">Изучаю / хочу научиться</div>
              <div className="learning-grid">
                <div><b>Unity</b><small>изучаю</small></div><div><b>&lt;/&gt;</b><small>Coding</small></div>
                <div><b>◇</b><small>3D Design</small></div><div><b>◈</b><small>Blender</small></div><div><b>≋</b><small>Sound Design</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading projects-heading reveal"><div><span className="section-mark">✦</span><h2>Мои проекты</h2></div><span className="project-count">04 проекта</span></div>
          <div className="projects-grid">
            {projects.map((p) => (
              <article className={`project-card reveal ${p.featured ? "featured" : ""}`} key={p.title}>
                <div className={`project-image image-${p.type}`}>
                  <span className="image-label">{p.type === "castle" ? "GAME DESIGN" : p.type === "arklash" ? "CONCEPT ART" : p.type === "cat" ? "VISUAL ART" : "ANIMATION"}</span>
                  {p.type === "lightkeepers" && <div className="scene"><span className="moon">☾</span><span className="hill hill-a"></span><span className="hill hill-b"></span><span className="tiny-house"></span></div>}
                  {p.type === "castle" && <div className="castle-scene"><div className="castle-tower"></div><div className="castle-tower tower-right"></div><div className="castle-body"></div><div className="castle-moon">☽</div></div>}
                  {p.type === "arklash" && <div className="pixel-character"><div className="pixel-head"></div><div className="pixel-body"></div><div className="pixel-leg left"></div><div className="pixel-leg right"></div><div className="pixel-sword"></div></div>}
                  {p.type === "cat" && <div className="cat-silhouette"><span className="ear ear-left"></span><span className="ear ear-right"></span><span className="eye eye-left"></span><span className="eye eye-right"></span><span className="cat-tail"></span></div>}
                </div>
                <div className="project-content"><div className="project-meta">{p.number}</div><h3>{p.title}</h3><p className="role">{p.role}</p><p>{p.text}</p><span className="tag">{p.tag}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey-section">
          <div className="section-heading reveal"><span className="section-mark">✦</span><h2>Куда я иду</h2></div>
          <div className="journey"><div className="journey-line"></div>
            {[["01","Сейчас","Учусь и создаю","3 курс IT & Product Design, развиваю Game Design, Concept Art и 2D Art."],
              ["02","Следующий шаг","Поступить за границу","Хочу продолжить образование в игровой сфере и углубиться в Game Design."],
              ["03","Большая цель","Создать свою игру","Собрать знания, команду и однажды выпустить собственный игровой проект."]].map(([num, small, title, text]) =>
                <div className="journey-item reveal" key={num}><div className="journey-dot">{num}</div><div><small>{small}</small><h3>{title}</h3><p>{text}</p></div></div>
            )}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card reveal">
            <span className="section-mark">✦</span><h2>Давай создадим что-нибудь классное.</h2>
            <p>Если тебе интересны игры, визуал и создание миров — буду рада познакомиться.</p>
            <div className="contact-links">
              <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram ↗</a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer"><div>© {new Date().getFullYear()} Wladyis</div><div>Game Designer & Concept Artist</div></footer>
    </>
  );
}

export default App;
