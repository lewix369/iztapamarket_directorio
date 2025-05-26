import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import CategoriesPage from '@/pages/CategoriesPage';
import RegisterBusinessPage from '@/pages/RegisterBusinessPage';
import BusinessDetailsPage from '@/pages/BusinessDetailsPage';
import CategoryBusinessesPage from '@/pages/CategoryBusinessesPage.jsx';
import Negocios from '@/pages/Negocios.jsx';
import TermsPage from '@/pages/TermsPage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx'; 
import PlansPage from '@/pages/PlansPage.jsx'; 
import AdvertisePage from '@/pages/AdvertisePage.jsx';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import SitemapDisplayPage from '@/pages/SitemapDisplayPage.jsx';
import { Toaster } from '@/components/ui/toaster';
import SeoManager from '@/components/SeoManager.jsx';

const PageWrapper = ({ children, title, description, canonicalPath }) => {
  const location = useLocation();
  const siteBaseUrl = "https://iztapamarket.com";
  const safePathname = location.pathname.startsWith('/') ? location.pathname : `/${location.pathname}`;
  const currentUrl = `${siteBaseUrl}${safePathname}${location.search}${location.hash}`;
  const canonical = canonicalPath ? `${siteBaseUrl}${canonicalPath}` : currentUrl;

  return (
    <SeoManager title={title} description={description} canonicalUrl={canonical}>
      {children}
    </SeoManager>
  );
};

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<PageWrapper title="Directorio de Negocios en Iztapalapa" description="Encuentra y anuncia negocios locales en Iztapalapa. Taquerías, servicios, tiendas y más. ¡Impulsa tu visibilidad!" canonicalPath="/"><HomePage /></PageWrapper>} />
					<Route path="/categorias" element={<PageWrapper title="Categorías de Negocios" description="Explora todas las categorías de negocios en Iztapalapa: alimentos, belleza, servicios, moda y más." canonicalPath="/categorias"><CategoriesPage /></PageWrapper>} />
					<Route 
					  path="/categorias/:categorySlug" 
					  element={
					    <PageWrapper 
					      title="Negocios por categoría en Iztapalapa" 
					      description="Explora negocios locales clasificados por categoría. Encuentra servicios, alimentos, belleza, tecnología y más." 
					    >
					      <CategoryBusinessesPage />
					    </PageWrapper>
					  } 
					/>
					<Route
					  path="/categorias/"
					  element={<Navigate to="/categorias" replace />}
					/>
					<Route path="/negocio/:id" element={<PageWrapper><BusinessDetailsPage /></PageWrapper>} />
					<Route path="/registrarse" element={<PageWrapper title="Registra tu Negocio" description="Añade tu negocio al directorio IztapaMarket. Aumenta tu visibilidad y conecta con clientes locales." canonicalPath="/registrarse"><RegisterBusinessPage /></PageWrapper>} />
					<Route path="/planes" element={<PageWrapper title="Planes de Publicidad" description="Elige el plan ideal para anunciar tu negocio en IztapalapaMarket y alcanzar más clientes. Opciones desde $99 MXN." canonicalPath="/planes"><PlansPage /></PageWrapper>} />
					<Route path="/anunciate" element={<PageWrapper title="Anúnciate en IztapaMarket por $99 MXN/mes" description="Tu negocio en categorías, portada y buscador local. Publicación con foto, descripción, contacto y promoción en redes." canonicalPath="/anunciate"><AdvertisePage /></PageWrapper>} />
          <Route path="/contacto" element={<PageWrapper title="Contacto" description="Contáctanos para resolver tus dudas sobre IztapaMarket, registrar tu negocio o solicitar soporte." canonicalPath="/contacto"><ContactPage /></PageWrapper>} />
					<Route path="/terminos" element={<PageWrapper title="Términos y Condiciones" description="Consulta los términos y condiciones de uso del directorio IztapaMarket." canonicalPath="/terminos"><TermsPage /></PageWrapper>} />
          <Route path="/politica-privacidad" element={<PageWrapper title="Política de Privacidad" description="Conoce cómo IztapaMarket maneja y protege tus datos personales. Lee nuestra política de privacidad." canonicalPath="/politica-privacidad"><PrivacyPolicyPage /></PageWrapper>} />
          <Route path="/sitemap" element={<PageWrapper title="Sitemap XML de IztapaMarket" description="Página técnica de sitemap.xml para Google y buscadores." canonicalPath="/sitemap"><SitemapDisplayPage /></PageWrapper>} />
					<Route path="*" element={<PageWrapper title="Página no encontrada" description="La página que buscas no existe en IztapaMarket."><NotFoundPage /></PageWrapper>} />
			<Route
  path="/negocios"
  element={
    <PageWrapper
      title="Todos los negocios en Iztapalapa"
      description="Explora todos los negocios registrados en IztapaMarket. Desde tacos hasta servicios, tecnología y más."
      canonicalPath="/negocios"
    >
      <Negocios />
    </PageWrapper>
  }
/>  {/* ← esta línea cierra correctamente el Route */}
				</Routes>
				<Toaster />
			</Layout>
		</Router>
	);
	
}

export default App;
