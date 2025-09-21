
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import { describe, it, expect } from 'vitest';

describe('Avatar', () => {
    it('should render the avatar with the correct src and alt text', () => {
        // Arrange
        const imgSrc = 'path/to/image.jpg';
        render(<Avatar imgSrc={imgSrc} />);

        // Act
        const avatarImage = screen.getByRole('img', { name: /user avatar/i });

        // Assert
        expect(avatarImage).toBeInTheDocument();
        expect(avatarImage).toHaveAttribute('src', imgSrc);
    });
});
