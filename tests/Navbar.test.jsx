
import { render, screen } from '@testing-library/react';
import { vi, describe, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext'; // Adjust path as necessary
import Navbar from '../src/components/Navbar'; // Adjust path as necessary

describe('Navbar Component', () => {
    test('renders Navbar with correct links and cart item count (initially 0)', () => {
    vi.mock('../hooks/useCart', () => ({
        useCart: () => ({
        cartItems: [],
        }),
    }));

    render(
        <MemoryRouter>
        <CartProvider>
            <Navbar />
        </CartProvider>
        </MemoryRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart: 0/i)).toBeInTheDocument();
    });





    test('links have correct routes', () => {
        vi.mock('../hooks/useCart', () => ({
            useCart: () => ({
            cartItems: [],
        }),
    }));

    render(
        <MemoryRouter>
            <CartProvider>
                <Navbar />
            </CartProvider>
        </MemoryRouter>
    );

    const homeLink = screen.getByText(/Home/i);
    const shopLink = screen.getByText(/Shop/i);

    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    expect(shopLink.closest('a')).toHaveAttribute('href', '/shop');
    });
});