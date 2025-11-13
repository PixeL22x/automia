import styles from '../styles/Process.module.css'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Analizamos tus necesidades y objetivos para entender cómo la IA puede ayudar a tu negocio.'
    },
    {
      number: '02',
      title: 'Propuesta Personalizada',
      description: 'Diseñamos una solución específica para tu empresa con un plan claro y presupuesto transparente.'
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Nuestro equipo implementa la solución de forma rápida y sin interrumpir tus operaciones.'
    },
    {
      number: '04',
      title: 'Soporte Continuo',
      description: 'Acompañamiento constante para optimizar y mejorar los resultados de tu sistema de IA.'
    }
  ]

  return (
    <section id="proceso" className={styles.process}>
      <div className="container">
        <h2 className="section-title">Nuestro Proceso</h2>
        <p className="section-subtitle">
          Un camino simple y transparente hacia la transformación digital
        </p>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.number}>{step.number}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

