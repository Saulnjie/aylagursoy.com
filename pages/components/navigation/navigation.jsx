import Hamburger from '../navigation/burger';
import { useState } from 'react';
// import logo from '../../../public/localmedia/LogoNav.png';
import Image from 'next/image';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Nav() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<section className='nav_section_container' style={{}}>
			<div className='nav_container'>
				<div className='navigation'>
					<ul>
						<li>
							<Link activeClassName='active' href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link activeClassName='active' href='/about'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link activeClassName='active' href='/work'>
								<a>Work</a>
							</Link>
						</li>
					
						{/* <FontAwesomeIcon
							className='cart_nav'
							icon={faCartShopping}
							alt='shopping cart'
						/> */}
					</ul>
					<div className='hamburger' onClick={toggleHamburger}>
						<Hamburger isOpen={hamburgerOpen} />
					</div>
				</div>
				<div className='logo_nav_container'>
					{/* <Image className='logo_nav' src={logo} href='/index' alt='logo' /> */}
				</div>
			</div>
		</section>
	);
}