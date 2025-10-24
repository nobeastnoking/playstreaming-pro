/* =========================================================
   🤖 BotSeo® v1.0 - Analizador SEO interno para PlayStreaming
   ========================================================= */
console.log("🚀 BotSeo® iniciado - Analizando SEO de PlayStreaming...");

function analizarSEO() {
  const info = {
    titulo: document.title,
    descripcion: document.querySelector("meta[name='description']")?.content || "Sin descripción",
    palabrasClave: document.querySelector("meta[name='keywords']")?.content || "Sin palabras clave",
    enlacesInternos: document.querySelectorAll("a[href]").length,
    imagenes: document.querySelectorAll("img").length,
    encabezados: {
      h1: document.querySelectorAll("h1").length,
      h2: document.querySelectorAll("h2").length,
      h3: document.querySelectorAll("h3").length
    }
  };

  console.log("🧠 Resultados SEO:");
  console.table(info);

  if (info.titulo.length < 10 || info.titulo.length > 60)
    console.warn("⚠️ El título debería tener entre 10 y 60 caracteres.");

  if (info.descripcion === "Sin descripción")
    console.warn("⚠️ Agrega una meta descripción para mejorar el SEO.");

  if (info.enlacesInternos < 3)
    console.warn("⚠️ Añade más enlaces internos entre tus páginas.");

  if (info.imagenes === 0)
    console.warn("⚠️ No hay imágenes con etiquetas ALT.");

  console.log("✅ Análisis completado por BotSeo®.");
}

window.addEventListener("load", analizarSEO);
