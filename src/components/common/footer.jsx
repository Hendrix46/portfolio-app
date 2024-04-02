import React from "react";
import {Link} from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Главная</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">Обо мне</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Проекты</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Контакты</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;
