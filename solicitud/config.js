// =====================================================================
//  CONFIGURACIÓN DE /solicitud
//  Todo lo que se cambia a mano está aquí. El resto vive en index.html.
// =====================================================================
window.SOLICITUD_CONFIG = {
  // Base de datos (la misma del portal). La Publishable key está hecha para ser pública. NUNCA la Secret.
  SUPABASE_URL: 'https://ypguioklwhyixacfuksu.supabase.co',
  SUPABASE_KEY: 'sb_publishable_qjTIY_M5HJ9R653m_uOmXw_bBbVTibS',

  // Pixel de Meta: PageView, Lead (solo si califica), LeadNoCalifica y Schedule
  PIXEL_ID: '580716017132096',

  // Tu evento de Cal.com: lo que va después de cal.com/ (ej. 'connectstudios/llamada').
  // Mientras diga PLACEHOLDER se usa el Calendly de abajo, así nada se rompe.
  CAL_LINK: 'manuel-alejandro-perez-pbnkac/llamada',
  CALENDLY_RESPALDO: 'https://calendly.com/elojodemanu/45min',

  // Video en la pantalla de "no califica": ID de un Short de YouTube (ej. 'abc123XYZ')
  // o link a un .mp4. Vacío lo oculta.
  VIDEO_GRACIAS_URL: '',

  LINK_AVISO_PRIVACIDAD: '/privacidad.html#solicitudes',

  // Tu WhatsApp con 52 y sin +, para el botón "Prefiero WhatsApp"
  WHATSAPP: '523323362662'
};
