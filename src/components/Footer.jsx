import React from 'react'

import footer1 from '../img/footer1.png'
import footer2 from '../img/footer2.png'
import footer3 from '../img/footer3.png'
import footer4 from '../img/footer4.svg'

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer--contacts__info">
          <h2>Contacts</h2>
          <p>Want to know more or just chat? <br></br> You are welcome!</p>
          <button>Send Message</button>
          <div className="footer--contacts__img">
            <img src={footer1} alt="#!"></img>
            <img src={footer2} alt="#!"></img>
            <img src={footer3} alt="#!"></img>
            <img src={footer4} alt="#!"></img>
          </div>
          <p>Like me on <br></br> LinkedIn, Instagram, Behance, Dribble</p>
        </div>
      </div>
    </div>

  )
}

export default Footer