
import React from 'react';
import {Link} from 'react-router-dom';
import one1 from './one1.png';
import it from './sk-it.jpg';
import food from './sk-food.jpg';
import bts from './BTS.webp';
import movie from './sk-movie.jpg';
import place from './sk-place.jpg';
import articalfood  from './article-food.jpg';
import tech from './tech.jpg';
import space from './swe.jpg';
import blackpink from './blackpink.webp';
import jeju from './jeju.webp';
import ttobu from './ttobu.jpg';
import mainbts from './bts_main.webp';
import samsung from './Samsung.jpg';
import snacks from './snacks.jpg';
import coke from './coke.jpg';

const Home = () => {
  return (
    <>
    <h1 className='home-head'>Let's Visit and Know about the South Korea....</h1>
    <div className='Home-grid'>
      <Link to ="/Home/Category/article/1/Tourism">
   <img  className= "H1"src= {one1} height={400} width={600} alt="one"/></Link>
   <img  className= "H2"src={it} height={200} width={300} alt="tech"/>
   <img  className = "H3"src={food} height={200} width={300}  alt="food"/>
   </div>
   <p style={{textAlign:"center"}}>South Korea,[b] officially the Republic of Korea (ROK),[c] is a country in East Asia, constituting the southern part of the Korean Peninsula and sharing a land border with North Korea. Its western border is formed by the Yellow Sea, while its eastern border is defined by the Sea of Japan. South Korea claims to be the sole legitimate government of the entire peninsula and adjacent islands. It has a population of 51.75 million, of which roughly half live in the Seoul Capital Area, the fifth largest metropolis in the world. Other major cities include Incheon, Busan, and Daegu</p>
   
   <h2 className='Home-latest'>The Latest</h2>
   <div className='latest'>
    <span>
  <img className= "latest-bts"src={ bts} height={200} width={300} alt="bts"/>
  <h3>BTS</h3>
    <p>K-pop superband bts has confirmed that its latest album 'Proof'<br></br> will stretch across three CDs and consist of 48 tracks. </p>
  </span>
  <span>
  <img src ={movie} height={200} width={300} alt="movie"/>
  <h3>The Day I Died</h3>
        <p>Se-jin (Roh Jeong-eui) disappears on a dark and stormy night. <br></br>Se-jin's death is simply dismissed as a suicide by local detectives.<br></br> Hyeon-soo has to find  the truth behind the suspicious disappearance of the teenage girl.</p>
  </span>
  <span>
  <img src={place} height={200} width={300} alt="place"/>
  <h3>Jinhae</h3>
        <p> Each spring, the city holds the largest cherry blossom festival in South Korea,<br></br> with hundreds of thousands of pink trees lining streets, railways, and streams.</p>
  </span>
   </div>
   
   <h2 className='Home-latest'>Latest Articles</h2>
   <div className='article'>
    <div>
    <img src={articalfood } height={200} width={300} alt="food"/>
      <h3>Red rice cakes (tteokbokki)</h3>
      <p>Tteokbokki is a traditional Korean street food that’s made with thick slices of garaetteok</p>
      <hr></hr>
      </div>
      <div>
    <img src={tech} height={200} width={300} alt="tech"/>
      <h3>Robots march into more business sectors</h3>
      <p>The advent of intelligent humanoid robots depicted in sci-fi films is still thought to be a thing of the distant future, but more South Korean companies in a wide range of industries have begun to adopt simpler robots in a bid to remain competitive in the long term.</p>
      <hr></hr>
      </div>
      <div>
    <img src={space} height={200} width={300} alt="sweeper"/>
      <h3>Space Sweepers</h3>
      <p>The story follows the crew of a space junk collector ship called The Victory, as they discover a child humanoid robot and embark on an epic space adventure.</p>
      <hr></hr>
      </div>
   </div>
   <h2 className='Home-latest' style={{textAlign:"right"}}>Top Post</h2>
   <div className='post'>
   
    <div>
        <img src={blackpink} alt="blackpink"/>
        <h3>Blackpink</h3>
        <p>Blackpink (Korean: 블랙핑크; romanized: Beullaegpingkeu; Japanese: ブラックピンク; romanized: Burakkupinku; commonly stylized as BLɅϽKPIИK) is a South Korean girl group formed by YG Entertainment, consisting of members Jisoo, Jennie, Rosé, and Lisa</p>
        <hr></hr>
    </div>
    <div>
    <img src={jeju } alt="jeju"/>
        <h3>Jeju Island: A Stunning Island</h3>
        <p>This stunning island just 85 Kilometers off the coast is one of the most beautiful places in South Korea and one of the most famous places in South Korea</p> 
        <hr></hr>
    </div>
    <div>
    <img src={ttobu} alt="ttobu"/>
        <h3>Train to Busan</h3>
        <p>Seok-woo and his daughter are on a train to Busan on the latter's birthday to see his wife. However, the journey turns into a nightmare when they are trapped amidst a zombie outbreak in South Korea.</p> 
     <hr></hr>
        </div>

   </div>

   <h2 className='Home-latest'>Latest Stories</h2>
   <div className='stories'>
    <span>
  <img src={ mainbts } height={200} width={300} alt="mainbts"/>
  <h3>BTS</h3>
    <p>'Cause I-I-I'm in the stars tonight<br></br>
So watch me bring the fire and set the night alight
</p>
  </span>
  <span>
  <img src ={samsung} height={200} width={300} alt="samsung"/>
  <h3>Samsung</h3>
        <p>MEANING OF THE SAMSUNG LOGO: In Korean, the word Samsung means<br></br> “three stars.” The name was chosen by Samsung<br></br> founder Lee Byung-chull</p>
  </span>
  <span>
  <img src={snacks} height={200} width={300} alt="snacks"/>
  <h3>Ramen</h3>
        <p> ramen in general has been the second most popular Korean food.</p>
  </span>
   </div>

   <hr></hr>
   <div className='ad-box'>
    <img src={coke} height={400} width={500} alt="coke"/>
   </div>
   </>
  )
}

export default Home