import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductPrice, updateProductQuantity } from '../store/productReducers';
import { Product, Section } from '../types/types';

interface ProductListProps {
    products: Product[];
    sectionIndex: number;
}

export const ProductList: React.FC<ProductListProps> = ({ products, sectionIndex }) => {
    const dispatch = useDispatch();
    const currentSection: Section[] = useSelector((state: RootState) => state.currentSection);


    const handleQuantityChange = (sectionIndex: number, productIndex: number, newQuantity: string) => {
        const productPrice = parseFloat(currentSection[sectionIndex].goods[productIndex].gprice);
        const newPrice: number = (productPrice * parseFloat(newQuantity));
        dispatch(updateProductPrice({ sectionIndex, productIndex, newPrice }));
        dispatch(updateProductQuantity({ sectionIndex, productIndex, newQuantity: parseFloat(newQuantity) }));
    };

    return (
        <tbody>
            {products.map((product, productIndex) => (
                <tr key={product.gid}>
                    <td>{product.gid}</td>
                    <td>{product.gname}</td>
                    <td>{product.gprice}</td>
                    <td>
                        <input
                            type="number"
                            value={product.count}
                            onChange={(e) => handleQuantityChange(sectionIndex, productIndex, e.target.value)}
                        />
                    </td>
                    <td>{product.sum}</td>
                </tr>
            ))}
        </tbody>
    )
}