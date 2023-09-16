import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination', () => {
	const page = '3';
	const currentPage = '1'; 

	test('Drawing order', () => { 
		const mockCallback = jest.fn();
		const container =  render(<Pagination page={page} currentPage={currentPage} changePage={mockCallback} />);
		const btns = container.getAllByRole('button');
		expect(btns).toHaveLength(3);
		expect(btns[0]).toHaveTextContent('1');
		expect(btns[1]).toHaveTextContent('2');
		expect(btns[2]).toHaveTextContent('3');
	});

	test('Selected page button is active', () => { 
		const mockCallback = jest.fn();
		const { container } =  render(<Pagination page={page} currentPage={currentPage} changePage={mockCallback} />);
		const elementWithClass = container.querySelector('.paginationBtnActive');
		expect(elementWithClass).toHaveTextContent(currentPage);
	});

	test('Select new page', () => { 
		const mockCallback = jest.fn();
		const { container } =  render(<Pagination page={page} currentPage={currentPage} changePage={mockCallback} />);
		const btn = container.querySelectorAll('button');
		fireEvent.click(btn[2]);
		expect(mockCallback).toHaveBeenCalledWith(3);
	});
});