import React from 'react';
import { useSelector } from 'react-redux';
import { Section } from '../types/types';
import { ProductList } from './ProductList';

const SectionLists: React.FC = () => {
  const currentSection: Section[] = useSelector((state: RootState) => state.currentSection);

  return (
    <div>
      {currentSection.map((section, sectionIndex) => (
        <div key={section.rid}>
          <h2>{section.rname}</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Название товара</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <ProductList products={section.goods} sectionIndex={sectionIndex} />
          </table>
        </div>
      ))}
    </div>
  );
};

export default SectionLists;
