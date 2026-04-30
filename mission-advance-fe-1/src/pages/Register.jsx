
import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterForm from "../components/Authentication/RegisterForm";


export default function RegisterPage() {

    return (
        <div className="bg-[#FFFDF3] min-w-screen min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header showMenu={false} />

            <RegisterForm />

            <Footer />
        </div>
    )
}