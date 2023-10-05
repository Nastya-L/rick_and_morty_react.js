import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comments from './Comments';
import axios from 'axios';

jest.mock('../UI/CreatStar/CreatStar', () => () => {
	return <div data-testid='CreatStar'/>;
});

afterEach(() => {
	jest.clearAllMocks();
});

const response = 'New comment text';
const responseComment = {
	'message': response,
	'_id': '650617bb98c899d1474526b0',
	'published': '2023-09-16T21:01:47.559Z'
};

describe('Comments', () => {
	const rating = '4.9';
	const id = '64b42a5bc2ad60e163172260';
	const comments = [{
		'_id': '6504a7d6fb5d4d5166ee9306',
		'message': '455152',
		'published': '2023-09-15T18:52:06.851Z'
	}];
	const route = 'http://localhost:3000/v1/characters';

	test('Send a comment to the server', () => { 
		const axiosPostSpy = jest.spyOn(axios, 'post').mockResolvedValue(responseComment);
		
		const { container } = render(<Comments rating={rating} id={id} comments={comments} route={route} />);
		const newCommentsSumbit = container.querySelector('.newCommentsSumbit');
		const textarea = container.querySelector('.newCommentsTextarea');
		fireEvent.change(textarea, {target: {value: response }});
		fireEvent.click(newCommentsSumbit);
		expect(axiosPostSpy).toHaveBeenCalledWith(`${route}/${id}/comments`,{message: response});
	});

	test('Empty comment', () => { 
		const axiosPostSpy = jest.spyOn(axios, 'post').mockResolvedValue(responseComment);
		
		const { container } = render(<Comments rating={rating} id={id} comments={comments} route={route} />);
		const newCommentsSumbit = container.querySelector('.newCommentsSumbit');
		const textarea = container.querySelector('.newCommentsTextarea');
		fireEvent.change(textarea, {target: {value: ''}});
		fireEvent.click(newCommentsSumbit);
		expect(axiosPostSpy).toBeCalledTimes(0);
	});

	test('Delete comment', () => { 
		const idComment = '6504a7d6fb5d4d5166ee9306';
		const axiosPostSpy = jest.spyOn(axios, 'delete').mockResolvedValue({'message': 'Comment deleted'});
		
		const { container } = render(<Comments rating={rating} id={id} comments={comments} route={route} />);
		const commentDelete =  container.querySelector('.commentDelete');
		fireEvent.click(commentDelete);
		expect(axiosPostSpy).toHaveBeenCalledWith(`${route}/${id}/comments/${idComment}`);
	});

	test('No comments in article', () => { 
		const comments = [];
		render(<Comments rating={rating} id={id} comments={comments} route={route} />);
		const noComments = screen.getByText('No comments');
		expect(noComments).toBeInTheDocument();
	});
	
	test('Array comments undefined', () => { 
		const comments = undefined;
		render(<Comments rating={rating} id={id} comments={comments} route={route} />);
		const noComments = screen.queryByText('No comments');
		expect(noComments).not.toBeInTheDocument();
	});
});