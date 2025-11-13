import styles from '../styles/Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      company: 'Boutique Elegance',
      role: 'Directora General',
      content: 'La automatización de nuestro inventario con IA nos ahorró 15 horas semanales. Ahora podemos enfocarnos en lo que realmente importa: nuestros clientes.',
      rating: 5
    },
    {
      name: 'Carlos Ramírez',
      company: 'TechSolutions',
      role: 'CEO',
      content: 'El chatbot que implementaron aumentó nuestras conversiones en un 30%. Nuestros clientes están más satisfechos y nuestro equipo puede trabajar en proyectos estratégicos.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      company: 'Café Artesanal',
      role: 'Propietaria',
      content: 'Gracias al análisis predictivo, ahora sabemos exactamente cuánto inventario necesitamos. Redujimos desperdicios en un 40% y aumentamos nuestras ganancias.',
      rating: 5
    }
  ]

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
        <p className="section-subtitle">
          Empresas que ya están transformando su negocio con IA
        </p>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.rating}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className={styles.content}>&ldquo;{testimonial.content}&rdquo;</p>
              <div className={styles.author}>
                <div>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

