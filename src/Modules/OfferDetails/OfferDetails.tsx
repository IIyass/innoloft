import React from 'react';
import Container from '../../Shared/Container';
import Offer from '../Offer/Offer';
import { Type } from 'types';

interface IDetails {
  technology: {
    name: string;
    data: Type[];
  };
  trl: {
    name: string;
    data: Type;
  };
  businessModel: {
    name: string;
    data: Type[];
  };
  costs: {
    name: string;
    data: string;
  };
}
const Details = ({ technology, trl, businessModel, costs }: IDetails) => {
  return (
    <Container className="grid grid-cols-1 mb-6 p-4 sm:grid-cols-2">
      <Offer data={technology.data} title={technology.name} />
      <Offer data={[trl.data]} title={trl.name} />
      <Offer data={businessModel.data} title={businessModel.name} />
      <Offer
        data={[
          {
            id: 0,
            name: costs.data,
          },
        ]}
        title={costs.name}
      />
    </Container>
  );
};

export default Details;
