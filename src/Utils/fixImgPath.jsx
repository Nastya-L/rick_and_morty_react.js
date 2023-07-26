import { serverHost } from '../services/BackendUrl';

function fixImgPath(characters) {
	const items = characters.map((item) => {
		item.img = serverHost + item.img;
		return item;
	});
	return items;
}

export default fixImgPath;