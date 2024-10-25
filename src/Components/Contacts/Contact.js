import React from 'react'
import './Contact.css'
import themePattern from '../../Assets/theme_pattern.svg'
import mailIcon from '../../Assets/mail_icon.svg'
import locationIcon from '../../Assets/location_icon.svg'
import callIcon from '../../Assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9ce8559e-35df-460d-ba7c-ced5cb53dae2");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }

    }

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={themePattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailIcon} alt="" />
                        <p>nagarjunareddy7104@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <img src={callIcon} alt="" />
                        <p>8897952957</p>

                    </div>
                    <div className="contact-detail">
                        <img src={locationIcon} alt="" />
                        <p>Bodduvaripalem,Ongole</p>

                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message</label>
                <textarea name="message" id="" rows="8" placeholder='Enter the message here' ></textarea>
                <button className="contact-submit"type='submit'>Submit now</button>
            </form>
           
        </div>
      
    </div>
  )
}

export default Contact
