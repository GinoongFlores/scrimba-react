
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <>
            <div className="main">
                <div className="card">
                    <Info />
                    <div className="about_interest--container">
                        <About />
                        <Interests />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )

}