import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { slugify } from "../utils/slugify";

const CategoryBusinessesPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const decodedSlug = slug ? slugify(slug) : null;
    if (!decodedSlug) return;

    if (decodedSlug) {
      const exists = categories.some(
        (cat) => slugify(cat.slug) === decodedSlug
      );
      if (!exists) {
        console.warn("❌ Slug no encontrado en categorías, redirigiendo...");
        navigate("/categorias", { replace: true });
      }
    }
  }, [slug, navigate]);

  // Rest of the component code...
};

export default CategoryBusinessesPage;
