import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src="/TeaWayVector.svg" className="logo-img" />
        <div className="logo-title">Tea Way</div>
      </div>
    </Link>
  );
};

export default Logo;
