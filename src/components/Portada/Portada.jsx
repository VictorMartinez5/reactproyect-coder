import "./Portada.css";

const Portada = () => {
  return (
    <article className="container_portada">
      <div className=" portada"></div>
      <div className="banner">
        <div className="items_banner">
          <i className="bi bi-truck"></i>
          <div>
            <h3 className="title_banner">Envíos gratis</h3>
            <p className="text_banner">En compras superiores a $45.000</p>
          </div>
        </div>
        <div className="items_banner">
          <i className="bi bi-credit-card"></i>
          <div>
            <h3 className="title_banner">3 y 6 cuotas sin interés</h3>
            <p className="text_banner">Con tarjetas de crédito bancarias</p>
          </div>
        </div>
        <div className="items_banner">
          <i className="bi bi-shield-check"></i>
          <div>
            <h3 className="title_banner">Comprá de manera segura</h3>
            <p className="text_banner">Protegemos tus datos</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Portada;
