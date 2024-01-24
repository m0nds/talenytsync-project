import Shopify from "../assets/Shopify.jpg";
import sarah from "../assets/sarah.png";
import Testimonial1 from "../assets/Testimonial1.png";
import Testimonial2 from "../assets/Testimonial2.png";
import Testimonial3 from "../assets/Testimonial3.png";
import Testimonial4 from "../assets/Testimonial4.png";
import Testimonial5 from "../assets/Testimonial5.png";

const Testimonial = () => {
  const stars = [
    {
      id: 1,
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_2792_412)">
            <path
              d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
              fill="#FDB022"
            />
          </g>
          <defs>
            <clipPath id="clip0_2792_412">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 2,
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_2792_412)">
            <path
              d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
              fill="#FDB022"
            />
          </g>
          <defs>
            <clipPath id="clip0_2792_412">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_2792_412)">
            <path
              d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
              fill="#FDB022"
            />
          </g>
          <defs>
            <clipPath id="clip0_2792_412">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 4,
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_2792_412)">
            <path
              d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
              fill="#FDB022"
            />
          </g>
          <defs>
            <clipPath id="clip0_2792_412">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 5,
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_2792_412)">
            <path
              d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
              fill="#FDB022"
            />
          </g>
          <defs>
            <clipPath id="clip0_2792_412">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="mx-32 py-12 flex gap-x-6">
      <div className="w-1/2">
        <img className="py-12" src={Shopify} alt="" />
        <div className="flex gap-x-1 items-center">
          {stars.map(({ id, image }) => {
            return <span key={id}>{image}</span>;
          })}
        </div>
        <h1 className="py-12 text-3xl text-gray-800 font-['Inter'] font-medium">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h1>
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img src={sarah} alt="" />
            <div className="flex flex-col gap-y-2">
              <span className="text-sm font-semibold text-gray-900">Sarah Thompson</span>
              <span className="text-gray-600 text-xs">Project Manager, Shopify</span>
            </div>
          </div>
          <div className="flex px-12 gap-x-3">
            <div className="bg-blue-50 cursor-pointer rounded-full w-12 h-12 p-3 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="#175CD3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-blue-50 cursor-pointer rounded-full w-12 h-12 p-3 border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#175CD3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex justify-center gap-x-4 items-end">
          <img
            src={Testimonial1}
            className="shrink-0 w-[160px] h-[160px] object-cover"
            alt=""
          />
          <img
            src={Testimonial2}
            className="shrink-0 w-[160px] h-[240px] object-cover"
            alt=""
          />
        </div>
        <div className="flex gap-x-4 justify-center">
          <img
            src={Testimonial3}
            className="shrink-0 w-[192px] h-[128px] object-cover"
            alt=""
          />
          <img
            src={Testimonial4}
            className="shrink-0 w-[160px] h-[240px] object-cover"
            alt=""
          />
          <img
            src={Testimonial5}
            className="shrink-0 w-[192px] h-[128px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
