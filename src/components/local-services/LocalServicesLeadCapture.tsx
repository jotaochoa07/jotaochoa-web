import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { localServicesConfig } from '../../data/localServices';
import { trackLocalServicesEvent } from '../../lib/analytics';

const interests = ['Web Express', 'Web Negocio', 'Web + IA', 'Coti App', 'Asistente IA + Voice Chat', 'Automatización'];

export const LocalServicesLeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hola Jota, quiero conversar sobre Local Services.',
      `Nombre: ${data.get('name')}`,
      `Negocio: ${data.get('business')}`,
      `Teléfono: ${data.get('phone')}`,
      `Interés: ${data.get('interest')}`,
    ].join('\n');
    trackLocalServicesEvent('whatsapp_click', { placement: 'lead_form', interest: data.get('interest') });
    setSubmitted(true);
    window.open(`https://wa.me/${localServicesConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-white/15 bg-white/[0.04] p-6 sm:grid-cols-2 sm:p-8">
      <label className="ls-field">Nombre<input name="name" required autoComplete="name" /></label>
      <label className="ls-field">Negocio<input name="business" required autoComplete="organization" /></label>
      <label className="ls-field">Teléfono<input name="phone" required inputMode="tel" autoComplete="tel" /></label>
      <label className="ls-field">Servicio de interés
        <select name="interest" required defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          {interests.map((interest) => <option key={interest}>{interest}</option>)}
        </select>
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="ls-primary-button w-full sm:w-auto">
          Continuar por WhatsApp <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="mt-3 text-xs text-white/45">
          No almacenamos estos datos en la página. Se enviarán únicamente cuando continúes a WhatsApp.
        </p>
        {submitted && <p role="status" className="mt-3 text-sm font-bold text-[#18d5e5]">Abrimos WhatsApp para continuar la conversación.</p>}
      </div>
    </form>
  );
};
