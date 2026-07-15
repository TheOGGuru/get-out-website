import { NextResponse } from "next/server";

// Universal Links — associa getoutapp.pt à app iOS (Team ID + Bundle ID).
// Servido em https://getoutapp.pt/.well-known/apple-app-site-association
export function GET() {
  return NextResponse.json(
    {
      applinks: {
        details: [
          {
            appIDs: ["G6XFBNM75D.pt.getoutapp.getout"],
            components: [
              { "/": "/event/*" },
              { "/": "/join/*" },
              { "/": "/invite/*" },
            ],
          },
        ],
      },
    },
    { headers: { "Content-Type": "application/json" } }
  );
}
