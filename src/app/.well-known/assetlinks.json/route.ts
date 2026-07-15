import { NextResponse } from "next/server";

// App Links — associa getoutapp.pt à app Android.
// Servido em https://getoutapp.pt/.well-known/assetlinks.json
//
// Inclui todas as SHA-256 conhecidas (upload key + as registadas no
// Firebase, que cobrem a app signing key do Google Play). O Android
// verifica se ALGUMA corresponde à app instalada.
const SHA256_FINGERPRINTS = [
  // Upload key (build local)
  "74:51:18:83:D8:DC:70:15:AC:2F:14:60:DF:AD:0F:E6:83:10:3C:64:40:35:26:82:92:ED:EB:D3:DF:9A:4D:61",
  // Registadas no Firebase (pt.getoutapp.getout)
  "BE:58:F8:29:C1:C1:99:AC:4C:72:B2:CA:77:FB:C6:E4:66:05:26:AB:C0:C2:8E:63:67:05:B3:B2:8D:5B:6B:0E",
  "82:AB:70:A8:63:DE:1E:50:3D:F5:39:19:D8:C4:85:5F:3F:B3:F6:82:CB:88:5F:50:37:93:72:A0:41:90:01:6B",
];

export function GET() {
  return NextResponse.json(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "pt.getoutapp.getout",
          sha256_cert_fingerprints: SHA256_FINGERPRINTS,
        },
      },
    ],
    { headers: { "Content-Type": "application/json" } }
  );
}
