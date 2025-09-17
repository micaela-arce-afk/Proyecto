
// =============================
// WEB ATELIER (UDIT) - Plantilla de Proyecto JavaScript
//
// Este archivo contiene la funcionalidad interactiva principal para tu proyecto web.
//
// Estructura principal:
// 1. Espera a que el DOM esté cargado para inicializar scripts.
// 2. Añade scroll suave a los enlaces internos.
// 3. Implementa accesibilidad con skip links.
// 4. Incluye una función para actualizar metadatos de la página.
//
// Sugerencias de mejora:
// - Modulariza el código en funciones separadas para cada funcionalidad.
// - Usa delegación de eventos para mejorar el rendimiento si hay muchos enlaces.
// - Considera usar let/const en vez de var para variables (ya está aplicado).
// - Añade manejo de errores y validaciones para mayor robustez.
// - Documenta cada función y bloque importante.
//
// ¡Personaliza y expande este archivo según las necesidades de tu proyecto!
// =============================


// Espera a que el DOM esté completamente cargado antes de ejecutar cualquier script.
document.addEventListener('DOMContentLoaded', function () {
	// Inicializa la funcionalidad del proyecto
	console.log('WEB ATELIER (UDIT) - Student project initialized');


	// --- Scroll suave para enlaces internos ---
	// Selecciona todos los enlaces que apuntan a un id en la misma página
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault(); // Evita el salto brusco por defecto
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth', // Hace el scroll animado
				});
			}
		});
	});
	// Sugerencia: Si tienes muchos enlaces, usa delegación de eventos en lugar de un listener por enlace.

	// --- Accesibilidad: skip link ---
	// Permite saltar directamente al contenido principal para usuarios de teclado/lectores de pantalla
	const skipLink = document.querySelector('.skip-link');
	if (skipLink) {
		skipLink.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.focus();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
	// Sugerencia: Asegúrate de que el elemento destino tenga tabindex="-1" para poder recibir el foco.
});


// =============================
// Función para actualizar los metadatos de la página
// Útil para cambiar dinámicamente el título y la descripción (SEO)
function updatePageMetadata(title, description) {
	document.title = title;

	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	} else {
		metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		document.head.appendChild(metaDescription);
	}
}
// Sugerencia: Puedes expandir esta función para actualizar otros metadatos (Open Graph, Twitter Cards, etc.)
