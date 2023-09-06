import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'

import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/Capture.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className='container portfolio__container'>
       
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG1}  alt=''/>
           </div>
        <h3> A web application that generates short URLs with a dashboard </h3>
        <h4>Front-end and back-end development using Laravel, MySQL, JavaScript, PHP, HTML, CSS, MySQL, and AngularJS</h4>
        <div className='portfolio__item-cta'>
        <a href='https://githup.com' className='btn'>Github</a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG2}  alt=''/>
           </div>
        <h3> Web/Mobile E-commerce application </h3>
        <h4>Front-end and back-end development using Laravel, PHP, HTML, CSS, MySQL, Android, and Java</h4>
        <br>



        </br>
        <div className='portfolio__item-cta'>
        <a href='https://githup.com' className='btn'>Github</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG3}  alt=''/>
           </div>
        <h3>E-commerce gamesite </h3>
        <h4>Front-end  using ReactJs, CSS, Mongodb, JavaScript</h4>
        <br>



        </br>
        <div className='portfolio__item-cta'>
        <a href='https://github.com/E-CommerceGameSite/Gaming' className='btn'>Github</a>
        </div>
        </article>
        
        </div>
    </section>
  )
}

export default Portfolio