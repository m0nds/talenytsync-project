import { useState } from "react";

const Support = () => {
  const accordion = [
    {
      id: 1,
      question: "How many participants can join a ClearLink video conference?",
      answer:
        " offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 2,
      question: "Can I use ClearLink on multiple devices?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 3,
      question:
        "Is ClearLink compatible with other video conferencing platforms?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 4,
      question:
        "How does ClearLink ensure the security of my video conferences?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 5,
      question: "Do I need to download any software to use ClearLink?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 6,
      question: "What kind of customer support does ClearLink provide?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
  ];
  const [show, setShow] = useState(false);

  return (
    <div className="mx-32 py-12 flex justify-between">
      <div className="flex flex-col gap-y-4 w-5/12">
        <span className="text-blue-700 font-semibold text-sm">Support</span>
        <h1 className="text-2xl text-gray-800 font-semibold">FAQs</h1>
        <p className="text-gray-500">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please
          <span className="underline"> chat to our friendly team.</span>
        </p>
      </div>
      <div className="flex flex-col w-7/12 p-8 gap-y-10">
        {accordion.map(({ id, question, answer }) => {
          return (
            <div key={id} className={`flex flex-col ${!show && 'border-b'} pb-3`}>
              <div
                className={`${
                  show ? "bg-gray-100 p-4 rounded-lg" : ""
                }`}
              >
                <div className="flex justify-between">
                  <h4 className="text-sm text-gray-900 font-semibold">
                    {question}
                  </h4>
                  <button
                    onClick={() => setShow((prevExpanded) => !prevExpanded)}
                    className="flex"
                  >
                    {show ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#98A2B3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#98A2B3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {show && (
                  <p className="w-5/6 text-gray-600 text-sm transition-all duration-500 ease-in-out">
                    {answer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Support;
