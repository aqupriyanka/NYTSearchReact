import React from "react";

const NytHeader = (props) =>
		<div className="container">

			<div className="jumbotron" style={{background: props.background || "#20315A", 
			color: props.color || "white"}}>
				<h1 className="text-center">
				<strong>New York Times Search</strong>
				</h1>
			</div>
		</div>;


export default NytHeader;