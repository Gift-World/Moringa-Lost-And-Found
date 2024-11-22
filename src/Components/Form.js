import React, { useState} from 'react';
import axios from 'axios'; 
import '../App.css';
import { BASEURL } from '../constants';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		place_lost: '',
		description: '',
		image_url: '',
	});
	const [lostitems, setLostItems] = useState([]);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				`${BASEURL}/lostitems`,
				formData
			);
			setLostItems([...lostitems, response.data]);
			setSuccess('Entry added successfully!');
			setError('');
			setFormData({
				name: '',
				place_lost: '',
				description: '',
				image_url: '',
			});
		} catch (err) {
			setError('Failed to add entry.');
			setSuccess('');
		}
	};

	const handleDelete = async (id) => {
		try {
			await axios.delete(
				`${BASEURL}/lostitems$/{id}`
			);
			setLostItems(
				lostitems.filter((item) => item.id !== id)
			);
			setSuccess('Entry deleted successfully!');
			setError('');
		} catch (err) {
			setError('Failed to delete entry.');
			setSuccess('');
		}
	};

	return (
		<div>
			<h2 className='ADD_DEST'>REPORT LOST ITEM</h2>
			<form onSubmit={handleSubmit}>
				<div className='Name'>
					{/* <label htmlFor='name'>Name:</label> */}
					<input
						className='input'
						type='text'
						placeholder='Enter item name ...'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='Country'>
					{/* <label htmlFor='place_lost'>Country:</label> */}
					<input
						type='text'
						placeholder='Enter Place Lost...'
						id='place_lost'
						name='place_lost'
						value={formData.place_lost}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='Description'>
					<textarea
						id='description'
						name='description'
						placeholder='Enter Item description...'
						value={formData.description}
						onChange={handleChange}
						required
					/>
				</div>

				<div className='Image_Url'>
					{/* <label htmlFor='image_url'>Image URL:</label> */}
					<input
						type='text'
						id='image_url'
						placeholder='paste image url here ...'
						name='image_url'
						value={formData.image_url}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit'>Report Item</button>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{success && <p style={{ color: 'green' }}>{success}</p>}

			<h2 className='text-center'></h2>
			<ul className='listcard'>
				{lostitems.map((item) => (
					<li
						className='card'
						key={item.id}
					>
						<img
							className='img_add'
							src={item.image_url}
							alt={item.name}
							style={{ width: '100px', height: 'auto' }}
						/>

						<h3>
							<strong className='strong'>Name:</strong> {item.name}
						</h3>
						<p>
							<strong className='strong'>Country:</strong> {item.place_lost}
						</p>

						<p>
							<strong className='strong'>Description:</strong> {item.description}
						</p>

						<button
							className='del'
							onClick={() => handleDelete(item.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Form;
