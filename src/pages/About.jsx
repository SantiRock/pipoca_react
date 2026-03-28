import "./Pages.css"

export const About = ({aboutext}) => {

    return(
        <div className="main">
            <div className="sc">
                <div className="statment">
                    <p className="p1 pa">{aboutext.about}</p>
                    <p className="p1">{aboutext.ai1}</p>
                    <p>{aboutext.ai2}</p>
                    <p>{aboutext.ai3}</p>
                </div>
            </div>
        </div>


    )
}