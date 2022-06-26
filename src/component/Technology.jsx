
import React from 'react';
import {Link} from 'react-router-dom';

const Technology = () => {
  return (
    <>
    <h1 className='Home-latest'>Technology</h1>
    <div className='tour'>
     <div>
      <Link to="/Technology/Category/article/1">
        <img src={require('./imagestech2.jpg')} height={200} width={300}/></Link>
        <h3>South Korea to Concentrate on R&D in 10 Sectors</h3>
        <p>South Korea is aiming to surpass Japan and the European Union within 10 years in the 10 industries including <br></br>artificial intelligence, 5G and 6G communications, biotech, robot, quantum, and aviation and aerospace.</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={require('./cyber.jpg')}  height={200} width={300}/>
        <h3>South Korea joins NATO Cyber Defence Centre</h3>
        <p>NATO’s Cooperative Cyber Defence Centre of Excellence (CCDCOE) has admitted South Korea, the first Asian country to join. </p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={require('./fintech.jpeg')}  height={200} width={300}/>
        <h3>Korea fintech landscape and opportunities</h3>
      <p>Korea has become the first country in the world to legally allow app developers to offer third-party payment<br></br> services at Google Play or Apple Store. It is a remarkable victory for third-party payment<br></br> systems as it opens the door for many innovative solutions</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={require('./spy.jpg')}  height={200} width={300}/>
        <h3>From spy satellites to mobile networks, S.Korea pins space hopes on new rocket</h3>
        <p> South Korea plans to test its first domestically produced space launch vehicle next week, a major step toward jumpstarting the country’s<br></br> space programme and achieving ambitious goals in 6G networks, spy satellites, and even lunar probes.</p>
     <hr className='hori-tour'></hr>
     </div>
    </div>
    <div className='ad-box2'>
    <img src={require('./adsam.png')} width={500} height={800}/>
    </div>
   
   
    <h2 className='Home-latest'>Latest Stories</h2>
    <div className='stories'>
    <span>
<img src={ require('./railway.jpg')} height={200} width={300} />
<h3>S. Korea's railway wireless charging system <br></br>attracts attention from experts</h3>
<p> SEOUL -- South Korea's wireless charging system for railways has attracted attention from experts who held an online <br></br>meeting to establish international standards. Discussions focused on the method<br></br> of coils, which are vital in a wireless charging system. South Korea has proposed an oval coil method.
 </p>
</span>
<span>
<img src ={require('./software.jpg')} height={200} width={300}/>
<h3>Redbrick</h3>
  <p>Redbrick is a Koren startup that was founded in 2018 and is currently based in Yeoksamdong, South Korea.<br></br> The company has developed and released a platform that allows for the creation of software and also supplements this with educational<br></br> support to help to fill the gap in available high-quality education for AI and other high-tech concepts.</p>
</span>
<span>
<img src={require('./robotic.jpg')} height={200} width={300}/>
<h3>Seoul Robotics</h3>
    <p>Seoul Robotics is a startup in Korea that was founded in 2017 and is currently based in the city of Seoul.<br></br> The company creates advanced LIDAR detection technology to assist self-driving vehicles and robots to detect obstructions and<br></br> allow for them to act.  </p>
</span>
</div>
   
    </>
  )
}

export default Technology