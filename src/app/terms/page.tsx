"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1 className="text-gradient" style={{ textAlign: "center", marginBottom: "1rem" }}>
          {t.terms_page.title}
        </h1>
        <p style={{ textAlign: "center", color: "var(--text-dim)", marginBottom: "3rem" }}>
          {t.terms_page.last_updated}
        </p>

        <div className="glass-card" style={{ padding: "40px" }}>
          <section style={{ marginBottom: "2.5rem" }}>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.intro_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.section_1_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {(t.terms_page as any)?.section_1_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.section_2_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.section_2_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.section_3_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.section_3_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.section_4_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {(t.terms_page as any)?.section_4_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {(t.terms_page as any)?.section_5_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {(t.terms_page as any)?.section_5_text}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
