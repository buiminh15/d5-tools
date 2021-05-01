import React from 'react';
import { features } from '../../../models/features';
import Card from './Card';

export default function CardList() {
  return (
    <div className="row">
      {features.map((feature) => (
        <div className="col-4 my-3" key={feature.name}>
          <Card key={feature.name} {...feature} />
        </div>
      ))}
    </div>
  );
}
