import cinvestavLogo from "../../assets/branding/cinvestavipn-logo-photoroom.png";

export function CinvestavLogo() {
  return (
    <div className="cinvestav-logo">
      <div className="cinvestav-logo__mark">
        <img
          src={cinvestavLogo}
          alt="CINVESTAV"
          className="cinvestav-logo__image"
        />
      </div>
      <div className="cinvestav-logo__text">
        <div className="cinvestav-logo__name">CINVESTAV</div>
        <div className="cinvestav-logo__subtitle">
          Centro de Investigación y de Estudios Avanzados del IPN
        </div>
      </div>
    </div>
  );
}
