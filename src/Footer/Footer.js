export function Footer(){

        return(

            <>
            <footer className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4 className="text-center">&copy; Alejandro Rico Lancheros </h4>
                        <h4 className="text-center">Medallo</h4>
                        <h4 className="text-center">Aprendis Sura</h4>
                        <h4 className="text-center">2022</h4>
                    </div>

                    <div className="col-12 col-md-6 p-5 border-start text-center">
                    <a href="https://co.linkedin.com/in/alejandro-rico-lancheros-b6941a1bb?trk=people-guest_people_search-card" className="col-12 col-md-4 p-5">
                        <i className="bi bi-linkedin fs-1"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100011945113283" className="col-12 col-md-4 p-5 text-info">
                        <i className="bi bi-facebook fs-1"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=rzNiP2fbUio&ab_channel=CloudyNetwork" className="col-12 col-md-4 p-5 text-danger">
                        <i className="bi bi-youtube fs-1"></i>
                    </a>
                    </div>
                </div>
            </footer>
            
            </>
            
        )
}