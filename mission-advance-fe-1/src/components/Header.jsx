import VideoBelajarLogo from "../assets/LogoVideoBelajar.png";
import HeaderMenu from "./HeaderMenu";

export default function Header({ ...props }) {

    const { showMenu } = props
    return (
        <div className="w-full bg-white drop-shadow-sm flex justify-between py-4 px-6">
            <img src={VideoBelajarLogo} alt="Logo Video Belajar" className="w-38 h-10.5 sm:w-59.25 sm:h-14 object-contain" />
            <HeaderMenu showMenu={showMenu} />
        </div>
    )
}