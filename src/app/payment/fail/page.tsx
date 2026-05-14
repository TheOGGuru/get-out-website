"use client";

export default function PaymentFailPage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#121637",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "inherit",
      }}
    >
      <div style={{ fontSize: "80px", lineHeight: 1, marginBottom: "24px" }}>❌</div>

      <h1
        style={{
          color: "#ffffff",
          fontSize: "clamp(1.5rem, 5vw, 2rem)",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        Pagamento não concluído
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
          textAlign: "center",
          maxWidth: "340px",
          lineHeight: 1.6,
          marginBottom: "40px",
        }}
      >
        Ocorreu um problema com o teu pagamento.
        <br />
        Volta à app GetOut e tenta novamente.
      </p>

      <button
        onClick={() => window.close()}
        style={{
          backgroundColor: "#FF6A00",
          color: "#ffffff",
          border: "none",
          borderRadius: "12px",
          padding: "16px 40px",
          fontSize: "1rem",
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: "0.02em",
          width: "100%",
          maxWidth: "320px",
        }}
      >
        Voltar à app
      </button>
    </div>
  );
}
