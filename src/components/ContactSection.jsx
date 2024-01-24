import appstore from '../assets/appstore.svg'
import googleplay from '../assets/googleplay.png'

const ContactSection = () => {

    const products = [
        {id:1, name: "Overviews"},
        {id:2, name: "Features"},
        {id:3, name: "Solutions"},
        {id:4, name: "Tutorials"},
        {id:5, name: "Pricing"}
    ]

    const company = [
        {id:1, name: "About Us"},
        {id:2, name: "Careers"},
        {id:3, name: "Press"},
        {id:4, name: "News"},
        {id:5, name: "Contact"},
    ]

    const resources = [
        {id:1, name: "Blog"},
        {id:2, name: "Events"},
        {id:3, name: "Help Centre"},
        {id:4, name: "Tutorials"},
        {id:5, name: "Support"},
    ]

    const legal = [
        {id:1, name: "Terms"},
        {id:2, name: "Privacy"},
        {id:3, name: "Cookies"},
        {id:4, name: "Licenses"},
        {id:5, name: "Contact"},
    ]

  return (
    <div className="mx-32 py-12 flex justify-between">
      {/* clearlink section */}
      <div className='w-[310px] flex flex-col gap-y-4'>
        {/* logo */}
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
          >
            <path
              d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
              fill="#1570EF"
            />
            <path
              d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
              fill="#53B1FD"
            />
          </svg>
          <span className="font-semibold">ClearLink.</span>
        </div>
        {/* paragraph */}
        <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-7">ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
      </div>
      {/* Product */}
      <div className='flex flex-col gap-y-3'>
        <span className='text-gray-500 text-base font-semibold leading-normal'>Product</span>
        {products.map(({id, name}) => {
            return <span className='text-slate-600 text-sm font-semibold font-["Inter"] leading-7 cursor-pointer' key={id}>{name}</span>
        })}
      </div>
      {/* Company */}
      <div className='flex flex-col gap-y-3'>
      <span className='text-gray-500 text-base font-semibold leading-normal'>Company</span>
        {company.map(({id, name}) => {
            return <span className='text-slate-600 text-sm font-semibold font-["Inter"] leading-7 cursor-pointer' key={id}>{name}</span>
        })}
      </div>
      {/* resources */}
      <div className='flex flex-col gap-y-3'>
        <span className='text-gray-500 text-base font-semibold leading-normal'>Resources</span>
        {resources.map(({id, name}) => {
            return <span className='text-slate-600 text-sm font-semibold font-["Inter"] leading-7 cursor-pointer' key={id}>{name}</span>
        })}
      </div>
      {/* legal */}
      <div className='flex flex-col gap-y-3'>
        <span className='text-gray-500 text-base font-semibold leading-normal'>Legal</span>
        {legal.map(({id, name}) => {
            return <span className='text-slate-600 text-sm font-semibold font-["Inter"] leading-7 cursor-pointer' key={id}>{name}</span>
        })}
      </div>
      {/* Get the app */}
      <div className='flex flex-col gap-y-3'>
        <span className='text-blue-700 text-base font-semibold font-["Inter"] leading-normal'>Get the app</span>
        <img src={appstore} alt="" />
        <img src={googleplay} alt="" />
      </div>
    </div>
  );
};

export default ContactSection;
