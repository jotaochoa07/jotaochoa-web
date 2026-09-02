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
- `src/components/local-services/LocalServicesLeadCapture.tsx`: native GoHighLevel form embed and attribution-aware conversation handoff.
- `src/data/localServices.ts`: public commercial configuration and service cards.
- `src/lib/analytics.ts`: lightweight analytics event adapter.
- `servicios-locales.html`: route-specific SEO, social metadata and structured data.

## Video

The landing has two deferred video players. YouTube is loaded only after the visitor presses play:

- Intro / pages with virtual assistants: `https://youtu.be/wiDRwcgXR6U`
- Coti App: `https://youtu.be/Q8eo2bV0Ovc`

The defaults can be overridden with `VITE_LOCAL_SERVICES_VIDEO_URL` and `VITE_COTI_VIDEO_URL`. Both accept YouTube, Vimeo or direct HTML5 video URLs. If a URL is removed, the component shows a branded fallback without a broken player.

## WhatsApp

The campaign number and default message live in `src/data/localServices.ts`. The current URL is generated with the Colombian number `573011360508`. Form data is not stored in the frontend. The native GHL form captures name, business, phone and interest, then its configured post-submit action must redirect to WhatsApp so the conversation remains associated with the GHL contact.

## Analytics and attribution

`src/lib/analytics.ts` emits these events:

- `landing_visit`
- `click_whatsapp_hero`
- `click_whatsapp_header`
- `click_whatsapp_floating`
- `click_whatsapp_web_express`
- `click_whatsapp_final`
- `click_whatsapp_form`
- `pricing_view`
- `play_intro_video`
- `play_coti_video`
- `click_voice_ai`
- `submit_lead_form`
- `select_service`
- `coti_interest`
- `assistant_interest`
- `automation_interest`

Every payload includes `source=local-services` and `campaign=volante-fusa`. If `window.dataLayer` exists, events are pushed there. A `local-services:analytics` browser event is also emitted so another analytics provider can subscribe without changing page components.

Video events are emitted when the visitor explicitly activates a player. Loading the page or a poster is not counted as playback.

## GoHighLevel integration

### Voice AI Widget

The adapter is `src/components/local-services/GHLVoiceAgent.tsx`, mounted from `LocalServicesLanding.tsx`.

When GoHighLevel provides the official embed:

1. The current widget is configured with script `https://widgets.leadconnectorhq.com/loader.js`, resources URL `https://widgets.leadconnectorhq.com/chat-widget/loader.js` and widget ID `6a9713a2abe0b12bac7fc294`.
2. These values can be overridden with `VITE_GHL_VOICE_WIDGET_SCRIPT_URL`, `VITE_GHL_VOICE_WIDGET_RESOURCES_URL` and `VITE_GHL_VOICE_WIDGET_ID` in Vercel.
3. If GHL later requires additional provider markup, convert only that markup into a small React element and pass it through the `embed` prop.

Do not paste secrets or API tokens into Git. Do not reuse the existing portfolio widget ID unless GHL confirms it belongs to Local Services. The adapter loads the script asynchronously; a script failure changes only the demo card and cannot break the rest of the landing.

### Lead form

The landing now embeds the official GHL form `3kwoqFYs5XIHIUuKqSb3`. It captures name, business, phone and service of interest. The iframe URL carries `source=local-services` and `campaign=volante-fusa` as query context. In GHL, configure the form's post-submit action to redirect to the WhatsApp conversation flow and keep the contact association.

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

The Coti App player uses the campaign thumbnail copied from `C:\Workspace\Projects\Jota_Lab_IA_YT\Cotizaciones_Video\miniatura_v1.png` to `public/local-services/coti-video-thumbnail.png`. The image is shown before interaction; the YouTube embed is created only after the visitor presses play.

The Web + IA / Automatización section uses the existing Agent-First video and its thumbnail copied from `C:\Workspace\Projects\Jota_Lab_IA_YT\paginas_agent-first.png` to `public/local-services/agent-first-video-thumbnail.png`. The separate “Tú conoces tu negocio / Yo me encargo de Internet” introduction remains a video-in-preparation placeholder until its recording and URL exist.

The experience section uses real project material and clearly avoids presenting it as testimonials:

- SAI WATER logo: copied from `C:\Workspace\Clients\SAI-WATER\cotizaciones-repo\cotizaciones\vendor\design-system\assets\logo\sai-water-white.svg` to `public/local-services/sai-water-white.svg`.
- Amarte Suite screenshot: `public/agents/img-ajustadas/redesign-1.png`.
- Invisa México screenshot: `public/agents/img-ajustadas/redesign-main.png`.

The three compact project reviews use concise first-person descriptions and five-star visual ratings. Confirm final wording with the project owners before presenting any text as a literal testimonial.

## Pending next pass

- Review the complete page visually on a physical phone and a desktop monitor, with special attention to reading comfort for people aged 55–65.
- Confirm the final commercial wording for the three compact project summaries with the project owners before presenting any text as a literal testimonial.
- Replace the Voice AI placeholder with the official GoHighLevel widget when its script, widget ID and embed are available.
- Connect the lead form to GoHighLevel and verify `source=local-services` and `campaign=volante-fusa` attribution end to end.
- Run the final review and deployment workflow only after Jota approves this conversion pass.

Current verification: production build passes, lint reports only pre-existing warnings, YouTube players remain deferred until interaction, the stopwatch progresses `12 → 24 → 36 → 48`, the FAQ contains six objection-closing questions, mobile shows the `Otros servicios` menu link and a hinted horizontal services carousel without the duplicated Web Express card, desktop retains the full grid, and tested mobile/desktop widths have no horizontal overflow.

The current WhatsApp fallback already includes the source and campaign in its prefilled message; the remaining item is to map those values into GHL fields once the native integration is configured.

## Meta Pixel setup

The landing includes the `MetaPixel` component with Pixel ID `3381316055373920`. `VITE_META_PIXEL_ID` may override it per environment. The component sends `PageView` once and includes the noscript fallback.

1. In Meta Business Manager, open **Events Manager → Connect data sources → Web → Meta Pixel** and create a pixel for AgenteJota.
2. Copy the numeric Pixel ID (not a token or password) and send it to the developer.
3. Add `VITE_META_PIXEL_ID` with that value in Vercel for Production, then redeploy.
4. Verify `PageView` in Events Manager using Test Events. Later we can map form completion and WhatsApp clicks to `Lead`/`Contact` after confirming the GHL redirect.

## Deployment

The repo remains a Vite site deployed through Vercel. `vercel.json` routes `/servicios-locales` to the dedicated HTML entry and redirects `/local-services`. No DNS, GHL domain, `lab.agentejota.com`, OVH or Coolify configuration is changed by this landing.
