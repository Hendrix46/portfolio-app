import React from "react";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Опыт работы"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">ИНГО-УЗБЕКИСТАН</div>
							<div className="work-subtitle">
								Менеджер Управления
							</div>
							<div className="work-duration">2022 - Наст. время</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
