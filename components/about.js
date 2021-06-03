

export default function about() {
    return (

        <section className="about">
            <div className="container">
                <h3>about me if you care</h3>
                <div className="about-divider">
                    <div className="left">

                        <img className="about-img" src='img/plog1.jpg' alt="profile-pic" />
                    </div>
                    <div className="right">
                        <p>I'm Someone from Iraq with no experience in Next.js, Node.js or express.js ! this suppose to be a
                        text
                 that starts with lorum pddjfv but i hate it </p>


                        <div className="social">
                            <div>
                                <a className="icon" href="#"><i className="fab fa-facebook-f fa-2x"></i></a>
                            </div>
                            <div><a className="icon" href="#"><i className="fab fa-instagram fa-2x"></i> </a></div>
                            <div> <a className="icon" href="#"><i className="fab fa-github fa-2x"></i> </a></div>
                            <div> <a className="icon" href="#"> <i className="fab fa-linkedin fa-2x"></i></a></div>
                        </div>

                    </div>
                </div>
            </div>

        </section>

    )
}