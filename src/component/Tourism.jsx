
import React from 'react'
import { Link } from 'react-router-dom'
import seoul from './seoul2.webp';
import busan from './busan.webp';
import gyeongju from  './Gyeongju.webp';
import dado from './Dado.webp';
import adver from './imagesad.jpg';
import suwon from './suwon.webp';
import seora from './Seora.webp';
import andong from './Andong.webp';


const Tourism = () => {

    return(
        <>
        <h1 className='Home-latest'>Tourism</h1>
        <div className='tour'>
         <div>
            <Link to="/Tourism/Category/article/1">
            <img src={seoul} alt=""/></Link>
            <h3>Seoul: The Dazzling Capital City</h3>
            <p>The dazzling capital city will impress you with its dizzying mix of modern architecture, party vibes, pop culture, beautiful parks &<br></br> glittering promenades making it one of the most famous places in South Korea and the best cities to visit in South Korea.</p>
         <hr className='hori-tour'></hr>
         </div>
         <div>
            <img src={busan} alt=""/>
            <h3>Busan: Something For Everyone</h3>
            <p> This second largest city of South Korea is known across the world for hosting Asia’s largest International film festival.</p>
         <hr className='hori-tour'></hr>
         </div>
         <div>
            <img src={gyeongju} alt=""/>
            <h3>Gyeongju: A Treasure Trove Of Cultural Sites</h3>
            <p> One of the best places to go in South Korea, the coastal city of Gyeongju, often called an open-air museum</p>
         <hr className='hori-tour'></hr>
         </div>
         <div>
            <img src={dado} alt=""/>
            <h3>Dadohaehaesang National Park: The Largest National Park In Korea</h3>
            <p>One of the most besutiful tourist destinations in South Korea, it is the largest National Park in Korea,<br></br> this slice of paradise covers 1700 large and small islands and some rock structures.</p>
         <hr className='hori-tour'></hr>
         </div>
        </div>
        <div className='ad-box2'>
        <img src={adver} width={500} height={800} alt=""/>
        </div>
       
       
        <h2 className='Home-latest'>Latest Stories</h2>
        <div className='stories'>
        <span>
  <img src={ suwon } height={200} width={300} alt=""/>
  <h3>Suwon: Home To A UNESCO World Heritage Site</h3>
    <p>Capital of the Gyeonggi province bordering Seoul, Suwon <br></br>is known for its unique Hwaseong Fortress with its imposing stone walls<br></br> and impressive archways and this has made it one<br></br> of the best places to visit in Korea.
</p>
  </span>
  <span>
  <img src ={seora} height={200} width={300} alt=""/>
  <h3>Seoraksan National Park: A Tentative World <br></br>Heritage Site</h3>
        <p>The vivid strokes of nature will greet you every step<br></br> of the way in the UNESCO protected Seoraksan National Park and is<br></br> one of the most mesmerizing places to witness autumn in Korea.</p>
  </span>
  <span>
  <img src={andong} height={200} width={300} alt=""/>
  <h3>Andong Hahoe Folk Village: Travel Back In Time</h3>
        <p> Literally meaning ‘the village enveloped by water’ this<br></br> charming traditional Korean village located in Andong is a UNESCO World Heritage site. </p>
  </span>
   </div>
       
        </>
    )
}

export default Tourism