import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { openWhatsApp } from "@/utils/contact";

interface ContactFormData {
  servicio: string;
  zona: string;
  nombre: string;
  telefono: string;
}

interface ContactFormReturn {
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  formData: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleServiceSelect: (service: string) => void;
  handleSubmit: (e: FormEvent) => void;
  resetForm: () => void;
}

const INITIAL_FORM_DATA: ContactFormData = {
  servicio: "",
  zona: "",
  nombre: "",
  telefono: "",
};

const buildWhatsAppMessage = (formData: ContactFormData): string => {
  const { nombre, telefono, servicio, zona } = formData;

  const params = new URLSearchParams(window.location.search);
  const isFromCard = params.get("ref") === "qr";
  const origen = isFromCard ? "\n(Vengo de la tarjeta de presentación)" : "";

  const servicioText = servicio ? `\nNecesito: *${servicio}*` : "";
  const zonaText = zona ? `\nZona: *${zona}*` : "";

  return `Hola *Z.A.Refrigeracion*!\n\nMi nombre es: *${nombre}*\nMi WhatsApp: *${telefono}*${servicioText}${zonaText}\n\nMe gustaría solicitar un presupuesto.${origen}`;
};

export const useContactForm = (): ContactFormReturn => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = useCallback(() => setStep((s) => Math.min(s + 1, 3)), []);
  const prevStep = useCallback(() => setStep((s) => Math.max(s - 1, 1)), []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleServiceSelect = useCallback((service: string) => {
    setFormData((prev) => ({ ...prev, servicio: service }));
    setTimeout(() => {
      setStep(2);
    }, 300); // Small delay for UX transition
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setStep(1);
    setIsSubmitted(false);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!formData.nombre || !formData.telefono) return;

      setIsSubmitting(true);

      const message = buildWhatsAppMessage(formData);
      openWhatsApp(message);

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
      setStep(1);
    },
    [formData],
  );

  return {
    step,
    setStep,
    nextStep,
    prevStep,
    formData,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleServiceSelect,
    handleSubmit,
    resetForm,
  };
};
