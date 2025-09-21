import { render, screen } from '@testing-library/react';
import { BurgerMenuIcon } from './BurgerMenuIcon';
import { describe, it, expect } from 'vitest';

describe('BurgerMenuIcon', () => {
    it('should render the icon', () => {
        // Arrange
        render(<BurgerMenuIcon />);

        // Act
        const icon = screen.getByTitle('Burger Menu Icon');

        // Assert
        expect(icon).toBeInTheDocument();
    });
});
