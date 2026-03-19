"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDarkMode = theme === 'dark';

  // Estilo base para os botões circulares das redes sociais
  const socialButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: '50%',
    color: 'var(--text-main)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      backgroundColor: 'var(--surface)',
      overflow: 'hidden',
      transition: 'background-color 0.3s ease'
    }}>



      <footer style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 20px 40px 20px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

        {/* LOGO E SLOGAN */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Image 
            src="/assets/logo.png" 
            alt="GetOut Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain flex-shrink-0"
            style={{ display: 'block' }}
          />
          <span style={{ 
            color: isDarkMode ? 'white' : 'black', 
            fontSize: '20px', 
            fontWeight: 'bold',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
          }}>GetOut</span>
        </div>

        <h3 style={{ color: isDarkMode ? 'white' : '#111', textAlign: 'center', fontSize: '18px', fontWeight: '500', marginBottom: '24px', lineHeight: '1.4' }}>
          {t.footer.slogan}
        </h3>

        {/* CONTAINER DE CONTACTOS E REDES SOCIAIS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* BOTÃO DE EMAIL */}
          <a href="mailto:contact@getoutapp.pt" style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            padding: '10px 24px', borderRadius: '12px', color: 'var(--text-main)', textDecoration: 'none', fontSize: '14px', fontWeight: '500'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            contact@getoutapp.pt
          </a>

          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/getoutappios/" target="_blank" rel="noopener noreferrer" style={socialButtonStyle} aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>

          {/* X (Twitter) */}
          <a href="https://x.com/GetOutAppIos" target="_blank" rel="noopener noreferrer" style={socialButtonStyle} aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" /></svg>
          </a>

          {/* TIKTOK */}
          <a href="https://www.tiktok.com/@getoutappios" target="_blank" rel="noopener noreferrer" style={socialButtonStyle} aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" /></svg>
          </a>
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', marginBottom: '40px' }}>
          <Link href="/features" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.features}
          </Link>
          <Link href="/pricing" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.pricing}
          </Link>
          <Link href="/#testimonials" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.testimonials}
          </Link>
          <Link href="/privacy" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.privacy}
          </Link>
          <Link href="/terms" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.terms}
          </Link>
          <Link href="/cookies" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.cookies}
          </Link>
          <Link href="/complaints" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.complaints}
          </Link>
          <Link href="/disputes" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.disputes}
          </Link>
        </nav>

        <p style={{ color: isDarkMode ? '#444' : '#999', fontSize: '11px' }}>
          © 2026 GetOut Social. All rights reserved.
        </p>

        {/* RAL TEXT */}
        <p style={{
          color: isDarkMode ? '#444' : '#999',
          fontSize: '10px',
          textAlign: 'center',
          maxWidth: '800px',
          marginTop: '20px',
          lineHeight: '1.5'
        }}>
          {t.footer.ral_text}
        </p>

      </footer>
    </div>
  );
}