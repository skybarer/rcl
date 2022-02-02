import React from 'react'
import FBIcon from '../../assets/icons/facebook.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'
import LinkedinIcon from '../../assets/icons/linkedin.svg'
import GithubIcon from '../../assets/icons/github.svg'
import RedditIcon from '../../assets/icons/reddit.svg'
import InstagramIcon from '../../assets/icons/instagram.svg'

const SocialMedia = () => {
    return (
        <section className="social-media-card">
            <div className="card-text">
                <h2 className="card-title">Stay in touch</h2>
            </div>
            <div className="card-content">
                <div className="social">
                    <a href="https://twitter.com/skybarer" target="_blank" rel="noopener noreferrer" >
                        <span className="social-twitter">
                            <TwitterIcon />
                        </span>
                        <label>Twitter</label>
                    </a>
                </div>
                <div className="social">
                    <a href="https://github.com/skybarer/" target="_blank" rel="noopener noreferrer" >
                        <span className="social-github">
                            <GithubIcon />
                        </span>
                        <label>Github</label>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/skybarer/" target="_blank" rel="noopener noreferrer" >
                        <span className="social-linkedin">
                            <LinkedinIcon />
                        </span>
                        <label>Linkedin</label>
                    </a>
                </div>
                <div className=" social">
                    <a href="https://www.facebook.com/skybarer" target="_blank" rel="noopener noreferrer" >
                        <span className="social-facebook">
                            <FBIcon />
                        </span>
                        <label>Facebook</label>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.reddit.com/user/skybarer" target="_blank" rel="noopener noreferrer" >
                        <span className="social-reddit">
                            <RedditIcon />
                        </span>
                        <label>Reddit</label>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/skybarer/" target="_blank" rel="noopener noreferrer" >
                        <span className="social-instagram">
                            <InstagramIcon />
                        </span>
                        <label>Instagram</label>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SocialMedia