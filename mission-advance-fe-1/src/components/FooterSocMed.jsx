import LinkedInLogo from "../assets/linkedin_Icon.png"
import FacebookLogo from "../assets/facebook_icon.png"
import InstagramLogo from "../assets/instagram_icon.png"
import TwitterLogo from "../assets/twitter_icon.png"

export default function FooterSocMed() {
    return (
        <div className="flex gap-3.75">
            <div className="flex w-8.75 h-8.75 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={LinkedInLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
            <div className="flex w-8.75 h-8.75 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={FacebookLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
            <div className="flex w-8.75 h-8.75 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={InstagramLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
            <div className="flex w-8.75 h-8.75 
            items-center justify-center rounded-full 
            border-[1.5px] border-solid
            border-gray-400">
                <img src={TwitterLogo} alt="" className="flex w-5 h-5 object-contain" />
            </div>
        </div>
    )
}