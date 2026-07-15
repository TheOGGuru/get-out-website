"use client";

import { useParams } from "next/navigation";

const APP_STORE = "https://apps.apple.com/app/id6775430507";
const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=pt.getoutapp.getout";

export default function JoinPage() {
  const params = useParams();
  const code = (params?.code as string) ?? "";

  return (
    <main
      style={{
        paddingTop: "var(--nav-height)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px 32px",
          textAlign: "center",
          backdropFilter: "blur(20px)",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎉</div>
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "var(--text-main)",
            marginBottom: "12px",
          }}
        >
          Convite para Colaborador
        </h1>
        <p
          style={{
            color: "var(--text-dim)",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            marginBottom: "24px",
          }}
        >
          Foste convidado para ajudar a gerir um evento no GetOut. Instala a app,
          inicia sessão e o teu convite será detetado automaticamente.
        </p>

        {code && (
          <div
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "rgba(255,107,0,0.12)",
              border: "1px solid rgba(255,107,0,0.35)",
              borderRadius: "14px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Código do convite
            </div>
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "var(--primary)",
                letterSpacing: "2px",
              }}
            >
              {code}
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              style={{ height: "50px", borderRadius: "8px" }}
            />
          </a>
          <a href={GOOGLE_PLAY} target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png"
              alt="Get it on Google Play"
              style={{ height: "50px", borderRadius: "8px" }}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
