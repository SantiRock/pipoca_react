import "./Pages.css"

export const About = ({aboutext}) => {

    return(
        <div className="main">
            <div className="sc">
                <div className="statment">
                    <p className="p1 pa">{aboutext.about}</p>
                    <h2>AI Statement</h2>
                    <p className="p1">{aboutext.ai1}</p>
                    <p>{aboutext.ai2}</p>
                    <p>{aboutext.ai3}</p>

                </div>
                <div className="statment">
                    <h2>{aboutext.diexism_title}</h2>
                    <p className="p1">{aboutext.d1}</p>
                    <p>{aboutext.d2}</p>
                    <p>{aboutext.d3}</p>
                    <p>{aboutext.d4}</p>
                </div>
            </div>
        </div>


    )
}