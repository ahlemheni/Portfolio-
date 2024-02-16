import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'

import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/Capture.PNG'
import IMG4 from '../../assets/carte.png'
import IMG5 from '../../assets/Affiche-xbanner.png'
import IMG6 from '../../assets/front-c-v copie (1).png'
import IMG7  from '../../assets/Composition 1_00000.png'
import IMG8  from '../../assets/affiche3 (1).png'
import IMG9  from '../../assets/A (1).png'
import IMG10  from '../../assets/back_c-v.png'
import IMG11  from '../../assets/carnet (1)_page-0001.jpg'
import IMG12  from '../../assets/Minimalist Business Letterhead (19)_page-0001.jpg'
import IMG13  from '../../assets/Services.jpg'
import IMG14  from '../../assets/AFFICHE IMPRIMANTE copie.png'
import IMG15  from '../../assets/a12879_ecotank-lifestyle_s2_4_001_l3211_lr copie.png'
import IMG16  from '../../assets/Sans titre-2.png'
import IMG17  from '../../assets/carte-visite1__page-0001.jpg'


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
        <h3> Web E-commerce application </h3>
        <h4>Front-end and back-end development using Laravel, PHP, HTML, CSS, MySQL</h4>
        <br>



        </br>
        <div className='portfolio__item-cta'>
        <a href='https://github.com/ahlemheni/Ibuye-commerce' className='btn'>Github</a>
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
        <a href='https://github.com/ahlemheni/E-CommerceGameSite' className='btn'>Github</a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG4}  alt=''/>
           <br>
           </br>
           <img src={IMG6} alt=''/>
           <br>
           </br>
           <img src={IMG17} alt=''/>
           </div>
        <h3>Business Card </h3>
        <h4>Adobe Illustrator</h4>
        <br>



        </br>
        
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG5}  alt=''/>
          
           </div>
        <h3>X-Banner Poster</h3>
        <h4>Adobe Illustrator</h4>
        <br>



        </br>
       
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG7}  alt=''/>
           <br>
           </br>
           <img src={IMG11} alt=''/>
           
           </div>
           <br>



</br>
        <h4>Adobe Photoshop</h4>
        <br>



        </br>
       
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG8}  alt=''/>

           <br>
           </br>
           <img src={IMG13} alt=''/>
          
          
           </div>
        <h3> Poster</h3>
        <h4>Adobe Illustrator</h4>
        <br>



        </br>
        
        
        </article>
        
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          
           <img src={IMG14} alt=''/>
           <br>
           </br>
           <img src={IMG15} alt=''/>
          
          
          
           </div>
        <h3> Poster</h3>
        <h4>Adobe Illustrator</h4>
        <br>



        </br>
        
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG10}  alt=''/>
           <br>
           </br>
           <img src={IMG9}  alt=''/>
          
           </div>
        <h3> Logo</h3>
        <h4>Adobe Illustrator</h4>
        <br>



        </br>
       
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG12}  alt=''/>
          
           </div>
        <h3> letterhead</h3>
        <h4>Adobe Illustrator</h4>
        <br>



        </br>
       
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
           <img src={IMG16}  alt=''/>

          
          
          
           </div>
        <h3> Poster</h3>
        <h4>Adobe Illustrator</h4>
        <br></br>
</article>
        <article className='portfolio__item'>
          
           <div className='portfolio__item-cta'>
        <a href='https://www.mediafire.com/file/gxqk6p0u4aery93/passeport_biométrique.mp4/file' className='btn'>video link</a>
        </div>
        <h3> Passeport Biométrique</h3>
        <h4>Adobe After Effects</h4>
        <br>



        </br>
       
        </article>
        
        
        </div>
    </section>
  )
}

export default Portfolio