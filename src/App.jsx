import { useState } from 'react'
import { aboutext } from './assets/About'
import { hometext } from './assets/Home'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Realeases } from './pages/Releases'
import { Gigs } from './pages/Gigs'

function App() {
  const langCode = navigator.language.slice(0,2)
  const initialLang = aboutext[langCode] ? langCode : "en"

  const [lang, setLang] = useState(initialLang)
  const [showHome, setShowHome] = useState(true)
  const [showAbout, setShowAbout] = useState(false)
  const [showReleases, setShowRelease] = useState(false)
  const [showGigs, setShowGigs] = useState(false)

  return (
      <div className='main_container'>
        <div>
          <Header 
            lang={lang} 
            setLang={setLang}
            setHome={setShowHome}
            setAbout={setShowAbout}
            setRealeases={setShowRelease}
            setGigs={setShowGigs}
          />
          {showHome && <Home hometext={hometext[lang]}/>}
          {showAbout && <About aboutext={aboutext[lang]} />}
          {showReleases && <Realeases />}
          {showGigs && <Gigs />}
        </div>
        <Footer/>
      </div>
  )
}

export default App
