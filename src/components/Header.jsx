import "../App.css"


export const Header = ({lang, setLang, setHome, setAbout, setRealeases, setGigs}) => {

    const handleHome = () => {
        setHome(true)
        setAbout(false)
        setRealeases(false)
        setGigs(false)
    }

    const handleAbout = () => {
        setHome(false)
        setAbout(true)
        setRealeases(false)
        setGigs(false)
    }

    const handleRealeases = () => {
        setHome(false)
        setAbout(false)
        setRealeases(true)
        setGigs(false)
    }

    const handleGigs = () => {
        setHome(false)
        setAbout(false)
        setRealeases(false)
        setGigs(true)
    }

    return(
        <header>
            <nav>
                <a className="sm" href="https://pipocamusic.bandcamp.com/" target="_blank" >
                    <svg className="icon">
                        <use href="./symbol-defs.svg#bandcamp1"></use>
                    </svg>
                </a>
                <a className="sm" href="https://tidal.com/@pipocatunes" target="_blank" >
                    <svg className="icon">
                        <use href="./symbol-defs.svg#tidal"></use>
                    </svg>
                </a>
                <a className="sm" href="https://www.youtube.com/@pipocatunes" target="_blank" >
                    <svg className="icon">
                        <use href="./symbol-defs.svg#youtube"></use>
                    </svg>
                </a>
                <a className="sm" href="https://open.spotify.com/intl-pt/artist/4I0f33HcR8MtlZYqKpMYiV" target="_blank" >
                    <svg className="icon">
                        <use href="./symbol-defs.svg#spotify"></use>
                    </svg>
                </a>
                <a className="sm" href="https://www.instagram.com/pipocatunes/" target="_blank" >
                    <svg className="icon">
                        <use href="./symbol-defs.svg#instagram"></use>
                    </svg>
                </a>


                <select value={lang} onChange={((e)=> setLang(e.target.value))}  className="lang" id="lang">
                  <option value="es">Español</option>
                  <option value="pt">Português</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="en">English</option>
                </select>
            </nav>

            <div className="menu_c">
                <img className="logo" src="rayito_alpha.png" alt="Pipoca" with="80" height="80" onClick={handleHome}/>
                <p className="menu" onClick={handleAbout}>About</p>
                <a href="https://pipocamusic.bandcamp.com/" target="_blank"><p className="menu" >Releases</p></a>
                <p className="menu" onClick={handleGigs}>Gigs</p>
            </div>   
        </header>
    )
}