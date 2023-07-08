import { NavLink } from "react-router-dom";
import "./errorPage.scss" ;
import logo404 from "../../assets/images/404.png"
function ErrorPage() {
 // const error = useRouteError();
  //console.error(error);

  return (
    <section className="errorSection">
      <div>
        <img src={logo404} alt="erreur 404" />
      </div>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <NavLink to="/">
      <p>Retourner sur la page d accueil </p>
      </NavLink>
    </section>
  );
}

export default ErrorPage;