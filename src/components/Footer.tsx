import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Section } from "../types/types";

export const Footer: React.FC = () => {

  const currentSection: Section[] = useSelector((state: RootState) => state.sections);

  const calculateTotal = () => {
    let totalAmount = 0;
    currentSection.forEach(section => {
      section.goods.forEach(product => {
        if (!isNaN(product.sum)) {
          totalAmount += product.sum;
        }
      });
    });
    return totalAmount.toFixed(2);
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    currentSection.forEach(section => {
      section.goods.forEach(product => {
        if (!isNaN(product.count)) {
          totalQuantity += product.count;
        }
      });
    });
    return totalQuantity;
  };

  const handleAddToCartClick = () => {
    const formData = new FormData();
    currentSection.forEach(section => {
      section.goods.forEach(product => {
        if (product.count > 0) {
          formData.append(`product[${product.gid}]`, product.count.toString());
        }
      });
    });

    axios.post('https://datainlife.ru/junior_task/add_basket.php', formData)
      .then(response => {
        console.log('Товары успешно добавлены в корзину:', response.data);
      })
      .catch(error => {
        console.error('Ошибка при добавлении товаров в корзину:', error);
      });
  };

  return (
    <div className="total-bar">
      <p>Общая сумма: {calculateTotal()} руб.</p>
      <p>Общее количество: {calculateTotalQuantity()}</p>
      <button onClick={handleAddToCartClick}>В корзину</button>
    </div>
  )
}