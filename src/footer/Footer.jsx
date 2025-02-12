import Style from './FooterStyles.module.css';

function Footer() {
  return (
    <div className={Style.footer}>
        <p className={Style.footerText}>&copy; 2025 Hamza NADIFI <br />All rights reserved</p>
    </div>
  )
}

export default Footer