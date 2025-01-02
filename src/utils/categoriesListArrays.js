import CategoryListItems from "../components/category/CategoryListItems";
import { BATHROOM, BAVERAGES, DAIRY_BAKERY, GRAINS, HOME_CARE, OILS, PERSONAL_CARE, SNACKS, SPICES, VEGITABLES_FRUITS } from "./constant";

// Categories List
export const categoriesList = [
    {
        id: 1,
        name: 'Grains and Pulses',
        img : GRAINS,
    },
    {
        id: 2,
        name: 'Oils and Fats',
        img : OILS, 
    },
    {
        id: 3,
        name: 'Fruits & Vegetables',
        img : VEGITABLES_FRUITS
    },
    {
        id: 4,
        name: ' Snacks and Packaged Food',
        img : SNACKS
    },
    {
        id: 5,
        name: 'Beverages',
        img : BAVERAGES
    },
    {
        id: 6,
        name: 'Dairy Bakery Products',
        img : DAIRY_BAKERY
    },
    {
        id: 7,
        name: 'Spices and Condiments',
        img : SPICES
    },
    {
        id: 8,
        name: 'Home Care',
        img : HOME_CARE
    },
    {
        id: 9,
        name: 'Personal Care',
        img : PERSONAL_CARE
    },
    {
        id: 10,
        name: 'Bathroom Accessories',
        img : BATHROOM
    },
]

// Mock data for categories
export const categoryData = {
    1: ['Rice', 'Wheat', 'Pulses', 'Lentils', 'Barley'],
    2: ['Cooking Oil', 'Ghee', 'Butter', 'Mustard Oil', 'Coconut Oil'],
    3: ['Apples', 'Bananas', 'Carrots', 'Tomatoes', 'Potatoes'],
    4: ['Chips', 'Biscuits', 'Popcorn', 'Chocolates', 'Noodles'],
    5: ['Tea', 'Coffee', 'Juices', 'Soda', 'Energy Drinks'],
    6: ['Milk', 'Cheese', 'Bread', 'Yogurt', 'Butter'],
    7: ['Salt', 'Pepper', 'Chili Powder', 'Turmeric', 'Cinnamon'],
    8: ['Dish Soap', 'Detergent', 'Glass Cleaner', 'Mop', 'Trash Bags'],
    9: ['Soap', 'Shampoo', 'Toothpaste', 'Deodorant', 'Lotion'],
    10: ['Toilet Paper', 'Towels', 'Toothbrush', 'Hairbrush', 'Soap'],
  };