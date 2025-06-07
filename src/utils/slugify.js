// src/utils/slugify.js

export function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD") // quita acentos
    .replace(/[\u0300-\u036f]/g, "") // quita caracteres diacríticos
    .replace(/\s+/g, "-") // espacios por guiones
    .replace(/[^a-z0-9-]/g, "") // elimina símbolos
    .replace(/--+/g, "-") // reemplaza múltiples guiones por uno
    .replace(/^-+|-+$/g, ""); // quita guiones al inicio y fin
}
