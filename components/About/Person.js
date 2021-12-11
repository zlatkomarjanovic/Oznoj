import React from 'react';

const Person = (props) => {
	return (
		<div className='person'>
			{/*eslint-disable-next-line*/}
			<img alt='person image' className='person-image' src={props.img} />
			<div className="upper-detail">
				<h4 className='name'>{props.name}</h4>
				<h6 className='role'>{props.role}</h6>
				{/*eslint-disable-next-line*/}
				<img alt='person image' src='./quote.png' className='quotemark' />
				<p className='quote'>{props.quote}</p>
			</div>
			<div className='person-details'>
				<p className='detail'>
					Age: <span className='detail-value'>{props.age}</span>
				</p>
				<p className='detail'>
					Location: <span className='detail-value'>{props.location}</span>
				</p>
				<p className='detail'>
					Profession: <span className='detail-value'>{props.profession}</span>
				</p>
				<p className='detail'>
					University: <span className='detail-value'>{props.university}</span>
				</p>
				<h6 className='person-experience'>{props.experience}</h6>
			</div>
		</div>
	);
};

export default Person;
