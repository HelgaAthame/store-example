"use client";

import { Oxygen } from 'next/font/google';
import { Cards } from '~/components/cards';

const font = Oxygen({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
});

export default function Products() {
  return (
    <div
      className={font.className}
    >
      <div>
        <Cards/>
      </div>
    </div>
  )
}
