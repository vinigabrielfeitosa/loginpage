import React from 'react';
import Navbar from "../../layout/inicial/header/Navbar";

function Inicial() {
	const containerStyle = {
		background: 'linear-gradient(to bottom, #181661, #141414)', // Gradiente do topo para a cor de fundo
		height: '100vh', // Defina a altura desejada
	};

	return (
		<React.Fragment>
			<div className="page-container" style={containerStyle}>
				<Navbar/>
				{/* Outro conteúdo da página */}
			</div>
		</React.Fragment>
	);
}

export default Inicial;