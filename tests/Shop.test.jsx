 
import { render, screen, waitFor } from '@testing-library/react';  
import { vi, it, describe, expect, beforeEach } from 'vitest';  
import axios from 'axios';  
import Shop from '../src/pages/Shop'; 
import { useCart } from '../src/hooks/useCart'; // Ensure the path is correct  

vi.mock('axios'); // Mock axios  
vi.mock('../src/hooks/useCart', () => ({  
    useCart: vi.fn(),  
}));  

const mockProducts = [  
    { id: 1, title: 'Product 1', price: 29.99, image: 'image1.jpg' },  
    { id: 2, title: 'Product 2', price: 39.99, image: 'image2.jpg' },  
];  

describe('Shop Component', () => {  
    const mockAddToCart = vi.fn();  

    beforeEach(() => {  
        useCart.mockReturnValue({ addToCart: mockAddToCart });  
        axios.get.mockResolvedValueOnce({ data: mockProducts });  
    });  

    it('fetches and displays products', async () => {  
        render(<Shop />);  

        const productNames = await screen.findAllByText(/Product/i);  
        
        // Check that the products are displayed  
        expect(productNames).toHaveLength(mockProducts.length);  
        expect(screen.getByText('Product 1')).toBeInTheDocument();  
        expect(screen.getByText('Product 2')).toBeInTheDocument();  
    });  
    it('calls addToCart function when a product is added', async () => {  
        render(<Shop />);  
    
        // Wait for products to be displayed  
        await waitFor(() => screen.getByText('Product 1'));  
    
        // Simulate clicking the add to cart button for the first product  
        const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];  
        addToCartButton.click();  
    
        // Update the expectation to match the actual call to addToCart  
        expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[0], 1);  
    });
});