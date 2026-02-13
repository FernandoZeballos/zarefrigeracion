// Utility to construct contact URLs dynamically to avoid simple scrapers
export const getContactInfo = () => {
  // Obfuscated parts
  const parts = {
    c: "54",
    a: "9",
    area: "11",
    p1: "6143",
    p2: "2681",
  };

  const phoneNumber = `${parts.c}${parts.a}${parts.area}${parts.p1}${parts.p2}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const qrMessage =
    "Hola Z.A. Refrigeración, escaneé el código QR y quisiera hacer una consulta.";
  const whatsappQrUrl = `${whatsappUrl}?text=${encodeURIComponent(qrMessage)}`;

  // QR Code Generation URL (points directly to WhatsApp with message)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappQrUrl)}`;

  return {
    phone: phoneNumber,
    whatsappUrl,
    telUrl: `tel:+${phoneNumber}`,
    qrUrl,
  };
};

export const openWhatsApp = (text?: string) => {
  const { whatsappUrl } = getContactInfo();
  const url = text
    ? `${whatsappUrl}?text=${encodeURIComponent(text)}`
    : whatsappUrl;
  window.open(url, "_blank");
};

export const openPhone = () => {
  const { telUrl } = getContactInfo();
  window.location.href = telUrl;
};
