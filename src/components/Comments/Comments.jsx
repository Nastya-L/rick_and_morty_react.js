import React, { useEffect, useState } from 'react';
import styles from './Comments.module.scss';
import { ThemeContext } from '../UI/Theme/ThemeContext';
import CreatStar from '../UI/CreatStar/CreatStar';
import axios from 'axios';

function Comments({rating, id, comments, route}) {
	const [arryaComments, setArryaComments] = useState([]);
	const [formText, setformText] = useState('');

	useEffect(()=> {
		setArryaComments(comments);
	},[comments]);
	
	const handleChange = (event) => {
		setformText(event.target.value);
	};

	function addComment(e) {
		e.preventDefault();
		if (formText !== '') {
			const message = {
				message: formText,
			};
			axios
				.post(`${route}/${id}/comments`, message)
				.then((Response) => {
					setArryaComments([Response.data, ...arryaComments]);
					setformText('');
				})
				.catch((Error) => {
					console.log('Error', Error);
				});
		}
	}

	function deleteComment(idComment) {
		axios
			.delete(`${route}/${id}/comments/${idComment}`)
			.then(() => {
				const newArryaComments = arryaComments.filter((e) => e._id !== idComment);
				setArryaComments(newArryaComments);
			})
			.catch((Error) => {
				console.log('Error', Error);
			});
	}

	return (
		<ThemeContext.Consumer>
			{({theme}) =>
				<section className={styles.comments}
					data-theme={`${theme}Comments`}>
					<div className={styles.commentsRating}>
						<p>Rating: {rating}</p>
						<div className={styles.commentsRatingImg}>
							{CreatStar(rating)}
						</div>
					</div>
					<div className={styles.newComments}>
						<div className={styles.newCommentsWrapp}>
							<h1 className={styles.newCommentsTitle}>leave a comment</h1>
							<form id='newCommentsForm' className={styles.newCommentsForm}>
								<textarea wrap='hard' cols={200} rows={2}
									value={formText} onChange={handleChange}
									className={styles.newCommentsTextarea} type='text' placeholder='Comment' />
								<button onClick={addComment}
									className={styles.newCommentsSumbit}>Send</button>
							</form>
						</div>
						<div className={styles.comment}>
							{arryaComments && arryaComments.length > 0
								? arryaComments.map((com) => (
									<p key={com._id} className={styles.commentText}>{com.message}
										<span className={styles.commentData}>{com.published}</span>
										<button onClick={()=>{deleteComment(com._id);}} 
											data-theme={`${theme}Comments`}
											className={styles.commentDelete}></button> </p>))
								: <h2>No comments</h2>}
						</div>
					</div>
				</section>
			}
		</ThemeContext.Consumer>
	);
}

export default Comments;