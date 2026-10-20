import React, { useEffect } from 'react';

const sections = [
  {
    title: 'Quién es responsable del tratamiento',
    content: (
      <>
        <p>El responsable del tratamiento de los datos personales es <strong>Johan Ochoa</strong>, quien opera bajo el nombre comercial <strong>Agente Jota</strong>.</p>
        <address className="mt-4 not-italic">
          Calle 62 # 14-19<br />
          Bogotá, Colombia · Código postal 113111<br />
          <a href="tel:+573011360508">+57 301 136 0508</a><br />
          <a href="mailto:jotaochoa@gmail.com">jotaochoa@gmail.com</a>
        </address>
      </>
    ),
  },
  {
    title: 'Qué información podemos tratar',
    content: (
      <>
        <p>Tratamos la información que nos entregas voluntariamente al contactarnos o solicitar nuestros servicios, por ejemplo, nombre, datos de contacto, profesión o actividad y el contenido de tu consulta. Los campos concretos pueden variar según el formulario y se muestran en el momento de diligenciarlo.</p>
        <p>En la landing de servicios profesionales, el nombre —obligatorio— y la profesión —opcional— se mantienen en el navegador para personalizar la portada de muestra. Si eliges continuar por WhatsApp, esos datos se incorporan al enlace y al mensaje para que puedas revisarlo antes de enviarlo. No se envían a Agente Jota mediante ese gesto hasta que tú abras y envíes el mensaje.</p>
      </>
    ),
  },
  {
    title: 'Para qué usamos la información',
    content: (
      <ul>
        <li>Responder consultas y solicitudes que nos envías.</li>
        <li>Conversar sobre el alcance de un proyecto y preparar una propuesta cuando la solicitas.</li>
        <li>Prestar y dar seguimiento a los servicios que contratas, y atender solicitudes relacionadas con ellos.</li>
        <li>Atender obligaciones legales y proteger nuestros derechos.</li>
        <li>Comprender de forma general el uso de algunas páginas mediante herramientas de medición indicadas en esta política.</li>
      </ul>
    ),
  },
  {
    title: 'Autorización y carácter facultativo',
    content: <p>Esta política informa sobre el tratamiento, pero no constituye por sí sola una autorización para tratar tus datos. Cuando la ley exija autorización, la solicitaremos por separado mediante un mecanismo previo, informado y verificable, antes del tratamiento correspondiente. Si nos envías una consulta, usaremos la información necesaria para atender esa solicitud y, cuando corresponda, prestar el servicio que hayas pedido. Puedes abstenerte de entregar datos opcionales; algunos datos pueden ser necesarios para responderte. No solicitamos datos sensibles como requisito para explorar nuestros servicios.</p>,
  },
  {
    title: 'Formularios y servicios de terceros',
    content: (
      <>
        <p>Algunos formularios de contacto o captura de prospectos se integran con LeadConnector/GoHighLevel. Los campos disponibles dependen del formulario que esté activo. Cuando completas uno, la información que envías puede ser tratada mediante esa plataforma para recibir y gestionar la solicitud. La integración técnica no permite establecer por sí sola los plazos de conservación, las condiciones contractuales ni la ubicación de los servidores del proveedor.</p>
        <p>Si decides enviar un mensaje por WhatsApp, el mensaje se procesa a través de WhatsApp y queda sujeto también a sus condiciones y política de privacidad. El reproductor de YouTube se carga cuando eliges reproducir el video. Algunas páginas cargan fuentes de Google Fonts; la sección de servicios locales utiliza el píxel de Meta para registrar eventos de visita. Estos servicios pueden recibir información técnica del navegador conforme a sus propias políticas y a la configuración vigente.</p>
        <p>El idioma preferido del sitio puede guardarse localmente en tu navegador mediante la clave <code>jota_lang</code>. Puedes borrar ese almacenamiento desde la configuración del navegador.</p>
      </>
    ),
  },
  {
    title: 'Transmisión o transferencia internacional',
    content: <p>Algunas funciones pueden involucrar plataformas de terceros, como WhatsApp, YouTube, Google Fonts, Meta o LeadConnector/GoHighLevel. La información técnica disponible en el sitio no permite confirmar las ubicaciones de almacenamiento ni las condiciones contractuales aplicables a cada proveedor, ni afirmar que una transferencia internacional específica haya ocurrido. Si para una finalidad determinada se realiza una transmisión o transferencia internacional de datos personales, se aplicarán las condiciones y garantías exigidas por la legislación colombiana, y se informará lo pertinente en el mecanismo de autorización o aviso correspondiente.</p>,
  },
  {
    title: 'Tus derechos',
    content: (
      <>
        <p>De acuerdo con la Ley 1581 de 2012, puedes conocer, actualizar y rectificar tus datos; solicitar prueba de la autorización cuando corresponda; preguntar por el uso que se les ha dado; presentar quejas ante la Superintendencia de Industria y Comercio una vez agotado el trámite ante el responsable; revocar la autorización y/o solicitar la supresión del dato cuando sea procedente; y acceder gratuitamente a tus datos personales.</p>
        <p>Para ejercer estos derechos, escribe a <a href="mailto:jotaochoa@gmail.com">jotaochoa@gmail.com</a> con el asunto “Consulta de datos personales” o “Reclamo de datos personales”. Indica tu nombre, cómo podemos contactarte, el derecho que deseas ejercer y la información necesaria para identificar la solicitud. Podremos pedir datos razonables para verificar tu identidad. Si actúas mediante representante, incluye la acreditación correspondiente.</p>
        <p>Las consultas se atienden dentro de diez (10) días hábiles desde su recepción. Si no es posible responder en ese plazo, te informaremos el motivo y la nueva fecha, que no superará cinco (5) días hábiles adicionales. Los reclamos se atienden dentro de quince (15) días hábiles; si se requiere una prórroga, se informará antes del vencimiento y no podrá exceder ocho (8) días hábiles adicionales. Si el reclamo está incompleto, se solicitará la información faltante dentro de los cinco (5) días siguientes; el término se contará conforme al procedimiento legal una vez recibido el reclamo completo.</p>
      </>
    ),
  },
  {
    title: 'Conservación y seguridad',
    content: <p>Conservamos la información durante el tiempo necesario para atender la finalidad para la que fue recopilada y cumplir obligaciones legales o contractuales aplicables. El plazo puede variar según el tipo de relación y los requisitos legales; no fijamos en esta política un período único para todos los datos. Aplicamos medidas razonables para proteger la información, sin que ningún medio de transmisión o almacenamiento pueda garantizar seguridad absoluta.</p>,
  },
  {
    title: 'Cambios a esta política',
    content: <p>Podemos actualizar esta política para reflejar cambios legales o en el tratamiento de datos. Publicaremos la versión vigente en esta página e indicaremos la fecha de actualización.</p>,
  },
];

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const pageDescription = 'Consulta cómo Agente Jota trata tus datos personales, para qué los usa y cómo puedes ejercer tus derechos.';

    document.title = 'Política de privacidad | Agente Jota';
    if (description) description.content = pageDescription;
    if (canonical) canonical.href = 'https://www.agentejota.com/politica-de-privacidad';

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
      if (canonical && previousCanonical) canonical.href = previousCanonical;
    };
  }, []);

  return (
  <main className="min-h-screen bg-[#080a09] px-5 py-14 text-[#f4f1e9] sm:px-8 sm:py-20">
    <article className="mx-auto max-w-4xl">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-[#b9c9c2] underline-offset-4 hover:text-white hover:underline">
        <span aria-hidden="true">←</span> Agente Jota
      </a>
      <header className="mb-12 mt-16 border-b border-white/15 pb-9 sm:mb-16 sm:mt-20 sm:pb-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#6bd0bf]">Agente Jota · Información legal</p>
        <h1 className="max-w-3xl font-['Montserrat'] text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">Política de tratamiento de datos personales</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">Te contamos qué información tratamos cuando visitas nuestros sitios o te pones en contacto con nosotros, para qué la usamos y cómo puedes ejercer tus derechos.</p>
        <p className="mt-5 text-sm text-white/50">Última actualización: 20 de octubre de 2026</p>
      </header>

      <div className="space-y-10 sm:space-y-12">
        {sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`privacy-section-${index}`} className="grid gap-3 border-b border-white/10 pb-9 sm:grid-cols-[minmax(190px,0.75fr)_1.25fr] sm:gap-10 sm:pb-11">
            <h2 id={`privacy-section-${index}`} className="font-['Montserrat'] text-xl font-semibold leading-snug text-white sm:text-2xl">{section.title}</h2>
            <div className="space-y-4 text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8 [&_a]:text-[#9be0d3] [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_li]:leading-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-semibold [&_strong]:text-white [&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm">{section.content}</div>
          </section>
        ))}
      </div>

      <footer className="mt-10 flex flex-col gap-3 text-sm text-white/50 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
        <span>Johan Ochoa · Agente Jota</span>
        <a className="text-[#9be0d3] underline-offset-4 hover:underline" href="mailto:jotaochoa@gmail.com">Consultas sobre datos personales</a>
      </footer>
    </article>
  </main>
  );
};
