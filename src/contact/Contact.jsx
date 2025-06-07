import Style from "./ContactStyles.module.css"

import phoneIcon from "../assets/contact/icons8-téléphone-50.png"
import emailIcon from "../assets/contact/icons8-nouveau-message-50.png"
import locationIcon from "../assets/contact/icons8-emplacement-50.png"


function Contact() {
  return (
    <div className={Style.contact}>
        <h1 className={Style.title} id="contact">Contact</h1>
        <div className={Style.contactSection}>
            <div className={Style.info}>
                <div className={Style.parag}>
                    <img src={phoneIcon} alt="number" />
                    <div className={Style.numberInfo}>
                        <div className={Style.paragTitle}>Call Me</div>
                        <div className={Style.paragInfo}>+33 7 53 75 07 92</div>
                    </div>
                </div>
                <div className={Style.parag}>
                    <img src={emailIcon} alt="email" />
                    <div className={Style.emailInfo}>
                        <div className={Style.paragTitle}>Email Me</div>
                        <div className={Style.paragInfo}>nadifihamza07@gmail.com</div>
                    </div>
                </div>
                <div className={Style.parag}>
                    <img src={locationIcon} alt="location" />
                    <div className={Style.locInfo}>
                        <div className={Style.paragTitle}>Location</div>
                        <div className={Style.paragInfo}>Île-de-France</div>
                    </div>
                </div>
            </div>

            <div className={Style.form}>
                <form action="" method="POST">
                    <div className={Style.fullName}>
                        <label htmlFor="name" hidden>Full Name</label>
                        <input type="text" name='name' id='name' placeholder='Name' required/>
                    </div>
                    <div className={Style.email}>
                        <label htmlFor="email" hidden>Email</label>
                        <input type="text" name='email' id='email' placeholder='Email' required/>
                    </div>
                    <div className={Style.phoneNumber}>
                        <label htmlFor="number" hidden>Phone Number</label>
                        <input type="text" name='number' id='number' placeholder='Phone number' required/>
                    </div>
                    <div className={Style.message}>
                        <label htmlFor="message" hidden>Message</label>
                        <textarea name='message' id='message' placeholder='Message' required></textarea>
                    </div>
                    <div className={Style.buttonSubmit}>
                        <input className={Style.hoverbtn}type="submit" value="Submit" name="sent"/>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact