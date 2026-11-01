# Arquitectura del sitio

Alineada con `BRAND_DIRECTION.md`. Las URLs existentes se conservan.

## Navegación

| Label | Ruta | Función |
|---|---|---|
| Logo | `/` | Vuelta a la home. Asset `public/assets/logo.png`. |
| Work | `/portfolio/` | Trabajo profesional y productos. `/work` y `/apps` siguen redirigiendo aquí. |
| Thinking | `/blog/` | Notas. Puede crecer sin ser el eje de la marca. |
| About | `/about/` | Historia profesional, luego el registro. |
| Let's talk | `/contact/` | Único CTA de navegación. No es “Work with me”. |

LinkedIn, GitHub, email y X quedan en el pie y en la página de contacto. No compiten con el CTA en el header de escritorio.

Home no lleva ítem de menú: el logo es la home.

## Home

Orden fijo:

1. Hero. Titular corto, una línea de apoyo, CTA, retrato (`/assets/portrait.jpg`).
2. Proof. Cuatro métricas.
3. Selected impact. Tres casos.
4. How I lead. Tres principios con caso.
5. Entrepreneurship. Historia + tres ventures + tres productos (problema, producto, usuario).
6. Complex technology. IA como prueba, con enlace al caso enterprise.
7. Thinking. Tres notas recientes + enlace al índice.
8. Path. Seis beats + enlace a About.
9. Cierre. Let's talk.

## Páginas

- `/about/` — arco narrativo, después roles, logros y formación.
- `/portfolio/` — pestañas Professional Work y Apps, como ahora. El intro habla de alcance, no de stack.
- `/work/[slug]/` y `/blog/[slug]/` — sin cambio de estructura. Siguen siendo la evidencia larga.
- `/contact/` — email, LinkedIn, X, GitHub. Copy de oportunidad profesional.
- `/content/` — herramienta privada. Fuera de la navegación y de la marca pública.
- Charlas en `/speaking/*` y sus artículos: archivo. No son ítems de nav.

## Mensaje por superficie

| Superficie | Categoría que debe leerse |
|---|---|
| `<title>`, meta, schema, `llms.txt`, README | Senior Product Leader. La IA es experiencia, no el cargo. |
| Hero | Product Leader who builds. De 0→1 a escala. |
| CTA | Let's talk. |
| Casos | Se eligen por lo que explican del perfil, no por tamaño. |

## Qué no entra en la home

Repos sueltos, carrusel completo de apps de consumo, oferta de consultoría, titular de experto en IA, CV completo, principios sin caso.

## Visual que esta arquitectura asume

Fondo claro por defecto. Amarillo solo en logo, CTA, selección y acentos. Offside en titulares y cifras. Geist en UI y cuerpo. El retrato permanece en el hero y en About.
