import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transforma tu Empresa con
            <span className={styles.highlight}> Inteligencia Artificial</span>
          </h1>
          <p className={styles.subtitle}>
            Soluciones de IA personalizadas para pequeñas empresas. Automatiza procesos, 
            optimiza operaciones y toma decisiones basadas en datos para crecer de manera inteligente.
          </p>
          <div className={styles.buttons}>
            <a href="https://wa.me/34634968135" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
              Contactar por WhatsApp
            </a>
            <a href="#servicios" className={`${styles.btn} ${styles.btnSecondary}`}>
              Ver Servicios
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.gradientCircle}></div>
          <div className={styles.cards}>
            <div className={styles.card}>🤖 IA</div>
            <div className={styles.card}>📊 Datos</div>
            <div className={styles.card}>⚡ Automatización</div>
          </div>
        </div>
      </div>
    </section>
  )
}

