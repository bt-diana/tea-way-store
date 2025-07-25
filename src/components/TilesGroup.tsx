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
  const [childrenTypes, setChildrenTypes] = useState<
    ProductType[] | undefined
  >();

  useEffect(() => {
    getChildrenTypesByParentId(parentTypeId).then((types) => {
      if (types?.length) {
        setChildrenTypes(types);
      } else {
        setChildrenTypes(undefined);
      }
    });
  }, [parentTypeId]);

  if (!childrenTypes) {
    return <ResourceNotFoundPage />;
  }

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
};

export default TilesGroup;
