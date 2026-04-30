import FlagIndo from '../../assets/Indonesia (ID).png'
import { ChevronDown } from 'lucide-react';

export default function PhoneSelector() {
    return (
        <div className="
        flex
        min-w-30.5
        max-w-[156.67px]
        border border-solid
        rounded-lg
        border-black/20
        ">
            <div className="
                flex
                justify-center
                items-center
                border-r border-black/20
                bg-gray-100
                rounded-l-lg
                px-2.5
                py-3
                ">
                <img src={FlagIndo} alt="Indonesian Flag" className='w-6 h-6' />
            </div>
            <div className="
                flex
                justify-between
                items-center
                flex-1
                px-2
                ">
                <span>+62</span>
                <ChevronDown />
            </div>
        </div>
    )
}