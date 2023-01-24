import facebookIcon from '../assets/fb-icon.png'
import instagramIcon from '../assets/instagram-icon.png'
import twitterIcon from '../assets/twitter-icon.png'
import githubIcon from '../assets/github-icon.png'

export default function Footer() {
    return (
        <>
            <div className="footer--container">
                <footer>
                    <ul className="footer--img_lists">
                        <li>
                            <a href='#' title='facebook'>
                                <img src={facebookIcon} />
                            </a>
                        </li>
                        <li>
                            <a href='#' title='instagram'>
                                <img src={instagramIcon} />
                            </a>
                        </li>
                        <li>
                            <a href='#' title='twitter'>
                                <img src={twitterIcon} />
                            </a>
                        </li>
                        <li>
                            <a href='#' title='github'>
                                <img src={githubIcon} />
                            </a>
                        </li>

                    </ul>
                </footer>
            </div>
        </>
    )
}