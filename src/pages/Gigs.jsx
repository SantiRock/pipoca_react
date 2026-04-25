import "./Pages.css"

export const Gigs = () => {
    return(
        <div className="main">
            <div className="player">
                <a  className="a_gig" href="https://pipoca.vercel.app/gigs/1may26.jpeg" target="_blank">
                    <img className="img_gig" src="./gigs/1may26.jpeg" alt="1st may" />
                </a>
                <a  className="a_gig" href="https://pipoca.vercel.app/gigs/somos_legados.jpeg" target="_blank">
                    <img className="img_gig" src="./gigs/somos_legados.jpeg" alt="Somos Legados" />
                </a>
            </div>
        </div>
    )
}