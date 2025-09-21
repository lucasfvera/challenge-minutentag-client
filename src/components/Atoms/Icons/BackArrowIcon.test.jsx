import { render, screen } from '@testing-library/react';
import { BackArrowIcon } from './BackArrowIcon';
import { describe, it, expect } from 'vitest';

describe('BackArrowIcon', () => {
    it('should render the icon', () => {
        // Arrange
        render(<BackArrowIcon />);

        // Act
        const icon = screen.getByTitle('Back Arrow Icon');

        // Assert
        expect(icon).toBeInTheDocument();
    });
});
