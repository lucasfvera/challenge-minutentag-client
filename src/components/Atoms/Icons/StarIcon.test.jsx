import { render, screen } from '@testing-library/react';
import { StarIcon } from './StarIcon';
import { describe, it, expect } from 'vitest';

describe('StarIcon', () => {
    it('should render the icon', () => {
        // Arrange
        render(<StarIcon />);

        // Act
        const icon = screen.getByTitle('Star Icon');

        // Assert
        expect(icon).toBeInTheDocument();
    });
});
