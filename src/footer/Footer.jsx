import Style from './FooterStyles.module.css';

function Footer() {
  return (
    <div className={Style.footer}>
        <footer className={Style.footerText}>&copy; 2025 Hamza NADIFI <br />All rights reserved</footer>
    </div>
  )
}

export default Footer