import styles from '../styles/Services.module.css'

export default function Services() {
  const services = [
    {
      icon: '🤖',
      title: 'Automatización Inteligente',
      description: 'Automatiza procesos repetitivos y libera tiempo para tareas estratégicas. Chatbots, procesamiento de documentos y flujos de trabajo inteligentes.'
    },
    {
      icon: '📊',
      title: 'Análisis de Datos',
      description: 'Convierte tus datos en insights accionables. Dashboards interactivos, predicciones y análisis que ayudan a tomar mejores decisiones.'
    },
    {
      icon: '💬',
      title: 'Atención al Cliente IA',
      description: 'Mejora la experiencia de tus clientes con chatbots inteligentes disponibles 24/7 que resuelven consultas y generan leads.'
    },
    {
      icon: '🎯',
      title: 'Marketing Inteligente',
      description: 'Optimiza tus campañas con IA. Segmentación de audiencia, personalización de contenido y predicción de tendencias de mercado.'
    },
    {
      icon: '📈',
      title: 'Optimización de Inventario',
      description: 'Predice la demanda, optimiza stock y reduce costos. Sistemas inteligentes que aprenden de tus patrones de venta.'
    },
    {
      icon: '🔒',
      title: 'Seguridad y Detección',
      description: 'Protege tu negocio con sistemas de detección de fraudes, análisis de riesgos y monitoreo inteligente de transacciones.'
    }
  ]

  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Soluciones de IA diseñadas específicamente para las necesidades de pequeñas empresas
        </p>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

