import MockUp from '../assets/Mockup.png'

const Ready = () => {
  const items = [
    { id: 1, name: "30 days free trial" },
    { id: 2, name: "Cancel at any time" },
    { id: 3, name: "Access to all features" },
    { id: 4, name: `Personalized onboarding` },
  ];
  return (
    <div className="mx-32 py-12 flex justify-between">
      <div className='w-1/2 flex flex-col gap-10'>
        <h1 className="w-[510px] text-gray-900 text-4xl font-semibold font-['Inter']">Ready to clear the path to perfect communication?</h1>
        <div className='flex flex-col gap-y-4'>
          {items.map(({ id, name }) => {
            return (
              <div className='flex items-center gap-x-3' key={id}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <path
                    d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
                    stroke="#175CD3"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className='text-slate-600'>{name}</span>
              </div>
            );
          })}
        </div>
        <div className="flex space-x-4">
            <button className='border border-gray-600 text-sm font-medium text-gray-800 bg-white py-2 px-3 rounded-full'>Talk to sales</button>
            <button className='text-sm font-medium bg-blue-700 text-white py-2 px-3 rounded-full'>Start your free trial</button>
        </div>
      </div>
      <div className='w-[740px] h-[500px] flex-nowrap  shrink-0 '>
        <img className='w-[1600px] h-[500px] rounded-tl-xl object-cover relative' src={MockUp} alt="" />
      </div>
    </div>
  );
};

// w-[1024px] h-[682px] rounded-xl border-8 border-gray-900 justify-center items-center inline-flex flex-nowrap shrink-0
// w-[1024px] h-[682px] relative rounded-xl

export default Ready;
