import Automatic from "../assets/Automatic.jpg";
import Marvel from "../assets/Marvel.jpg";
import Coinbase from "../assets/Coinbase.jpg";
import Dropbox from "../assets/Dropbox.jpg";
import Intercom from "../assets/Intercom.jpg";
import Shopify from "../assets/Shopify.jpg";

const SocialProof = () => {
  const links = [
    { id: 1, img: Shopify },
    { id: 2, img: Coinbase },
    { id: 3, img: Dropbox },
    { id: 4, img: Intercom },
    { id: 5, img: Marvel },
    { id: 6, img: Automatic },
  ];

  return (
    <div className="flex  flex-col h-48 my-[96px] mx-4 gap-y-6">
      <span className="text-center text-gray-600 text-sm">
        Join 1,500+ companies already video conferencing the ClearLink way
      </span>
      <div className="flex justify-center space-x-16">
        {links.map(({ id, img }) => {
          return <img src={img} className="w-[130px] h-[36px]" key={id} />;
        })}
      </div>
    </div>
  );
};

export default SocialProof;
