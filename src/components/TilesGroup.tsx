import { useEffect, useState } from 'react';
import { getChildrenTypesByParentId } from '../api/productTypes';
import type { ProductType } from '../types/productType';
import Tile from './Tile';
import ResourceNotFoundPage from '../pages/ResourceNotFoundPage';

type TilesGroupProps = {
  parentTypeId: string;
  carousel?: boolean;
};

const TilesGroup = ({ parentTypeId, carousel }: TilesGroupProps) => {
  const [childrenTypes, setChildrenTypes] = useState<ProductType[] | null>();

  useEffect(() => {
    getChildrenTypesByParentId(parentTypeId).then((types) => {
      setChildrenTypes(types?.length ? types : null);
    });
  }, [parentTypeId]);

  if (childrenTypes === null) {
    return <ResourceNotFoundPage />;
  }

  if (childrenTypes) {
    return (
      <div className={carousel ? 'tile-carousel' : 'tile-group'}>
        {childrenTypes.map(({ id, name, imageSrc }) => (
          <Tile
            key={id}
            url={`/catalog/${id}`}
            label={name}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    );
  }
};

export default TilesGroup;
