import { NextResponse } from "next/server";

// App Links — associa getoutapp.pt à app Android.
// Servido em https://getoutapp.pt/.well-known/assetlinks.json
//
// sha256_cert_fingerprints deve incluir a chave com que a app é assinada
// para os utilizadores. Como a app usa Google Play App Signing, é
// OBRIGATÓRIO incluir o SHA-256 da "App signing key" da Play Console.
// A upload key também está incluída (útil para builds locais).
const UPLOAD_KEY_SHA256 =
  "74:51:18:83:D8:DC:70:15:AC:2F:14:60:DF:AD:0F:E6:83:10:3C:64:40:35:26:82:92:ED:EB:D3:DF:9A:4D:61";

// TODO: substituir pelo SHA-256 da "App signing key certificate" da Play Console
const PLAY_SIGNING_SHA256 = "REPLACE_WITH_PLAY_APP_SIGNING_SHA256";

export function GET() {
  const fingerprints = [UPLOAD_KEY_SHA256];
  if (PLAY_SIGNING_SHA256 !== "REPLACE_WITH_PLAY_APP_SIGNING_SHA256") {
    fingerprints.push(PLAY_SIGNING_SHA256);
  }

  return NextResponse.json(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "pt.getoutapp.getout",
          sha256_cert_fingerprints: fingerprints,
        },
      },
    ],
    { headers: { "Content-Type": "application/json" } }
  );
}
