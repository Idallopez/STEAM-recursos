import '../components/recursosMa.css'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Aside from "../components/Aside/Aside"
import '../index.css'
import Navbar from "../components/Navbar/Navbar"
import CardMA from '../components/CardMA/CardMA'

function RecursosMa(){
    return(
        <>
      <div>
            <Header />
            
            <div className="dashboard-nav-center">

<section className="bar-dropdown">

<input type="checkbox" id="chk-bar"></input>
        <div className="hamburguesa">
      <label for="chk-bar" class="btn-menu">
      <i class="fa-solid fa-bars"></i>
          </label>


        </div>
        <div className="items-bar">
            <Navbar />
        </div>

</section> 
        <div class="main-dere">
        <div><CardMA/></div>
        <div>
            <Aside />
        </div>
        </div>
        </div>
            <Footer />
        </div>
        </>
    )
}
export default RecursosMa