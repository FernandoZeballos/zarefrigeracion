// Utility to construct contact URLs dynamically to avoid simple scrapers
export const getContactInfo = () => {
  // Obfuscated parts
  const parts = {
    c: "54",
    a: "9",
    area: "11",
    p1: "3704",
    p2: "6458",
  };

  const phoneNumber = `${parts.c}${parts.a}${parts.area}${parts.p1}${parts.p2}`;

  // QR Code Generation URL (using native API but hiding the source in code slightly)
  const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:Zeballos;Adrian;;;\nFN:Adrian Zeballos\nORG:Z.A. Refrigeracion\nTEL;TYPE=CELL:+${phoneNumber}\nEMAIL:z.arefrigeracion@gmail.com\nEND:VCARD`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(vCard)}`;

  return {
    phone: phoneNumber,
    whatsappUrl: `https://wa.me/${phoneNumber}`,
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
