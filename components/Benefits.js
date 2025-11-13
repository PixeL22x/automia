import styles from '../styles/Benefits.module.css'

export default function Benefits() {
  const benefits = [
    {
      stat: '40%',
      label: 'Reducción de Costos Operativos',
      description: 'Automatiza tareas y optimiza recursos'
    },
    {
      stat: '3x',
      label: 'Aumento en Eficiencia',
      description: 'Procesos más rápidos y precisos'
    },
    {
      stat: '24/7',
      label: 'Disponibilidad',
      description: 'Sistemas que trabajan sin descanso'
    },
    {
      stat: '95%',
      label: 'Satisfacción del Cliente',
      description: 'Mejor experiencia y atención'
    }
  ]

  return (
    <section id="beneficios" className={styles.benefits}>
      <div className="container">
        <h2 className="section-title">Beneficios para tu Empresa</h2>
        <p className="section-subtitle">
          Resultados medibles que transforman tu negocio
        </p>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stat}>{benefit.stat}</div>
              <h3 className={styles.label}>{benefit.label}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.icon}>✓</div>
            <div>
              <h3>Implementación Rápida</h3>
              <p>Soluciones listas en semanas, no meses</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>✓</div>
            <div>
              <h3>Sin Experiencia Técnica Requerida</h3>
              <p>Nos encargamos de todo, tú solo disfruta los resultados</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>✓</div>
            <div>
              <h3>Precios Accesibles</h3>
              <p>Planes diseñados para el presupuesto de pequeñas empresas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

