import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import RoutesApp from '../Routes/RoutesApp';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const itemsCharacters = { data: { characters: [
	{
		'_id':'64b42a5bc2ad60e163172260',
		'name':'Characters1',
	},
	{
		'_id':'64a1b1f67b55b9701ce4927d',
		'name':'Characters2',
	},{
		'_id':'64a1af227b55b9701ce49225',
		'name':'Characters3',
	}
]}};

const itemsLocations = { data : { locations: [
	{'_id':'64d103098c14f26224d8717b',
		'name':'Locations1'
	},
	{
		'_id':'64d101268c14f26224d87178',
		'name':'Locations2'
	},
	{
		'_id':'64d0ffb88c14f26224d87176',
		'name':'Locations3'
	}
]}};

jest.mock('axios');

describe('Home', () => {
	const mockStore = configureStore();
	const initialstate = {favoritesReducer: {
		idsCharacters: ['64b42a5bc2ad60e163172260'],
		idsLocations: ['64d103098c14f26224d8717b', '64d101268c14f26224d87178']
	}};
	const store = mockStore(initialstate);


	test('Number of requests on server', () => { 
		const axiosPostSpy = jest.spyOn(axios, 'get').mockResolvedValue(itemsCharacters);
		render(
			<MemoryRouter>
				<RoutesApp />
			</MemoryRouter>);
		expect(axiosPostSpy).toBeCalledTimes(2);
	});

	test('No Characters', () => {
		axios.get.mockImplementation((route) => {
			let response = {
				status: 404,
				data: null
			};
			if (route == 'http://localhost:3000/v1/characters?page=1&limit=3') {
				response = {};
			} 
			return Promise.resolve(response);
		});
		render(
			<MemoryRouter>
				<RoutesApp />
			</MemoryRouter>);
		const noItems = screen.getByText('There are no Characters');
		expect(noItems).toBeInTheDocument();
	});

	test('No Locations', () => {
		axios.get.mockImplementation((route) => {
			let response = {
				status: 404,
				data: null
			};
			if (route == 'http://localhost:3000/v1/locations?page=1&limit=3') {
				response = {};
			}
			return Promise.resolve(response);
		});
		render(
			<MemoryRouter>
				<RoutesApp />
			</MemoryRouter>);
		const noItems = screen.getByText('There are no Locations');
		expect(noItems).toBeInTheDocument();
	});

	test('Render Characters', async () => { 
		axios.get.mockImplementation((route) => {
			let response = {
				status: 404,
				data: null
			};
			if (route == 'http://localhost:3000/v1/characters?page=1&limit=3') {
				response = itemsCharacters;
			} 
			return Promise.resolve(response);
		});
		render(
			<MemoryRouter>
				<Provider store={store}>
					<RoutesApp />
				</Provider>
			</MemoryRouter>);
		const noItems = screen.getByText('There are no Characters');
		await waitFor(() => {
			expect(noItems).not.toBeInTheDocument();
		});
	});

	test('Render Locations', async() => {
		axios.get.mockImplementation((route) => {
			let response = {
				status: 404,
				data: null
			};
			if (route == 'http://localhost:3000/v1/locations?page=1&limit=3') {
				response = itemsLocations;
			}
			return Promise.resolve(response);
		});
		render(
			<MemoryRouter>
				<Provider store={store}>
					<RoutesApp />
				</Provider>
			</MemoryRouter>);
		const noItems = screen.getByText('There are no Locations');
		await waitFor(() => {
			expect(noItems).not.toBeInTheDocument();
		});
	});
});