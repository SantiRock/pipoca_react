import "./Pages.css"

export const Home = ({hometext}) => {
    return(
        <div className="main home_c">

            <iframe width="100%"height="100%"src="https://www.youtube.com/embed/videoseries?si=Pr1a_adxmYRfdf0_&amp;list=PLAQdXQOQHdBLmDFHemjh0XbfWMNg3CIfO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uORm68w1ToY?si=P-Vogsnk_NUCrNtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Bx8Crhexzx0?si=pfpDebs_Q4F8w3sf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <p className="ph">{hometext.next}</p>
        </div>
    )
}
