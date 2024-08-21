import { Route, Switch } from 'wouter'
// Pages
import Mision from './pages/mision/mision'
// Components
import Header from './pages/components/Header'
import HeroSlider from './pages/components/HeroSlider'
import OurProgrammes from './pages/components/OurProgrammes'
import SectionForm from './pages/components/SectionForm'
import Footer from './pages/components/Footer/footer'

function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <OurProgrammes />
      <SectionForm />
      <Footer />
      
      <Switch>
        <Route path='/mision' component={Mision} />
      </Switch>
    </>
  )
}

export default App
