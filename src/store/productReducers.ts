import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Section } from '../types/types'; // Подставьте путь к вашему типу данных

interface AppState {
  sections: Section[];
  currentSection: Section[],
}

const initialState: AppState = {
  sections: [],
  currentSection: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSections: (state, action: PayloadAction<Section[]>) => {
      state.sections = action.payload;
    },
    setCurrentSections: (state, action: PayloadAction<Section[]>) => {
      state.currentSection = action.payload;
    },
    updateProductPrice: (state, action: PayloadAction<{ sectionIndex: number; productIndex: number; newPrice: number }>) => {
      const { sectionIndex, productIndex, newPrice } = action.payload;
      state.currentSection[sectionIndex].goods[productIndex].sum = newPrice;
      state.sections[sectionIndex].goods[productIndex].sum = newPrice;
    },
    updateProductQuantity: (state, action: PayloadAction<{ sectionIndex: number; productIndex: number; newQuantity: number }>) => {
      const { sectionIndex, productIndex, newQuantity } = action.payload;
      state.currentSection[sectionIndex].goods[productIndex].count = newQuantity;
      state.sections[sectionIndex].goods[productIndex].count = newQuantity;
    },
    filterProductsBySection: (state, action: PayloadAction<{ sectionId: string }>) => {
      state.currentSection = state.sections.filter((s: any) => s.rid === action.payload.sectionId);
    },
    fetchSections: () => { },
  },
});

export const { setSections, updateProductPrice, fetchSections, updateProductQuantity, setCurrentSections, filterProductsBySection } = appSlice.actions;

export default appSlice.reducer;
