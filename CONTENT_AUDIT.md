# Auditoría de contenido

Estado del sitio respecto a la dirección de `BRAND_DIRECTION.md`. El inventario factual sigue en `brief-marca.md` (local, no es la estrategia).

## Qué estaba mal de categoría

Casi todas las superficies definían a Francisco como AI Product Leader o consultor de IA:

- Home: “AI Product Leader who codes” y pastillas que abren con “AI Products”.
- About: “Builder. Product Leader. AI at scale.”
- Contacto: “senior AI product roles” y “B2B consultancy” como oferta principal.
- CTA de cierre: “Have an AI product to build or scale?”
- Title, meta description, schema (`jobTitle`) y `llms.txt`.
- README: “AI/ML consultant”.
- Métricas de la home: las tres eran ahorro con IA, velocidad de ingeniería y “AI products”.
- Casos destacados: seis, con IA en la mayoría de los titulares, más un carrusel de apps y tres repos. Leía a builder/developer antes que a líder.

Eso se corrige en navegación, home, about, contacto, metas y README. Los artículos y los casos largos no se reescriben: son evidencia. Su etiqueta de IA puede quedarse dentro del caso.

## Qué demuestra cada prueba

No hace falta enseñarlo todo a la vez. En la home, una prueba por dimensión:

| Dimensión | Prueba que se usa | Dónde vive el resto |
|---|---|---|
| Producto y delivery | +137% de output en Hastee, 13 ingenieros, 3 equipos | Caso Hastee |
| Liderazgo y escala | 24 ingenieros, 4 squads, producto enterprise en producción | Caso de QA / Foundever |
| Negocio | ~20% del mercado FX por automatización | Casos IOL |
| Entrepreneurship | Micro-SaaS construido y vendido a Factorial | Timed Integrations, FlexRent, Pepino |

La IA (millones ahorrados, 51 cuentas, 82% de precisión, Xcapit) pasa a la sección de tecnología compleja, no al titular.

## Home — narrativa

1. Who I am. Titular corto. Líder primero, builder después. Subtítulo: producto, tecnología y negocio, de startup a enterprise.
2. Proof. Cuatro métricas de dimensiones distintas.
3. Selected impact. Tres casos: Foundever (enterprise, equipos, tecnología compleja), Hastee (liderazgo de producto y delivery), Timed Integrations (descubrimiento, build, venta).
4. How I lead. Principios atados a casos, no lemas: claridad antes que proceso (Hastee), evidencia antes de invertir (WASP y el rebote de 28 segundos), una capacidad no es un producto (QA enterprise y Scout).
5. Entrepreneurship. “I think like a founder because I've been one.” Timed, FlexRent, Pepino, y tres productos propios contados como problema → producto → usuario, no como stack.
6. AI and innovation. Una sección corta. La IA acredita liderazgo de tecnología difícil.
7. Thinking. Últimas notas. La sección existe aunque publique poco.
8. Career. Seis beats y un enlace a About. No el CV.
9. Contact. Let's talk.

Sale de la home: carrusel de todas las apps, fichas de repos, pastilla “AI Products”, CTA de consultoría, “30+ repos” como argumento.

## About

Deja de ser solo una cronología. El orden pasa a ser la historia que explica el perfil:

1. Economía y finanzas cuantitativas.
2. Entrada en software y automatización.
3. De construir a liderar.
4. Fundó productos y compañías.
5. Lideró equipos y productos a más escala.
6. Hoy une producto, software, negocio y entrepreneurship.

Debajo, el registro de roles y la formación se mantienen para quien contrata. Los logros se reordenan: liderazgo, venta, velocidad, fundación, y después IA y UNICEF como rango, no como definición.

## Contacto, Work, Thinking

- Contacto: oportunidades senior, startups y compañías. Advisory en una frase, no como producto.
- Portfolio (`/portfolio/`, nav “Work”): trabajo liderado, fundado o construido. El filtro y las fichas de apps siguen; el intro deja de sonar a muestrario de código.
- Blog (`/blog/`, nav “Thinking”): notas de producto, equipos y software. No se promete calendario.

## Números que no hay que unificar a ciegas

FlexRent aparece como 620 miembros en About y 600 en el caso. No se inventa un tercero. En superficies nuevas se dice “una comunidad de cientos de miembros” o se cita el caso.

## Lo que no se toca en este pase

Cuerpos de los casos, artículos, apps, dashboard privado `/content`, y la página de cada charla. Cambiarían el archivo de evidencia, no la categoría.
