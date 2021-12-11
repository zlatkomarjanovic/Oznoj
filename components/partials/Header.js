import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Button from './Button';
const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<header>
			<Link href='/'>
				<a className='logo'>Oznoj</a>
			</Link>
			<div className='hamburger-icon' onClick={handleClick}>
				{click ? <FaTimes /> : <FaBars />}
			</div>
			<ul
				className='nav-menu'
				onClick={handleClick}
				click={click}
				style={{ left: `${click ? '0' : '100%'}` }}
			>
				<Link href='/'>
					<a className='nav-link'>Home</a>
				</Link>
				<Link href='/about'>
					<a className='nav-link'>About</a>
				</Link>
				<Link href='/supplements'>
					<a className='nav-link'>Supplements</a>
				</Link>
				<Link href='/recipes'>
					<a className='nav-link'>Recipes</a>
				</Link>
				<Link href='/workouts'>
					<a className='nav-link'>Workouts</a>
				</Link>
				<Button url='/startnow' filled='false' />
			</ul>
		</header>
	);
};

export default Header;
