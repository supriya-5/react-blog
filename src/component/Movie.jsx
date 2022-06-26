
import React from 'react'
import { Link } from 'react-router-dom';
import parasite from './parasite.jpg';
import wailing from './wailing.jpg';
import tune from './tune.jpg';
import inside from './inside.webp';
import admovie from './admovie.png';
import always from './Always.jpg';
import hope from './hope.jpg';
import witch from './witch.jpg';


const Movie = () => {
  return (
    <>
    <h1 className='Home-latest'>Movie</h1>
    <div className='tour'>
     <div>
     <Link to="/Movie/Category/article/1">
        <img src={parasite} height={200} width={300} alt="parasite"/></Link>
        <h3>Parasite</h3>
        <p>Parasite (Korean: 기생충; Hanja: 寄生蟲; RR: Gisaengchung) is a 2019 South Korean black comedy thriller film directed <br></br>by Bong Joon-ho, who co-wrote the screenplay with Han Jin-won.</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={wailing}  height={200} width={300} alt="wailing"/>
        <h3>The Wailing</h3>
        <p>The Wailing (Korean: 곡성; Hanja: 哭聲; RR: Gokseong) is a 2016 South Korean horror film written<br></br> and directed by Na Hong-jin and starring Kwak Do-won, Hwang Jung-min, Chun Woo-hee. </p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={tune}  height={200} width={300} alt="tune"/>
        <h3>Tune in for love</h3>
      <p>Tune in for Love (Korean: 유열의 음악앨범; RR: Yooyeolui Eumakaelbum; lit. Yoo Yeol's Music Album),<br></br> is a 2019 South Korean romance film directed by Jung Ji-woo and starring Kim Go-eun and Jung Hae-in.[</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={inside}  height={200} width={300} alt="inside"/>
        <h3>The beauty inside</h3>
        <p> Woo-jin, a furniture designer who wakes up in a different body every day, falls for Yi-soo, a woman he meets through his work.</p>
     <hr className='hori-tour'></hr>
     </div>
    </div>
    <div className='ad-box2'>
    <img src={admovie} width={500} height={800} alt=""/>
    </div>
   
   
    <h2 className='Home-latest'>Latest Stories</h2>
    <div className='stories'>
    <span>
<img src={ always} height={200} width={300} alt="always"/>
<h3>Always</h3>
<p> Always (Korean: 오직 그대만; RR: Ohjik Geudaeman; MR: Ochik kŭtaeman; lit. Only You) is a 2011<br></br> South Korean drama film directed by Song Il-gon. Starring So Ji-sub and Han Hyo-joo in the lead roles, it is about a romance between an ex-boxer <br></br>who has closed his heart to the world and a telemarketer who remains spirited<br></br> despite slowly going blind.[2]
 </p>
</span>
<span>
<img src ={hope} height={200} width={300} alt="hope"/>
<h3>Hope</h3>
  <p>Story of an 8 year old girl coping with a gruesome rape damaging her internally and affecting emotionally, <br></br>trying to overcome all obstacles in the aftermath of the incident with a good support from those around her.</p>
</span>
<span>
<img src={witch} height={200} width={300} alt="witch"/>
<h3>The Witch</h3>
    <p>When she was young, Ja-yoon escaped from a government facility, but lost all her memory. 10 <br></br>years later, when she appears on a nationally televised competition to win<br></br> money for her family, her life is turned upside down by faces from her past.  </p>
</span>
</div>
   
    </>
  )
}

export default Movie