# Local Services landing

## Public route

- Canonical: `https://agentejota.com/servicios-locales`
- Legacy alias: `/local-services` redirects permanently to `/servicios-locales`.
- Hosting remains in the current Vercel project. Do not move the root domain or change DNS for this landing.

## Business source of truth

Pricing, products, conditions and commercial promises are governed by:

`C:\JotaOS\100 - Proyectos\Local Services\LOCAL-SERVICES-MASTER.md`

Update the MASTER first, then propagate approved changes to `src/data/localServices.ts` and the landing components.

## Structure

- `src/components/local-services/LocalServicesLanding.tsx`: page composition.
- `src/components/local-services/LocalServicesVideo.tsx`: configurable video or branded placeholder.
- `src/components/local-services/GHLVoiceAgent.tsx`: provider adapter and safe placeholder.
- `src/components/local-services/LocalServicesLeadCapture.tsx`: lead fields with a temporary WhatsApp handoff.
- `src/data/localServices.ts`: public commercial configuration and service cards.
- `src/lib/analytics.ts`: lightweight analytics event adapter.
- `servicios-locales.html`: route-specific SEO, social metadata and structured data.

## Video

Set `VITE_LOCAL_SERVICES_VIDEO_URL` in Vercel to a public YouTube, Vimeo or direct HTML5 video URL. The component detects the provider. If the value is absent, the page shows a branded placeholder without a broken player.

## WhatsApp

The campaign number and default message live in `src/data/localServices.ts`. The current URL is generated with the Colombian number `573011360508`. Form data is not stored in the frontend; until GHL is connected, the form hands the conversation to WhatsApp.

## Analytics and attribution

`src/lib/analytics.ts` emits these events:

- `landing_visit`
- `whatsapp_click`
- `pricing_view`
- `video_play`
- `coti_interest`
- `assistant_interest`
- `automation_interest`

Every payload includes `source=local-services` and `campaign=volante-fusa`. If `window.dataLayer` exists, events are pushed there. A `local-services:analytics` browser event is also emitted so another analytics provider can subscribe without changing page components.

Direct HTML5 video emits `video_play` on playback. YouTube/Vimeo play tracking requires the provider's player API when the final video is configured; loading an iframe is intentionally not counted as a play.

## GoHighLevel integration

### Voice AI Widget

The adapter is `src/components/local-services/GHLVoiceAgent.tsx`, mounted from `LocalServicesLanding.tsx`.

When GoHighLevel provides the official embed:

1. Add `VITE_GHL_VOICE_WIDGET_SCRIPT_URL` and `VITE_GHL_VOICE_WIDGET_ID` to Vercel.
2. Convert only the provider's required widget markup into a small React element.
3. Pass that element through the `embed` prop of `GHLVoiceAgent` in `LocalServicesLanding.tsx`.

Do not paste secrets or API tokens into Git. Do not reuse the existing portfolio widget ID unless GHL confirms it belongs to Local Services. The adapter loads the script asynchronously; a script failure changes only the demo card and cannot break the rest of the landing.

### Lead form

The current form contains the minimum fields: name, business, phone and service of interest. When the GHL form or API configuration is ready, replace the WhatsApp handoff inside `LocalServicesLeadCapture.tsx` with the official GHL form/embed or a server-side submission. Preserve attribution fields:

- `source`: `local-services`
- `campaign`: `volante-fusa`

Never store leads only in browser state or local storage. Never expose a private GHL token in a `VITE_` variable.

### Provider isolation and removal

All GHL-specific loading stays inside `GHLVoiceAgent` and the future form adapter. The rest of the page imports no GHL SDK and relies on no GHL global. To remove GHL safely:

1. Remove the two GHL environment variables.
2. Remove the `embed` prop if configured.
3. Keep the placeholder or replace the adapter with WhatsApp.

The page, pricing, SEO and WhatsApp remain functional.

## Assets

The campaign visual reference was inspected read-only at:

`C:\Workspace\Clients\Local Services\Branding\volante_impresion_jota-local-services_oficial.png`

No heavy flyer asset was duplicated into the site. Existing optimized brand assets in `public/` are reused.

## Deployment

The repo remains a Vite site deployed through Vercel. `vercel.json` routes `/servicios-locales` to the dedicated HTML entry and redirects `/local-services`. No DNS, GHL domain, `lab.agentejota.com`, OVH or Coolify configuration is changed by this landing.
