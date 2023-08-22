import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="w-1/2 absolute rounded-lg shadow-2xl top-1/2 right-10 border-white border-8"/>
            </div>
         
          <div className='lg:w-1/2'>
            <div className='w-3/4 space-y-4'>
                  <p className='text-orange-500 font-bold'>About Us</p>
                  <h1 className="text-5xl font-bold">We are qualified <br/> & of experience <br/> in this field</h1>
                  <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                  <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.  </p>
                  <button className="btn btn-warning">Get More Info</button>
            </div>
          
          </div>
        </div>
      </div>
    );
};

export default About;