import styles from '../styles/CTA.module.css'

export default function CTA() {
  return (
    <section id="contacto" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>¿Listo para Transformar tu Empresa?</h2>
          <p className={styles.subtitle}>
            Agenda una consulta gratuita y descubre cómo la IA puede impulsar tu negocio. 
            Sin compromisos, solo resultados.
          </p>
          <div className={styles.buttons}>
            <a href="https://wa.me/34634968135" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Contactar por WhatsApp
            </a>
            <a href="https://wa.me/34634968135" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Consulta Gratuita
            </a>
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Consulta sin costo</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Respuesta en 24 horas</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>✓</span>
              <span>Sin compromisos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

