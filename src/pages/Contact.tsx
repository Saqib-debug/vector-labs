import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";

import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Target,
  Wallet,
  Sparkles,
  Clock,
  ShieldCheck,
  Send,
  ChevronRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  budgetRangeOptions,
  businessTypeOptions,
  contactNextSteps,
  contactOptions,
  contactPageFaqs,
  mainGoalOptions,
} from "@/data/contact";
import { useRouter } from "@/lib/router";

type ContactFormData = {
  fullName: string;
  businessName: string;
  businessType: string;
  websiteUrl: string;
  location: string;
  email: string;
  phone: string;
  mainGoal: string;
  budgetRange: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const FORM_STORAGE_KEY = "vector-labs-contact-intake";
const FORM_DEVICE_ID_KEY = "vector-labs-contact-device-id";
const FORM_SUBMITTED_KEY = "vector-labs-contact-submitted";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function getOrCreateDeviceId() {
  const existing = localStorage.getItem(FORM_DEVICE_ID_KEY);
  if (existing) return existing;

  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  localStorage.setItem(FORM_DEVICE_ID_KEY, id);
  return id;
}

const steps = [
  {
    number: "01",
    title: "Business Profile",
    description: "Basic context about the business, its type, and where it operates.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Growth Goals",
    description: "What the business wants to improve and the level of budget readiness.",
    icon: Target,
  },
  {
    number: "03",
    title: "Contact Details",
    description: "How to follow up, plus a final review before submission.",
    icon: Send,
  },
] as const;

const initialForm: ContactFormData = {
  fullName: "",
  businessName: "",
  businessType: businessTypeOptions[0]?.value ?? "Service Business",
  websiteUrl: "",
  location: "",
  email: "",
  phone: "",
  mainGoal: "",
  budgetRange: "",
  message: "",
};

function normalizeUrl(value: string) {
  if (!value.trim()) return "";
  return value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;
}

function isValidUrl(value: string) {
  try {
    new URL(normalizeUrl(value));
    return true;
  } catch {
    return false;
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length >= 7;
}

function validateStep(form: ContactFormData, step: number): FormErrors {
  const errors: FormErrors = {};

  if (step === 0) {
    if (form.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
    if (form.businessName.trim().length < 2) errors.businessName = "Please enter the business name.";
    if (!form.businessType) errors.businessType = "Please select the business type.";
    if (form.websiteUrl.trim() && !isValidUrl(form.websiteUrl)) errors.websiteUrl = "Enter a valid website URL.";
    if (form.location.trim().length < 2) errors.location = "Please enter the business location.";
  }

  if (step === 1) {
    if (!form.mainGoal) errors.mainGoal = "Please select the main goal.";
    if (!form.budgetRange) errors.budgetRange = "Please choose a price range.";
    if (form.message.trim().length < 24) errors.message = "Please share a little more detail about the business and goals.";
  }

  if (step === 2) {
    if (!isValidEmail(form.email)) errors.email = "Please enter a valid email address.";
    if (!isValidPhone(form.phone)) errors.phone = "Please enter a valid phone or WhatsApp number.";
  }

  return errors;
}

function getAllErrors(form: ContactFormData) {
  return { ...validateStep(form, 0), ...validateStep(form, 1), ...validateStep(form, 2) };
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-500">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {message}
    </p>
  );
}

/* ─── Floating-label Input ─── */
function FormInput({
  icon: Icon,
  label,
  name,
  value,
  placeholder,
  type = "text",
  error,
  onChange,
  required = false,
}: {
  icon: React.ElementType;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.trim().length > 0;
  const isFloating = focused || hasValue;

  return (
    <div className="relative">
      <div
        className={`group relative rounded-2xl border bg-white transition-all duration-300 ${
          error
            ? "border-rose-300 shadow-[0_0_0_3px_rgba(244,63,94,0.08)]"
            : focused
              ? "border-brand/50 shadow-[0_0_0_4px_rgba(99,102,241,0.08)]"
              : "border-slate-200 shadow-sm hover:border-slate-300"
        }`}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Icon
            className={`h-[18px] w-[18px] transition-colors duration-300 ${
              error ? "text-rose-400" : focused ? "text-brand" : "text-slate-400"
            }`}
          />
        </div>
        <input
          required={required}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={isFloating ? placeholder : " "}
          className="peer block w-full bg-transparent py-4 pl-12 pr-4 text-sm font-medium text-heading outline-none transition-all placeholder:text-transparent"
        />
        <label
          className={`pointer-events-none absolute left-12 transition-all duration-300 ${
            isFloating
              ? "-top-2.5 bg-white px-2 text-[11px] font-semibold uppercase tracking-[0.12em]"
              : "top-1/2 -translate-y-1/2 text-sm font-normal text-slate-400"
          } ${error ? "text-rose-400" : focused || hasValue ? "text-brand" : ""}`}
        >
          {label}
          {required ? <span className="ml-1 text-rose-500">*</span> : null}
        </label>
      </div>
      <FieldError message={error} />
    </div>
  );
}

/* ─── Floating-label Select ─── */
function FormSelect({
  icon: Icon,
  label,
  name,
  value,
  options,
  error,
  onChange,
  required = false,
  placeholder,
}: {
  icon: React.ElementType;
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  error?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  placeholder: string;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.trim().length > 0;
  const isFloating = focused || hasValue || Boolean(placeholder);

  return (
    <div className="relative">
      <div
        className={`group relative rounded-2xl border bg-white transition-all duration-300 appearance-none ${
          error
            ? "border-rose-300 shadow-[0_0_0_3px_rgba(244,63,94,0.08)]"
            : focused
              ? "border-brand/50 shadow-[0_0_0_4px_rgba(99,102,241,0.08)]"
              : "border-slate-200 shadow-sm hover:border-slate-300"
        }`}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Icon
            className={`h-[18px] w-[18px] transition-colors duration-300 ${
              error ? "text-rose-400" : focused ? "text-brand" : "text-slate-400"
            }`}
          />
        </div>
        <select
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="peer block w-full cursor-pointer appearance-none bg-transparent py-4 pl-12 pr-10 text-sm font-medium text-heading outline-none transition-all"
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <ChevronRight className="h-4 w-4 rotate-90 text-slate-400" />
        </div>
        <label
          className={`pointer-events-none absolute left-12 transition-all duration-300 ${
            isFloating
              ? "-top-2.5 bg-white px-2 text-[11px] font-semibold uppercase tracking-[0.12em]"
              : "top-1/2 -translate-y-1/2 text-sm font-normal text-slate-400"
          } ${error ? "text-rose-400" : focused || hasValue ? "text-brand" : ""}`}
        >
          {label}
          {required ? <span className="ml-1 text-rose-500">*</span> : null}
        </label>
      </div>
      <FieldError message={error} />
    </div>
  );
}

/* ─── Floating-label Textarea ─── */
function FormTextarea({
  icon: Icon,
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  required = false,
  charCount,
}: {
  icon: React.ElementType;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  charCount?: number;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.trim().length > 0;
  const isFloating = focused || hasValue;

  return (
    <div className="relative">
      <div
        className={`group relative rounded-2xl border bg-white transition-all duration-300 ${
          error
            ? "border-rose-300 shadow-[0_0_0_3px_rgba(244,63,94,0.08)]"
            : focused
              ? "border-brand/50 shadow-[0_0_0_4px_rgba(99,102,241,0.08)]"
              : "border-slate-200 shadow-sm hover:border-slate-300"
        }`}
      >
        <div className="pointer-events-none absolute left-0 top-4 flex items-center pl-4">
          <Icon
            className={`h-[18px] w-[18px] transition-colors duration-300 ${
              error ? "text-rose-400" : focused ? "text-brand" : "text-slate-400"
            }`}
          />
        </div>
        <textarea
          required={required}
          rows={6}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={isFloating ? placeholder : " "}
          className="peer block w-full resize-none bg-transparent py-4 pl-12 pr-4 text-sm font-medium text-heading outline-none transition-all placeholder:text-transparent"
        />
        <label
          className={`pointer-events-none absolute left-12 transition-all duration-300 ${
            isFloating
              ? "-top-2.5 bg-white px-2 text-[11px] font-semibold uppercase tracking-[0.12em]"
              : "top-4 text-sm font-normal text-slate-400"
          } ${error ? "text-rose-400" : focused || hasValue ? "text-brand" : ""}`}
        >
          {label}
          {required ? <span className="ml-1 text-rose-500">*</span> : null}
        </label>
        {charCount !== undefined && (
          <div
            className={`absolute bottom-3 right-4 text-xs tabular-nums transition-colors ${
              charCount < 24 ? "text-rose-400" : "text-slate-400"
            }`}
          >
            {charCount}
          </div>
        )}
      </div>
      <FieldError message={error} />
    </div>
  );
}

/* ─── Progress Bar ─── */
function StepProgress({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          Step {current + 1} of {total}
        </span>
        <span className="text-xs tabular-nums font-medium text-slate-400">{Math.round(progress)}%</span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand to-brand/70 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand/0 via-white/40 to-white/0 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              i <= current ? "bg-brand/30" : "bg-slate-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Review Item ─── */
function ReviewItem({ label, value, fallback = "Not provided" }: { label: string; value: string; fallback?: string }) {
  return (
    <div className="group flex flex-col gap-1 rounded-xl border border-slate-100 bg-white/60 p-3 transition-all hover:border-brand/20 hover:bg-white">
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</span>
      <span className="text-sm font-medium text-heading">{value || fallback}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const { search } = useRouter();
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const preselectedContext = useMemo(() => {
    const params = new URLSearchParams(search);
    return {
      businessType: params.get("businessType") ?? "",
      mainGoal: params.get("mainGoal") ?? "",
      service: params.get("service") ?? "",
      source: params.get("source") ?? "",
    };
  }, [search]);

  useEffect(() => {
    if (!search) return;
    const params = new URLSearchParams(search);
    const businessType = params.get("businessType");
    const mainGoal = params.get("mainGoal");
    const service = params.get("service");

    setForm((prev) => {
      const next = { ...prev };
      if (businessType) next.businessType = businessType;
      if (mainGoal) next.mainGoal = mainGoal;
      if (service && !prev.message.trim()) {
        next.message = `Interested in ${service}. We want to understand how it could support our business growth goals.`;
      }
      return next;
    });
  }, [search]);

  const updateField = (
    key: keyof ContactFormData,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const goToNextStep = () => {
    const stepErrors = validateStep(form, currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setSubmitError("");
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setCurrentStep(0);
    setSubmitError("");
    setSubmitted(false);
    setIsSubmitting(false);
  };

  useEffect(() => {
    const hasSubmitted = localStorage.getItem(FORM_SUBMITTED_KEY) === "true";
    if (hasSubmitted) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = getAllErrors(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalidStep =
        validationErrors.fullName || validationErrors.businessName || validationErrors.businessType || validationErrors.websiteUrl || validationErrors.location
          ? 0
          : validationErrors.mainGoal || validationErrors.budgetRange || validationErrors.message
            ? 1
            : 2;
      setCurrentStep(firstInvalidStep);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      if (localStorage.getItem(FORM_SUBMITTED_KEY) === "true") {
        setSubmitted(true);
        return;
      }

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS environment variables are missing.");
      }

      const browserId = getOrCreateDeviceId();
      const submittedAt = new Date().toISOString();
      const normalizedWebsiteUrl = normalizeUrl(form.websiteUrl) || "Not provided";
      const templateParams = {
        fullName: form.fullName,
        businessName: form.businessName,
        businessType: form.businessType,
        websiteUrl: normalizedWebsiteUrl,
        location: form.location,
        email: form.email,
        phone: form.phone,
        mainGoal: form.mainGoal,
        budgetRange: form.budgetRange,
        message: form.message,
        service: preselectedContext.service || "Not selected",
        source: preselectedContext.source || "contact-page",
        submittedAt,
        browserId,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      const record = {
        ...form,
        websiteUrl: normalizedWebsiteUrl,
        service: templateParams.service,
        browserId,
        submittedAt,
        source: templateParams.source,
      };
      const previous = localStorage.getItem(FORM_STORAGE_KEY);
      const parsed = previous ? JSON.parse(previous) : [];
      if (!Array.isArray(parsed)) throw new Error("Stored contact data is malformed.");
      parsed.push(record);
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(parsed));
      localStorage.setItem(FORM_SUBMITTED_KEY, "true");
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setSubmitError(
        "We could not send your request right now. Please check the EmailJS settings and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <main className="bg-[#3a3a3a]">
      <Section className="bg-[#3a3a3a] pt-28 pb-6 md:pt-32 md:pb-8 lg:pt-36 lg:pb-10">
        <Container width="narrow">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contact Us</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Tell us what you need built.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-900 sm:text-lg">
              Share the key details about your business and growth goal. We will use this to understand the right service direction before the first conversation.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#3a3a3a] py-6 md:py-8 lg:py-10">
        <Container width="narrow">
          <Card className="overflow-hidden p-0 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.55)]">
            {!submitted ? (
              <div className="border-b border-slate-200 bg-white px-6 py-5 sm:px-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                      Step {currentStep + 1} of {steps.length}
                    </div>
                    <h2 className="mt-2 text-2xl font-bold text-black">{currentStepData.title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-body">{currentStepData.description}</p>
                  </div>
                  <div className="flex gap-2">
                    {steps.map((step, index) => {
                      const isActive = index === currentStep;
                      const isComplete = index < currentStep;
                      return (
                        <div
                          key={step.number}
                          className={`h-2.5 w-12 rounded-full transition-colors ${
                            isActive || isComplete ? "bg-brand" : "bg-slate-200"
                          }`}
                          aria-label={step.title}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="bg-slate-50 px-6 py-6 sm:px-8 sm:py-8">
              {preselectedContext.service || preselectedContext.mainGoal || preselectedContext.businessType ? (
                <div className="mb-6 rounded-2xl border border-brand/15 bg-white px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Selected Context</div>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {preselectedContext.service ? `Service: ${preselectedContext.service}. ` : ""}
                    {preselectedContext.mainGoal ? `Goal: ${preselectedContext.mainGoal}. ` : ""}
                    {preselectedContext.businessType ? `Type: ${preselectedContext.businessType}.` : ""}
                  </p>
                </div>
              ) : null}

              {submitted ? (
                <div className="rounded-3xl border border-emerald-200 bg-white px-6 py-10 text-center sm:px-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/70">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-black">Your request has been submitted</h3>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
                    Thank you for reaching out. Our team will review your details and contact you shortly with the next step.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {currentStep === 0 && (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormInput
                        icon={Building2}
                        label="Full Name"
                        name="fullName"
                        value={form.fullName}
                        placeholder="Your name"
                        error={errors.fullName}
                        onChange={(e) => updateField("fullName", e)}
                        required
                      />
                      <FormInput
                        icon={Building2}
                        label="Business Name"
                        name="businessName"
                        value={form.businessName}
                        placeholder="Business name"
                        error={errors.businessName}
                        onChange={(e) => updateField("businessName", e)}
                        required
                      />
                      <FormSelect
                        icon={Target}
                        label="Business Type"
                        name="businessType"
                        value={form.businessType}
                        options={businessTypeOptions}
                        error={errors.businessType}
                        onChange={(e) => updateField("businessType", e)}
                        required
                        placeholder=""
                      />
                      <FormInput
                        icon={MapPin}
                        label="Location"
                        name="location"
                        value={form.location}
                        placeholder="City / Area"
                        error={errors.location}
                        onChange={(e) => updateField("location", e)}
                        required
                      />
                      <div className="sm:col-span-2">
                        <FormInput
                          icon={Globe}
                          label="Website URL"
                          name="websiteUrl"
                          value={form.websiteUrl}
                          placeholder="www.yourbusiness.com"
                          error={errors.websiteUrl}
                          onChange={(e) => updateField("websiteUrl", e)}
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="grid gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormSelect
                          icon={Target}
                          label="Main Goal"
                          name="mainGoal"
                          value={form.mainGoal}
                          options={mainGoalOptions}
                          error={errors.mainGoal}
                          onChange={(e) => updateField("mainGoal", e)}
                          required
                          placeholder="Select the main goal"
                        />
                        <FormSelect
                          icon={Wallet}
                          label="Price Range"
                          name="budgetRange"
                          value={form.budgetRange}
                          options={budgetRangeOptions}
                          error={errors.budgetRange}
                          onChange={(e) => updateField("budgetRange", e)}
                          required
                          placeholder="Choose a price range"
                        />
                      </div>
                      <FormTextarea
                        icon={MessageSquareText}
                        label="Project Details"
                        name="message"
                        value={form.message}
                        placeholder="Tell us what you need, what is not working, and which service you are interested in."
                        error={errors.message}
                        onChange={(e) => updateField("message", e)}
                        required
                        charCount={form.message.trim().length}
                      />
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="grid gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormInput
                          icon={Mail}
                          label="Email Address"
                          name="email"
                          type="email"
                          value={form.email}
                          placeholder="hello@business.com"
                          error={errors.email}
                          onChange={(e) => updateField("email", e)}
                          required
                        />
                        <FormInput
                          icon={Phone}
                          label="Phone / WhatsApp"
                          name="phone"
                          value={form.phone}
                          placeholder="+1 555 000 0000"
                          error={errors.phone}
                          onChange={(e) => updateField("phone", e)}
                          required
                        />
                      </div>

                      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-3">
                        <ReviewItem label="Business" value={form.businessName} />
                        <ReviewItem label="Goal" value={form.mainGoal} />
                        <ReviewItem label="Price" value={form.budgetRange} />
                      </div>
                    </div>
                  )}

                  {submitError ? (
                    <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  ) : null}

                  <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
                    {currentStep > 0 ? (
                      <Button type="button" variant="secondary" onClick={goToPreviousStep} icon={<ArrowLeft className="h-4 w-4" />}>
                        Back
                      </Button>
                    ) : null}

                    {currentStep < steps.length - 1 ? (
                      <Button type="button" onClick={goToNextStep} icon={<ArrowRight className="h-4 w-4" />}>
                        Continue
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        icon={isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                        className="disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );

  return (
    <>
      {/* ─── Hero ─── */}
      <Section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white pb-0 pt-16">
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.04] px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Strategy Intake</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-heading sm:text-5xl">
              Let&apos;s map your
              <br />
              <span className="bg-gradient-to-r from-brand to-brand/60 bg-clip-text text-transparent">growth strategy</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500">
              A quick 3-step intake to understand your business, goals, and budget — so our first conversation starts with real context, not small talk.
            </p>
          </div>

          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/[0.03] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-1/4 h-64 w-64 rounded-full bg-brand/[0.02] blur-3xl" />
        </Container>
      </Section>

      {/* ─── Main Form + Sidebar ─── */}
      <Section>
        <Container>
          <div className="grid gap-8 xl:grid-cols-12">
            {/* ─── Left: Form Card ─── */}
            <div className="xl:col-span-7">
              <Card className="overflow-hidden border-slate-200/80 p-0 shadow-lg shadow-slate-200/50">
                {/* Card Header */}
                <div className="border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white px-8 py-7">
                  {/* Step Indicators */}
                  <div className="mb-6 flex items-center gap-1">
                    {steps.map((step, index) => {
                      const StepIcon = step.icon;
                      const isActive = index === currentStep;
                      const isComplete = index < currentStep;

                      return (
                        <div key={step.number} className="flex flex-1 items-center">
                          <div className="relative flex flex-col items-center gap-1.5">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-500 ${
                                isComplete
                                  ? "bg-brand text-white shadow-md shadow-brand/25"
                                  : isActive
                                    ? "bg-brand text-white shadow-lg shadow-brand/30 ring-4 ring-brand/10"
                                    : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              {isComplete ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <StepIcon className="h-4 w-4" />
                              )}
                            </div>
                            <span
                              className={`hidden text-[10px] font-semibold uppercase tracking-[0.14em] sm:block ${
                                isActive ? "text-brand" : isComplete ? "text-brand/70" : "text-slate-400"
                              }`}
                            >
                              {step.title}
                            </span>
                          </div>
                          {index < steps.length - 1 && (
                            <div className="mx-2 h-[2px] flex-1 rounded-full transition-all duration-500">
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${
                                  index < currentStep ? "bg-brand/40" : "bg-slate-100"
                                }`}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <StepProgress current={currentStep} total={steps.length} />

                  <div className="mt-5">
                    <h2 className="text-xl font-bold text-heading">{currentStepData.title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{currentStepData.description}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-8 py-7">
                  {/* Preselected Context Banner */}
                  {preselectedContext.service || preselectedContext.mainGoal || preselectedContext.businessType ? (
                    <div className="mb-7 flex items-start gap-3 rounded-2xl border border-brand/15 bg-gradient-to-r from-brand/[0.04] to-brand/[0.01] px-5 py-4">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                          Pre-selected context
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {preselectedContext.service ? `Service: ${preselectedContext.service}.` : ""}
                          {preselectedContext.mainGoal ? ` Goal: ${preselectedContext.mainGoal}.` : ""}
                          {preselectedContext.businessType ? ` Type: ${preselectedContext.businessType}.` : ""}
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {/* Submitted State */}
                  {submitted ? (
                    <div className="relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-brand/[0.03] via-white to-brand/[0.02] p-8">
                      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/[0.05] blur-2xl" />
                      <div className="relative flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                          <CheckCircle2 className="h-7 w-7" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-heading">Strategy call request captured</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-500">
                            The prototype intake has been saved locally. The next phase can send this payload to a custom API, CRM, Google Sheets, email notification flow, or Calendly redirect.
                          </p>
                          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button type="button" onClick={resetForm}>
                              Submit another request
                            </Button>
                            <Button href="/" variant="secondary">
                              Return to Home
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      {/* Step 0: Business Profile */}
                      {currentStep === 0 && (
                        <div className="grid gap-5">
                          <FormInput
                            icon={Building2}
                            label="Full Name"
                            name="fullName"
                            value={form.fullName}
                            placeholder="Dr. Sarah Khan"
                            error={errors.fullName}
                            onChange={(e) => updateField("fullName", e)}
                            required
                          />
                          <FormInput
                            icon={Building2}
                            label="Business Name"
                            name="businessName"
                            value={form.businessName}
                            placeholder="Nova Studio"
                            error={errors.businessName}
                            onChange={(e) => updateField("businessName", e)}
                            required
                          />
                          <FormSelect
                            icon={Target}
                            label="Business Type"
                            name="businessType"
                            value={form.businessType}
                            options={businessTypeOptions}
                            error={errors.businessType}
                            onChange={(e) => updateField("businessType", e)}
                            required
                            placeholder=""
                          />
                          <FormInput
                            icon={Globe}
                            label="Website URL"
                            name="websiteUrl"
                            value={form.websiteUrl}
                            placeholder="www.yourbusiness.com"
                            error={errors.websiteUrl}
                            onChange={(e) => updateField("websiteUrl", e)}
                          />
                          <FormInput
                            icon={MapPin}
                            label="Location"
                            name="location"
                            value={form.location}
                            placeholder="DHA / Johar Town / Faisal Town"
                            error={errors.location}
                            onChange={(e) => updateField("location", e)}
                            required
                          />
                        </div>
                      )}

                      {/* Step 1: Growth Goals */}
                      {currentStep === 1 && (
                        <div className="grid gap-5">
                          <FormSelect
                            icon={Target}
                            label="Main Goal"
                            name="mainGoal"
                            value={form.mainGoal}
                            options={mainGoalOptions}
                            error={errors.mainGoal}
                            onChange={(e) => updateField("mainGoal", e)}
                            required
                            placeholder="Select the main goal"
                          />
                          <FormSelect
                            icon={Wallet}
                            label="Price Range"
                            name="budgetRange"
                            value={form.budgetRange}
                            options={budgetRangeOptions}
                            error={errors.budgetRange}
                            onChange={(e) => updateField("budgetRange", e)}
                            required
                            placeholder="Choose a price range"
                          />
                          <FormTextarea
                            icon={MessageSquareText}
                            label="Message"
                            name="message"
                            value={form.message}
                            placeholder="Tell us what is not working right now, which services you want to grow, and what kind of digital support you are looking for."
                            error={errors.message}
                            onChange={(e) => updateField("message", e)}
                            required
                            charCount={form.message.trim().length}
                          />
                        </div>
                      )}

                      {/* Step 2: Contact Details + Review */}
                      {currentStep === 2 && (
                        <div className="space-y-7">
                          <div className="grid gap-5">
                            <FormInput
                              icon={Mail}
                              label="Email Address"
                              name="email"
                              type="email"
                              value={form.email}
                              placeholder="hello@yourbusiness.com"
                              error={errors.email}
                              onChange={(e) => updateField("email", e)}
                              required
                            />
                            <FormInput
                              icon={Phone}
                              label="Phone / WhatsApp"
                              name="phone"
                              value={form.phone}
                              placeholder="+971 50 123 4567"
                              error={errors.phone}
                              onChange={(e) => updateField("phone", e)}
                              required
                            />
                          </div>

                          {/* Review Card */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="h-px flex-1 bg-slate-100" />
                              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                                Review Summary
                              </span>
                              <div className="h-px flex-1 bg-slate-100" />
                            </div>

                            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                              <ReviewItem label="Business" value={form.businessName} />
                              <ReviewItem label="Type" value={form.businessType} />
                              <ReviewItem label="Location" value={form.location} />
                              <ReviewItem label="Goal" value={form.mainGoal} />
                              <ReviewItem label="Price" value={form.budgetRange} />
                              <ReviewItem label="Website" value={form.websiteUrl} fallback="None added" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Error Banner */}
                      {submitError && (
                        <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{submitError}</span>
                        </div>
                      )}

                      {/* Navigation */}
                      <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
                        <p className="hidden text-xs leading-relaxed text-slate-400 lg:block">
                          Spam protection, CRM syncing, and Calendly handoff can be added in the next phase.
                        </p>
                        <div className="ml-auto flex gap-3">
                          {currentStep > 0 && (
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={goToPreviousStep}
                              icon={<ArrowLeft className="h-4 w-4" />}
                            >
                              Back
                            </Button>
                          )}

                          {currentStep < steps.length - 1 ? (
                            <Button
                              type="button"
                              onClick={goToNextStep}
                              icon={<ArrowRight className="h-4 w-4" />}
                            >
                              Continue
                            </Button>
                          ) : (
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              icon={
                                isSubmitting ? (
                                  <LoaderCircle className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Send className="h-4 w-4" />
                                )
                              }
                              
                              className="disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              {isSubmitting ? "Saving…" : "Submit Request"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </Card>
            </div>

            {/* ─── Right: Sidebar ─── */}
            <div className="space-y-6 xl:col-span-5">
              {/* What Happens Next */}
              <Card className="border-slate-200/80 p-0 shadow-lg shadow-slate-200/50">
                <div className="border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white px-7 py-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                      What Happens Next
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-heading">After you submit</h3>
                  <p className="mt-1 text-sm text-slate-500">A good contact page should reduce uncertainty, not create it.</p>
                </div>
                <div className="space-y-3 p-5">
                  {contactNextSteps.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-slate-100 hover:bg-slate-50/50"
                      >
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/[0.07] text-brand transition-colors group-hover:bg-brand/10">
                          <Icon className="h-4 w-4" />
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-400 shadow-sm ring-1 ring-slate-100">
                            {i + 1}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-heading">{item.title}</div>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Built for Next Phase */}
              <Card tone="highlight" className="border-slate-200/80 p-0 shadow-lg shadow-slate-200/50">
                <div className="border-b border-brand/10 bg-gradient-to-b from-brand/[0.04] to-transparent px-7 py-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                      Production Ready
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-heading">Built for the next phase</h3>
                </div>
                <div className="space-y-1 p-5">
                  {contactOptions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-white/60"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm ring-1 ring-slate-100">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-heading">{item.title}</div>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Quick Trust Badge */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-heading">No spam, ever</div>
                  <p className="text-xs text-slate-500">Your data stays private. We only reach out to schedule your call.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── FAQ ─── */}
      <Section className="border-t border-slate-100 bg-slate-50/50">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions about the strategy call"
            description="Reassurance directly on the conversion page while the real submission stack is pending."
            className="mb-12"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {contactPageFaqs.map((faq, i) => (
              <div
                key={faq.question}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand/20 hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/[0.03] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-xs font-bold text-slate-400 ring-1 ring-slate-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-heading">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── Bottom CTA Banner ─── */}
      <Section>
        <Container width="narrow">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-10 shadow-lg shadow-slate-200/40 md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/[0.04] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-brand/[0.03] blur-3xl" />
            <div className="relative text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-heading md:text-3xl">
                Stronger than a basic contact form
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
                This page qualifies inquiries, sets expectations, supports mobile completion, and gives your project a serious agency conversion flow — ready for backend, CRM, and scheduling integration.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
