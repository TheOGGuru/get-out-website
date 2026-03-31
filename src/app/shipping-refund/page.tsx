"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ShippingRefundPage() {
  const { t } = useLanguage();

  return (
    <>
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <div className="container">
          <div className="glass-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ marginBottom: "2rem" }}>{t.shipping_refund_page.title}</h1>
            
            <div style={{ color: "var(--text-dim)", lineHeight: "1.6" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                {t.shipping_refund_page.last_updated}
              </p>

              <p style={{ marginBottom: "2rem" }}>
                {t.shipping_refund_page.intro_text}
              </p>

              <h3 style={{ color: "var(--text-main)", marginTop: "2rem", marginBottom: "1rem" }}>{t.shipping_refund_page.shipping_title}</h3>
              <p style={{ marginBottom: "1rem" }}>
                {t.shipping_refund_page.shipping_text}
              </p>

              <h3 style={{ color: "var(--text-main)", marginTop: "2rem", marginBottom: "1rem" }}>{t.shipping_refund_page.refund_title}</h3>
              <p style={{ marginBottom: "1rem" }}>
                {t.shipping_refund_page.refund_text}
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", marginBottom: "1.5rem" }}>
                {t.shipping_refund_page.refund_list.map((item, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>{item}</li>
                ))}
              </ul>

              <h3 style={{ color: "var(--text-main)", marginTop: "2rem", marginBottom: "1rem" }}>{t.shipping_refund_page.contact_title}</h3>
              <p>
                {t.shipping_refund_page.contact_text}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
