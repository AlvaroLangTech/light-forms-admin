// src/App.tsx
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import FormsPage from './FormsPage';
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <div className='min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased'>
      {/* Barras fixas (estilos no base.css) */}
      <Topbar />
      <Sidebar />

      {/* Conteúdo principal com offset da sidebar/topbar aplicado no FormsPage */}
      <FormsPage />
      <SiteFooter />
    </div>
  );
}
