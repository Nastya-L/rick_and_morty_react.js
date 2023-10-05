import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';
import BtnAddFavorites from './BtnAddFavorites';

describe('BtnAdd', () => {
	const savedIds = ['64d103098c14f26224d8717b','64d101268c14f26224d87178'];
	const idToAdd = '64d0ffb88c14f26224d87176';

	test('Add to Favorites', async() => { 
		const mockCallback = jest.fn();
		render(<BtnAddFavorites savedIds={savedIds} changeSavedIds={mockCallback} _id={idToAdd} />);
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		expect(mockCallback).toHaveBeenCalledWith(['64d103098c14f26224d8717b','64d101268c14f26224d87178', '64d0ffb88c14f26224d87176']);
	});

	test('Delete from Favorites', async() => { 
		const idToDelete = '64d103098c14f26224d8717b';
		const mockCallback = jest.fn();
		render(<BtnAddFavorites savedIds={savedIds} changeSavedIds={mockCallback} _id={idToDelete} />);
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		expect(mockCallback).toHaveBeenCalledWith(['64d101268c14f26224d87178']);
	});

	test('Button is active', async() => { 
		const mockCallback = jest.fn();
		render(<BtnAddFavorites savedIds={savedIds} changeSavedIds={mockCallback} _id={idToAdd} />);
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		expect(btn.classList.contains('active')).toEqual(true);
	});
});