
import React from 'react'
import {Link} from 'react-router-dom'
import bimbap from './bimbap.webp'
import jap from './jap.webp'
import seafood from './seafood.webp'
import gimbap from './gimbap.webp'
import adfood from './adfood.jpg'
import soup from './soup.webp'
import crab from './crab.webp'
import jjaj from './jjaj.webp'

const  Food= () => {
  return (
    <>
    <h1 className='Home-latest'>Food</h1>
    <div className='tour'>
     <div>
      <Link to="/Food/Category/article/1">
        <img src={bimbap} height={200} width={300} alt="bimbap"/></Link>
        <h3>Bibimbap (Rice Bowl)</h3>
        <p>Bibimbap was created as a Royaldish in yesteryears but slowly it became the favorite staple lunch meal among the Korean dishes.</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={jap}  height={200} width={300} alt="jap"/>
        <h3>Japchae (Stir-Fried Glass Noodles)</h3>
        <p>Arguably Korea’s favourite noodle dish, Japchae is made up of glass noodles stirred in sesame oil with beef, mushrooms,<br></br> and an assortment of other vegetables. These clear, thin noodles are made with sweet potato.</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={seafood}  height={200} width={300} alt="seafood"/>
        <h3>Haemul Pajeon (Seafood Vegetable Pancake)</h3>
      <p>For all seafood lovers out there, Haemul Pajeon is one dish you should put on your list. Crunchy on the outside, this <br></br>pancake is made with rice and egg batter mixed with a variety of seafood and green onions.</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={gimbap}  height={200} width={300} alt="gimbap"/>
        <h3>Kimbap/Gimbap (Korean-Style Sushi)</h3>
        <p> Gimbap or Kimbap is a popular grab-and-go Korean street food which resemble a lot like Japanese sushi rolls. </p>
     <hr className='hori-tour'></hr>
     </div>
    </div>
    <div className='ad-box2'>
    <img src={adfood} width={500} height={800} alt="adfood"/>
    </div>
   
   
    <h2 className='Home-latest'>Latest Stories</h2>
    <div className='stories'>
    <span>
<img src={soup} height={200} width={300} alt="soup"/>
<h3>Sundubu Jjigae (Soft Tofu Stew)</h3>
<p> Soft Tofu Stew is a party of unusual flavours in a bowl. A popular Korean Stew is made with Tofu,<br></br> vegetables, meat, seafood, and chilli paste with a raw egg thrown over the top.<br></br> The stew is served in a large <br></br>stone bowl alongside rice and kimchi.
 </p>
</span>
<span>
<img src ={crab} height={200} width={300} alt="crab"/>
<h3>Soy Sauce Crab</h3>
  <p>Crab marinated in soy sauce or ganjang gejang is an addictive food<br></br> for Koreans. It has a tangy bitter taste and is eaten cold instead of hot.</p>
</span>
<span>
<img src={jjaj} height={200} width={300} alt="jjaj"/>
<h3>Jjajangmyeon</h3>
    <p>Originally a Chinese dish, Korean has acquired Jjajangmyeon and made<br></br> their own thicker, flavorsome and tastier version of it. <br></br>It may not be the most famous Korean food, but Koreans eat <br></br>Jjajangmyeon at least once a week. </p>
</span>
</div>
   
    </>
  )
}

export default Food