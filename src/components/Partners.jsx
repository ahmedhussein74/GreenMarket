import metro from '../images/metro.png'
import carrefour from '../images/carrefour.png'
import hyper from '../images/hyper.png'
import spinneys from '../images/spinneys.png'

const Partners = () => {
  return (
    <section className='py-[50px]'>
      <h1 className="text-center text-slate-900 text-[25px] md:text-[35px] font-bold">
        Our Partners
      </h1>

      <div className="marquee w-[80%] lg:w-[900px] mx-auto mt-[50px] lg:mt-[80px]">
        <div className="marquee__group">
          <img src={metro} className="w-[80px] h-[80px]" />
          <img src={carrefour} className="w-[150px] h-[60px]" />
          <img src={hyper} className="w-[150px] h-[60px]" />
          <img src={spinneys} className="w-[170px] h-[80px]" />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img src={metro} className="w-[80px] h-[80px]" />
          <img src={carrefour} className="w-[150px] h-[60px]" />
          <img src={hyper} className="w-[150px] h-[60px]" />
          <img src={spinneys} className="w-[170px] h-[80px]" />
        </div>
      </div>
    </section>
  );
}

export default Partners