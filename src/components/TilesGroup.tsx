import Tile from './Tile';
import type { TileData } from '../types/tileData';

type TilesGroupProps = {
  tiles: TileData[];
  carousel?: boolean;
};

const TilesGroup = ({ tiles, carousel }: TilesGroupProps) => {
  return (
    <div className={carousel ? 'tile-carousel' : 'tile-group'}>
      {tiles.map(({ url, label, imageSrc }) => (
        <Tile key={url} url={url} label={label} imageSrc={imageSrc} />
      ))}
    </div>
  );
};

export default TilesGroup;
