import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.logo}>Automia</h3>
            <p className={styles.description}>
              Transformando pequeñas empresas con inteligencia artificial.
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.title}>Servicios</h4>
            <ul className={styles.links}>
              <li><a href="#servicios">Automatización</a></li>
              <li><a href="#servicios">Análisis de Datos</a></li>
              <li><a href="#servicios">Chatbots</a></li>
              <li><a href="#servicios">Marketing IA</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4 className={styles.title}>Empresa</h4>
            <ul className={styles.links}>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4 className={styles.title}>Contacto</h4>
            <ul className={styles.links}>
              <li>
                <a href="https://wa.me/34634968135" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +34 634 968 135
                </a>
              </li>
              <li>Email: contacto@automia.com</li>
              <li>Horario: Lun - Vie, 9am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 Automia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

