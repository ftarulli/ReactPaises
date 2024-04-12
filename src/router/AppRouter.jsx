import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PagePais } from '../pages/PagePais';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pais/:id" element={<PagePais />} />
			</Routes>
		</BrowserRouter>
	);
};
