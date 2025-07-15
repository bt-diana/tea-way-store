import { Card } from 'antd';
import { Link } from 'react-router-dom';
import type { TileData } from '../types/tileData';

type TileProps = TileData;

const Tile = ({ url, label, imageSrc }: TileProps) => {
  return (
    <Link to={url} className="tile">
      <Card
        className="tile-card"
        cover={<img alt={label} src={imageSrc} />}
        title={label}
      />
    </Link>
  );
};

export default Tile;
