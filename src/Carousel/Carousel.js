import "./Carousel.css"
export function Carousel(){

    return(

        <>
<div id="carouselExampleCaptions" className="carousel slide animate__animated animate__backInRight" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">

      <img src="https://firebasestorage.googleapis.com/v0/b/spotifi-3ba97.appspot.com/o/wos2.webp?alt=media&token=516b5d3a-5022-4273-9c58-ce5f95654ee4" height="600" className="w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">

        <h5>Wos ganando la RED BULL 2019</h5>
        <p>Insano el wos.</p>
      </div>
    </div>
    <div className="carousel-item">

      <img src="https://firebasestorage.googleapis.com/v0/b/spotifi-3ba97.appspot.com/o/wosito.jpg?alt=media&token=39c71b30-6515-4d57-8e3d-b482d1d1d253" height="600" className="w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block display-flex ">

        <h5>Wos en la FMS 2018, la cual perdio</h5>
        <p>Malardo wos</p>
      </div>
    </div>
    <div className="carousel-item">

      <img src="https://firebasestorage.googleapis.com/v0/b/spotifi-3ba97.appspot.com/o/insanowos.jpg?alt=media&token=5069f68a-9050-4674-96a7-d9cabd87872f" height="600" className="w-100" alt="..."/>

      <div className="carousel-caption d-none d-md-block">
        <h5>WOS en la FMS en sus inicios por 2015</h5>
        <p>Wos todo un capo iniciando</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}