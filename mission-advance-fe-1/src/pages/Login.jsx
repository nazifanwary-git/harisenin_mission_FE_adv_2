
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/Authentication/LoginForm";


export default function LoginPage() {



    return (
        <div className="bg-[#FFFDF3] min-w-screen min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header showMenu={false} />

            <LoginForm />

            <Footer />
        </div>
    )
}