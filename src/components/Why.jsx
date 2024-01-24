import Rectangle from "../assets/Rectangle.jpg";
import Arrow from "../assets/arrow.jpg";

const Why = () => {
  const articles = [
    {
      id: 1,
      title: "Crystal-clear HD video",
      paragraph:
        "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M22 9.43137C22 8.82555 22 8.52265 21.8802 8.38238C21.7763 8.26068 21.6203 8.19609 21.4608 8.20865C21.2769 8.22312 21.0627 8.43731 20.6343 8.86569L17 12.5L20.6343 16.1343C21.0627 16.5627 21.2769 16.7769 21.4608 16.7914C21.6203 16.8039 21.7763 16.7393 21.8802 16.6176C22 16.4774 22 16.1744 22 15.5686V9.43137Z"
            stroke="#175CD3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 10.3C2 8.61984 2 7.77976 2.32698 7.13803C2.6146 6.57354 3.07354 6.1146 3.63803 5.82698C4.27976 5.5 5.11984 5.5 6.8 5.5H12.2C13.8802 5.5 14.7202 5.5 15.362 5.82698C15.9265 6.1146 16.3854 6.57354 16.673 7.13803C17 7.77976 17 8.61984 17 10.3V14.7C17 16.3802 17 17.2202 16.673 17.862C16.3854 18.4265 15.9265 18.8854 15.362 19.173C14.7202 19.5 13.8802 19.5 12.2 19.5H6.8C5.11984 19.5 4.27976 19.5 3.63803 19.173C3.07354 18.8854 2.6146 18.4265 2.32698 17.862C2 17.2202 2 16.3802 2 14.7V10.3Z"
            stroke="#175CD3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Noise-canceling audio",
      paragraph:
        "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M3 10.5L3 14.5M7.5 6.5L7.5 18.5M12 3.5V21.5M16.5 6.5V18.5M21 10.5V14.5"
            stroke="#175CD3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Scheduling made easy",
      paragraph:
        "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M22 9.43137C22 8.82555 22 8.52265 21.8802 8.38238C21.7763 8.26068 21.6203 8.19609 21.4608 8.20865C21.2769 8.22312 21.0627 8.43731 20.6343 8.86569L17 12.5L20.6343 16.1343C21.0627 16.5627 21.2769 16.7769 21.4608 16.7914C21.6203 16.8039 21.7763 16.7393 21.8802 16.6176C22 16.4774 22 16.1744 22 15.5686V9.43137Z"
            stroke="#175CD3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 10.3C2 8.61984 2 7.77976 2.32698 7.13803C2.6146 6.57354 3.07354 6.1146 3.63803 5.82698C4.27976 5.5 5.11984 5.5 6.8 5.5H12.2C13.8802 5.5 14.7202 5.5 15.362 5.82698C15.9265 6.1146 16.3854 6.57354 16.673 7.13803C17 7.77976 17 8.61984 17 10.3V14.7C17 16.3802 17 17.2202 16.673 17.862C16.3854 18.4265 15.9265 18.8854 15.362 19.173C14.7202 19.5 13.8802 19.5 12.2 19.5H6.8C5.11984 19.5 4.27976 19.5 3.63803 19.173C3.07354 18.8854 2.6146 18.4265 2.32698 17.862C2 17.2202 2 16.3802 2 14.7V10.3Z"
            stroke="#175CD3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Bank-grade security",
      paragraph:
        "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M7 10.5V8.5C7 5.73858 9.23858 3.5 12 3.5C13.6358 3.5 15.0882 4.28555 16.0004 5.5M12 14.5V16.5M19 15.5C19 19.366 15.866 22.5 12 22.5C8.13401 22.5 5 19.366 5 15.5C5 11.634 8.13401 8.5 12 8.5C15.866 8.5 19 11.634 19 15.5Z"
            stroke="#175CD3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="mx-32 flex flex-col">
      <div className="relative flex">
        <div className="flex flex-col gap-y-4">
          <h4 className="text-blue-700 text-xs font-semibold ">
            The ClearLink Advantage
          </h4>
          <h1 className="text-3xl font-semibold text-gray-800 font-['Inter']">
            Why choose ClearLink?
          </h1>
          <p className="w-3/4 text-gray-500">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
        <div className="translate-y-24 ">
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="flex space-x-6 my-24">
        <div className="w-2/3 grid grid-cols-2 gap-4">
          {articles.map(({ id, title, paragraph, icon }) => {
            return (
              <div className="flex flex-col space-y-3" key={id}>
                <div className="bg-blue-50 rounded-full w-12 h-12 p-3 border">
                  {icon}
                </div>
                <h2 className="text-gray-900 font-semibold text-xl">{title}</h2>
                <p className="text-gray-600 text-sm">{paragraph}</p>
              </div>
            );
          })}
        </div>
        <div>
          <img className="" src={Rectangle} alt="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Why;
