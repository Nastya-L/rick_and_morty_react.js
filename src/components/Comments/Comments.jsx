import React, { useState } from 'react';
import styles from './Comments.module.scss';
import clas from 'classnames';
import { ThemeContext } from '../UI/Theme/ThemeContext';
import CreatStar from '../UI/CreatStar/CreatStar';

function Comments(props) {

	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const [arryaComment, setArryaComment] = useState([]);

	function addComment(e) {
		e.preventDefault();
		if (value !== '') {
			setArryaComment([...arryaComment, value]);
			setValue('');
		}
	}

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<section className={styles.comments}
					data-theme={`${theme}Comments`}>
					<div className={styles.commentsRating}>
						<p>Рейтинг: {props.rating}</p>
						<div className={styles.commentsRatingImg}>
							{CreatStar(props.rating)}
						</div>
					</div>
					<div className={styles.newComments}>
						<h1 className={styles.newCommentsTitle}>Оставить комментарий</h1>
						<form id='newCommentsForm' className={styles.newCommentsForm}>
							<textarea wrap='hard' cols={200} rows={2}
								value={value} onChange={handleChange}
								className={clas(styles.newCommentsTextarea)} type='text' placeholder='Комментарий' />
							<button onClick={addComment}
								className={styles.newCommentsSumbit}>Отправить</button>
						</form>
						<div className={styles.comment}>
							{arryaComment.map((com,index) => (
								<p key={index} className={styles.commentText}>{com}</p>
							))}
						</div>
					</div>
				</section>
			}
		</ThemeContext.Consumer>
	);
}

export default Comments;