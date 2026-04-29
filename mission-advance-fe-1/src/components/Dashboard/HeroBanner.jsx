import HeroBgImage from "../../assets/heroBanner.jpg"
import Buttons from "../Buttons"

export default function HeroBanner() {

    return (
        <div className="min-w-80 min-h-100 relative overflow-hidden rounded-xl flex items-center justify-center px-5">
            <img src={HeroBgImage} alt="Hero Banner"
                className="absolute w-full h-full inset-0 object-cover" />

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="flex flex-col gap-6 relative z-10 items-center justify-center
            sm:max-w-230">
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-2xl sm:text-5xl font-poppins font-bold text-white">
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                    </h1>

                    <p className="text-sm sm:text-base font-dm-sans font-medium text-white">
                        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                </div>

                <Buttons
                    className="text-sm sm:text-base max-w-93"
                    btnStyle="primary">
                    Temukan Video Course untuk Dipelajari!
                </Buttons>
            </div>
        </div>
    )
}