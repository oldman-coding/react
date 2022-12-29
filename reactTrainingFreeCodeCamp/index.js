// import "./index.css"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
    return (
        <React.Fragment>
            <Header />
            <MainContent />
            <Footer />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById("root")) 