import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={8} className='home-about-description'>
						<h1 style={{ fontSize: '2.6em' }}>
							Hi There! <span className='wave'>👋🏻</span>
							<br></br>
							<br></br>
							<h1>I'm Petersen Phihlela</h1>
						</h1>

						<p className='home-about-body'>
							I'm on a journey to becoming a software programming ninja.. 😄
							<br />
							<br />
							Allow me to show you my skills in building&nbsp;
							<b className='purple'>Web Technologies and Products, </b> and also
							in areas related to{' '}
							<b className='purple'>Electronics and Embedded Systems</b>
							<br />
							<br />
						</p>
					</Col>
					<Col md={4} className='myAvtar'>
						<Tilt>
							<img src={myImg} className='img-fluid' alt='avatar' />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>FIND ME ON:</h1>

						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://api.whatsapp.com/send?phone=0810677890'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiOutlineWhatsApp />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://github.com/pmphareng'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://twitter.com/pmphareng'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='www.linkedin.com/in/petersen-phihlela-593722122'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
						<p>Let me know of projects you'd like us to work on</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
