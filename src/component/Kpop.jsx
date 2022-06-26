
import React from 'react'
import { Link } from 'react-router-dom'

const Kpop = () => {
  return (
    <>
    <h1 className='Home-latest'>Kpop</h1>
    <div className='tour'>
     <div>
      <Link to="/Kpop/Category/article/1">
        <img src={require('./BTSpop.webp')} height={200} width={300}/></Link>
        <h3>Bangtan Boys</h3>
        <p>The septet—consisting of members Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of their<br></br> own output. Originally a hip hop group, their musical style has since evolved to incorporate a wider range of genres.</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={require('./got7.webp')}  height={200} width={300}/>
        <h3>GOT7</h3>
        <p> Got7 (Korean: 갓세븐; commonly stylized in all caps) is a South Korean boy band formed by JYP Entertainment.<br></br> The group is composed of seven members: Jay B, Mark, Jackson, Jinyoung, Youngjae, BamBam, and Yugyeom. </p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={require('./BP.webp')}  height={200} width={300}/>
        <h3>Blackpink</h3>
        <p> Blackpink (Korean: 블랙핑크; romanized: Beullaegpingkeu; Japanese: ブラックピンク; romanized: Burakkupinku;<br></br> commonly stylized as BLɅϽKPIИK) is a South Korean girl group formed by YG Entertainment, <br></br>consisting of members Jisoo, Jennie, Rosé, and Lisa.</p>
     <hr className='hori-tour'></hr>
     </div>
     <div>
        <img src={require('./twice.webp')}  height={200} width={300}/>
        <h3>Twice</h3>
        <p>Twice is a South Korean girl group formed by JYP Entertainment. The group is composed of <br></br>nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu</p>
     <hr className='hori-tour'></hr>
     </div>
    </div>
    <div className='ad-box2'>
    <img src={require('./imspo.png')} width={500} height={800}/>
    </div>
   
   
    <h2 className='Home-latest'>Latest Stories</h2>
    <div className='stories'>
    <span>
<img src={ require('./EXO.webp')} height={200} width={300} />
<h3>EXO</h3>
<p> Exo is a South Korean-Chinese boy band based in Seoul that was formed by SM Entertainment in 2011 and debuted in 2012.The group consists of nine members: Xiumin, Suho, Lay,<br></br> Baekhyun, Chen, Chanyeol, D.O., Kai and Sehun </p>
</span>
<span>
<img src ={require('./gg.jpg')} height={200} width={300}/>
<h3>Girl Generation</h3>
  <p>Girls' Generation, also known as SNSD, is a South Korean girl group formed by SM Entertainment. <br></br>The group is composed of eight members: Taeyeon, Sunny, Tiffany, Hyoyeon, Yuri, Sooyoung, Yoona, and Seohyun. Originally a nine-piece ensemble, Jessica departed from the group in September 2014.</p>
</span>
<span>
<img src={require('./mm.webp')} height={200} width={300}/>
<h3>MAMAMOO</h3>
    <p>Mamamoo (Korean: 마마무, stylized in all caps)[2] is a South Korean girl group formed by RBW (formerly WA Entertainment) in 2014, composed of four members: Solar, Moonbyul, Wheein and Hwasa.  </p>
</span>
</div>
   
    </>
  )
}

export default Kpop