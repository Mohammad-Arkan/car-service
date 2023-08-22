import img1 from '../../../assets/images/banner/1.png'
import img2 from '../../../assets/images/banner/2.png'
import img3 from '../../../assets/images/banner/3.png'
import img4 from '../../../assets/images/banner/4.png'
import img5 from '../../../assets/images/banner/5.png'
import img6 from '../../../assets/images/banner/6.png'

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl"/>
          <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='space-y-8 text-white w-1/2 p-20'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn mr-5 btn-success">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl"/>
          <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='space-y-8 text-white w-1/2 p-20'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn mr-5 btn-success">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl"/>
          <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='space-y-8 text-white w-1/2 p-20'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn mr-5 btn-success">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl"/>
          <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='space-y-8 text-white w-1/2 p-20'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn mr-5 btn-success">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl"/>
          <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='space-y-8 text-white w-1/2 p-20'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn mr-5 btn-success">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl"/>
          <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='space-y-8 text-white w-1/2 p-20'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className=''>
                        <button className="btn mr-5 btn-success">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Banner;