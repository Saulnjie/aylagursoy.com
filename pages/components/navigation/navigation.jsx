import Hamburger from '../navigation/burger';
import { useState } from 'react';
// import logo from '../../../public/localmedia/LogoNav.png';
import Image from 'next/image';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import logo from '../../../public/img/logoption.png'
import SearchBar from '../searchbar/search';

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
							<Link activeClassName='active' href='/about'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link activeClassName='active' href='/work'>
								<a>Work</a>
							</Link>
						</li>
						<li>
							<Link activeClassName='active' href='https://www.instagram.com/aylagursoy/'>
								<a>Instagram</a>
							</Link>
						</li>
					</ul>
					<div className='hamburger' onClick={toggleHamburger}>
						<Hamburger isOpen={hamburgerOpen} />
					</div>
				</div>
				{/* <SearchBar/> */}
				<Link activeClassName='active' href='/'>
					<div className='logo_nav_container'>
						<Image className='logo_nav' src={logo} href='/index' alt='logo'/>
					</div>
				</Link>

				<style jsx>{`
				 @media (max-width: 767px) {
				.navigation ul {
                            display: ${hamburgerOpen ? 'inline' : 'none'};
                            background-color: white;
							border-radius: 4px;
                            height: fit-content;
                            /* width: 100vw; */
                            /* margin-top: 50px; */
                            position: fixed;
                            text-align: center;
                            -webkit-box-shadow: 0px 1px 3px 1px #5e5e5e;
                            box-shadow: 0px 1px 3px 1px #5e5e5e;
                            z-index: 500;
                        }}
				`}</style>			
			</div>
		</section>
	);
}