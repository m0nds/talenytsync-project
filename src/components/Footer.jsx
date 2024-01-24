import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'

const Footer = () => {
    const links = [
        {id: 1, name: twitter},
        {id: 2, name: youtube},
        {id: 3, name: github},
        {id: 4, name: linkedin},
        {id: 5, name: facebook},
        {id: 6, name: instagram},
    ]
  return (
    <div className="bg-gray-50 py-12 mx-28 p-4 flex justify-between">
        <span className='text-gray-500 text-base font-normal font-["Inter"] leading-normal'>© 2023 ClearLink. All rights reserved.</span>
        <div className="flex space-x-4">
            {links.map(({id, name}) => {
                return <img key={id} src={name} alt="" />
            })}
        </div>
    </div>
  )
}

export default Footer