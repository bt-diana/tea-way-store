import { Card } from 'antd';
import { Link } from 'react-router-dom';

type TileProps = {
  url: string;
  label: string;
  imageSrc?: string;
};

const Tile = ({ url, label, imageSrc }: TileProps) => {
  return (
    <Link to={url} className="tile">
      <Card
        className="tile-card"
        cover={imageSrc && <img alt={label} src={imageSrc} />}
        title={label}
      />
    </Link>
  );
};

export default Tile;
