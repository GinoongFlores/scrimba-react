import photo from "../assets/photo-me.jpg"
import mail from "../assets/mail.png"
import linkedin from "../assets/linkedin.png"

export default function Info() {
    return (
        <>
            <img className="info--img" src={photo} alt="photo" />
            <div className="info--container">
                <div className="infos">
                    <h1 className="info--name">Christian Paul H. Flores</h1>
                    <h3 className="info--title">Frontend Developer</h3>
                    <p className="info--website">ginoongflores.vercel.app</p>
                </div>

                <div className="info--buttons_container">
                    <button className="info--email_btn">
                        <img className="info--email_icon" src={mail} />
                        Email</button>

                    <button className="info--linkedin_btn">
                        <img className="info--linkedin_icon" src={linkedin} />
                        LinkedIn</button>
                </div>
            </div>
        </>
    )

}