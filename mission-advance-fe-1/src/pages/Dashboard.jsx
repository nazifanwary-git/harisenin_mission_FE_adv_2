import DashboardContent from "../components/Dashboard/DashboardContent";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function DashboardPage() {

    return (
        <div className="flex flex-col bg-[#FFFDF3]">
            <Header showMenu={true} />
            <DashboardContent />
            <Footer />
        </div>
    )
}