'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Layers, Briefcase, GraduationCap, FolderOpen, Mail } from 'lucide-react';

const navItems = [
	{ href: '#home', label: 'Home', icon: <Home className="w-5 h-5" /> },
	{ href: '#skills', label: 'Skills', icon: <Layers className="w-5 h-5" /> },
	{ href: '#experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
	{ href: '#education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
	{ href: '#projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
	{ href: '#contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> }
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = ['home', 'skills', 'experience', 'education', 'projects', 'contact'];
			const current = sections.find(section => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) {
				setActiveSection(current);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-[#f6f0fa]/90 backdrop-blur border-b border-[#c3b1e1] shadow-sm">
			<div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
				<Link
					href="/"
					className="font-bold text-xl tracking-widest text-[#7c3aed] rounded-lg px-3 py-1 bg-[#ede9fe] shadow"
				>
					SA
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center gap-8">
					{navItems.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								onClick={() => setIsOpen(false)}
								className={`text-[#5b4a6e] hover:text-[#7c3aed] transition-colors font-medium px-2 py-1 rounded-md ${
									activeSection === item.href.slice(1)
										? 'text-[#7c3aed] bg-[#ede9fe]'
										: 'text-[#5b4a6e]'
								}`}
							>
								<span className="inline-block align-middle mr-2">{item.icon}</span>
								<span className="align-middle">{item.label}</span>
							</a>
						</li>
					))}
				</ul>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden relative z-50 p-2 text-[#5b4a6e] hover:text-[#7c3aed] transition-colors"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			<div className={`
				fixed inset-0 z-40 bg-[#f6f0fa]/95 backdrop-blur-lg transition-transform duration-300 md:hidden
				${isOpen ? 'translate-x-0' : 'translate-x-full'}
			`}>
				<div className="flex items-center justify-center h-full">
					<ul className="flex flex-col items-center gap-6">
						{navItems.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									onClick={() => setIsOpen(false)}
									className={`flex flex-col items-center text-lg font-medium transition-colors duration-300 ${
										activeSection === item.href.slice(1)
											? 'text-[#7c3aed] bg-[#ede9fe]'
											: 'text-[#5b4a6e] hover:text-[#7c3aed]'
									}`}
								>
									<span className="mb-1">{item.icon}</span>
									<span className="text-sm">{item.label}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;