import './BackgroundTexture.css';
import fondoTexture from '../../assets/images/Fondo.png';

export default function BackgroundTexture() {
  return (
    <div className="background-texture" aria-hidden="true">
      <img
        src={fondoTexture}
        alt=""
        className="background-texture__img"
        loading="eager"
      />
    </div>
  );
}
