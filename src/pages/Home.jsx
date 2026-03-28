import "./Pages.css"

export const Home = ({hometext}) => {
    return(
        <div className="main home_c">
            <div className="player">
                <iframe style={{border: 0, width: "350px", height: "621px", marginBottom: "13px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3402457687/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://pipocamusic.bandcamp.com/album/laman-di-oro">Laman Di Oro by Pipoca</a></iframe>
                
                <iframe style={{border: 0, width: "350px", height: "621px"}} src="https://bandcamp.com/EmbeddedPlayer/album=43757842/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://pipocamusic.bandcamp.com/album/sou-chimen-la">Sou Chimen La de Pipoca</a></iframe>
            </div>
            <p>{hometext.next}</p>
        </div>
    )
}
