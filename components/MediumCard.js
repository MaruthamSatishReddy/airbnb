import React from 'react';
import Image from 'next/image';

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      {' '}
      <div className="relative w-80 h-80">
        <Image
          src={img}
          alt="Medium Cards"
          width={800}
          height={800}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
