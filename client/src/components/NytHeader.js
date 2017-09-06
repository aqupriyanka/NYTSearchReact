import React from "react";

const NytHeader = (props) =>
		<div className="">

			<div className="jumbotron text-center blue-gradient" style={{background: props.background || "#20315A", 
			color: props.color || "white", height:"150px", 'margin-top':"35px"}}>
				<h1 className="text-center">
				<strong>New York Times Search</strong>
				</h1>
			</div>
		</div>;


export default NytHeader;