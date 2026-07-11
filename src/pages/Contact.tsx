import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";

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
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  budgetRangeOptions,
  clinicTypeOptions,
  contactNextSteps,
  contactOptions,
  contactPageFaqs,
  mainGoalOptions,
} from "@/data/contact";
import { useRouter } from "@/lib/router";

type ContactFormData = {
  fullName: string;
  clinicName: string;
  clinicType: string;
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

const steps = [
  {
    number: "01",
    title: "Clinic Profile",
    description: "Basic context about the clinic, its type, and where it operates.",
  },
  {
    number: "02",
    title: "Growth Goals",
    description: "What the clinic wants to improve and the level of budget readiness.",
  },
  {
    number: "03",
    title: "Contact Details",
    description: "How to follow up, plus a final review before submission.",
  },
] as const;

const initialForm: ContactFormData = {
  fullName: "",
  clinicName: "",
  clinicType: clinicTypeOptions[0]?.value ?? "Dental Clinic",
  websiteUrl: "",
  location: "",
  email: "",
  phone: "",
  mainGoal: "",
  budgetRange: "",
  message: "",
};

function normalizeUrl(value: string) {
  if (!value.trim()) {
    return "";
  }

  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
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
    if (form.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    if (form.clinicName.trim().length < 2) {
      errors.clinicName = "Please enter the clinic name.";
    }

    if (!form.clinicType) {
      errors.clinicType = "Please select the clinic type.";
    }

    if (form.websiteUrl.trim() && !isValidUrl(form.websiteUrl)) {
      errors.websiteUrl = "Enter a valid website URL.";
    }

    if (form.location.trim().length < 2) {
      errors.location = "Please enter the clinic location.";
    }
  }

  if (step === 1) {
    if (!form.mainGoal) {
      errors.mainGoal = "Please select the main goal.";
    }

    if (!form.budgetRange) {
      errors.budgetRange = "Please choose a budget range.";
    }

    if (form.message.trim().length < 24) {
      errors.message = "Please share a little more detail about the clinic and goals.";
    }
  }

  if (step === 2) {
    if (!isValidEmail(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!isValidPhone(form.phone)) {
      errors.phone = "Please enter a valid phone or WhatsApp number.";
    }
  }

  return errors;
}

function getAllErrors(form: ContactFormData) {
  return {
    ...validateStep(form, 0),
    ...validateStep(form, 1),
    ...validateStep(form, 2),
  };
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-xs font-medium text-rose-600">{message}</p>;
}

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
      clinicType: params.get("clinicType") ?? "",
      mainGoal: params.get("mainGoal") ?? "",
      service: params.get("service") ?? "",
      source: params.get("source") ?? "",
    };
  }, [search]);

  useEffect(() => {
    if (!search) {
      return;
    }

    const params = new URLSearchParams(search);
    const clinicType = params.get("clinicType");
    const mainGoal = params.get("mainGoal");
    const service = params.get("service");

    setForm((prev) => {
      const next = { ...prev };

      if (clinicType) {
        next.clinicType = clinicType;
      }

      if (mainGoal) {
        next.mainGoal = mainGoal;
      }

      if (service && !prev.message.trim()) {
        next.message = `Interested in ${service}. We want to understand how it could support our clinic growth goals.`;
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = getAllErrors(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstInvalidStep = validationErrors.fullName ||
        validationErrors.clinicName ||
        validationErrors.clinicType ||
        validationErrors.websiteUrl ||
        validationErrors.location
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
      await new Promise((resolve) => window.setTimeout(resolve, 1100));

      const record = {
        ...form,
        websiteUrl: normalizeUrl(form.websiteUrl),
        submittedAt: new Date().toISOString(),
        source: "contact-page-prototype",
      };

      const previous = localStorage.getItem(FORM_STORAGE_KEY);
      const parsed = previous ? JSON.parse(previous) : [];
      if (!Array.isArray(parsed)) {
        throw new Error("Stored contact data is malformed.");
      }

      parsed.push(record);
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(parsed));

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch {
      setSubmitError(
        "The prototype form could not save this request locally. Please try again. The real backend flow can be wired in later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderClinicProfileStep = () => (
    <div className="grid gap-5">
      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <Building2 className="h-4 w-4 text-brand" />
          Full name
        </span>
        <input
          required
          value={form.fullName}
          onChange={(event) => updateField("fullName", event)}
          placeholder="Dr. Sarah Khan"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        />
        <FieldError message={errors.fullName} />
      </label>

      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <Building2 className="h-4 w-4 text-brand" />
          Clinic name
        </span>
        <input
          required
          value={form.clinicName}
          onChange={(event) => updateField("clinicName", event)}
          placeholder="Luxe Dental Studio"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        />
        <FieldError message={errors.clinicName} />
      </label>

      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <Target className="h-4 w-4 text-brand" />
          Clinic type
        </span>
        <select
          required
          value={form.clinicType}
          onChange={(event) => updateField("clinicType", event)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        >
          {clinicTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FieldError message={errors.clinicType} />
      </label>

      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <Globe className="h-4 w-4 text-brand" />
          Website URL
        </span>
        <input
          value={form.websiteUrl}
          onChange={(event) => updateField("websiteUrl", event)}
          placeholder="www.yourclinic.com"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        />
        <FieldError message={errors.websiteUrl} />
      </label>

      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <MapPin className="h-4 w-4 text-brand" />
          Location
        </span>
        <input
          required
          value={form.location}
          onChange={(event) => updateField("location", event)}
          placeholder="DHA / Johar Town / Faisal Town"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        />
        <FieldError message={errors.location} />
      </label>
    </div>
  );

  const renderGoalsStep = () => (
    <div className="grid gap-5">
      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <Target className="h-4 w-4 text-brand" />
          Main goal
        </span>
        <select
          required
          value={form.mainGoal}
          onChange={(event) => updateField("mainGoal", event)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        >
          <option value="">Select the main goal</option>
          {mainGoalOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FieldError message={errors.mainGoal} />
      </label>

      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <Wallet className="h-4 w-4 text-brand" />
          Monthly marketing budget range
        </span>
        <select
          required
          value={form.budgetRange}
          onChange={(event) => updateField("budgetRange", event)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        >
          <option value="">Choose a budget range</option>
          {budgetRangeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FieldError message={errors.budgetRange} />
      </label>

      <label className="space-y-2">
        <span className="flex items-center gap-2 text-sm font-medium text-heading">
          <MessageSquareText className="h-4 w-4 text-brand" />
          Message
        </span>
        <textarea
          required
          rows={7}
          value={form.message}
          onChange={(event) => updateField("message", event)}
          placeholder="Tell us what is not working right now, which treatments you want to grow, and what kind of digital support you are looking for."
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
        />
        <div className="flex items-center justify-between gap-3">
          <FieldError message={errors.message} />
          <span className="text-xs text-slate-400">{form.message.trim().length} characters</span>
        </div>
      </label>
    </div>
  );

  const renderContactStep = () => (
    <div className="space-y-6">
      <div className="grid gap-5">
        <label className="space-y-2">
          <span className="flex items-center gap-2 text-sm font-medium text-heading">
            <Mail className="h-4 w-4 text-brand" />
            Email
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event)}
            placeholder="hello@yourclinic.com"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
          />
          <FieldError message={errors.email} />
        </label>

        <label className="space-y-2">
          <span className="flex items-center gap-2 text-sm font-medium text-heading">
            <Phone className="h-4 w-4 text-brand" />
            Phone / WhatsApp
          </span>
          <input
            required
            value={form.phone}
            onChange={(event) => updateField("phone", event)}
            placeholder="+971 50 123 4567"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-heading outline-none transition focus:border-brand"
          />
          <FieldError message={errors.phone} />
        </label>
      </div>

      <Card tone="highlight" className="p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Review your request</div>
        <div className="mt-4 grid gap-3 text-sm text-body sm:grid-cols-2">
          <div>
            <div className="font-semibold text-heading">Clinic</div>
            <div>{form.clinicName || "Not provided yet"}</div>
          </div>
          <div>
            <div className="font-semibold text-heading">Clinic type</div>
            <div>{form.clinicType || "Not selected yet"}</div>
          </div>
          <div>
            <div className="font-semibold text-heading">Location</div>
            <div>{form.location || "Not provided yet"}</div>
          </div>
          <div>
            <div className="font-semibold text-heading">Main goal</div>
            <div>{form.mainGoal || "Not selected yet"}</div>
          </div>
          <div>
            <div className="font-semibold text-heading">Budget</div>
            <div>{form.budgetRange || "Not selected yet"}</div>
          </div>
          <div>
            <div className="font-semibold text-heading">Website</div>
            <div>{form.websiteUrl || "No website added"}</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const currentStepData = steps[currentStep];

  return (
    <>
      {/* <PageHero
        eyebrow="Contact / Strategy Call"
        title="Book a strategy conversation through a real clinic intake flow."
        description="This page now behaves like a proper lead capture route: qualification fields, multi-step UX, validation, next-step clarity, and a cleaner agency feel. For now, submissions are stored locally as a polished prototype until the live backend is connected."
      >
        <div className="grid gap-3 pt-4 sm:grid-cols-3">
          {[
            "Multi-step qualification flow",
            "Mobile-friendly single-column form",
            "Ready for CRM and Calendly later",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm font-medium text-heading shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </PageHero> */}

      <Section className="bg-white">
        <Container>
          <div className="grid gap-8 xl:grid-cols-12">
            <Card className="p-8 xl:col-span-7">
              <SectionHeader
                eyebrow="Lead Qualification Form"
                title="Tell us about the clinic, the growth problem, and the right next step"
                description="This version is a dummy intake flow for now, but it is structured like a real strategy-call form so the production backend can plug in later without changing the UX."
              />

              {preselectedContext.service || preselectedContext.mainGoal || preselectedContext.clinicType ? (
                <div className="mt-6 rounded-3xl border border-brand/15 bg-brand/[0.04] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Preselected context
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    We carried over some context to make the intake feel lower-friction.
                    {preselectedContext.service ? ` Service: ${preselectedContext.service}.` : ""}
                    {preselectedContext.mainGoal ? ` Goal: ${preselectedContext.mainGoal}.` : ""}
                    {preselectedContext.clinicType ? ` Clinic type: ${preselectedContext.clinicType}.` : ""}
                  </p>
                </div>
              ) : null}

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {steps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isComplete = index < currentStep;

                  return (
                    <div
                      key={step.number}
                      className={`rounded-3xl border px-4 py-4 transition ${
                        isActive
                          ? "border-brand/30 bg-brand/[0.05]"
                          : isComplete
                            ? "border-emerald-200 bg-emerald-50/70"
                            : "border-slate-200 bg-slate-50/70"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                          {step.number}
                        </div>
                        {isComplete ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : null}
                      </div>
                      <div className="mt-3 text-sm font-semibold text-heading">{step.title}</div>
                      <p className="mt-2 text-xs leading-relaxed text-body">{step.description}</p>
                    </div>
                  );
                })}
              </div>

              {submitted ? (
                <div className="mt-8 rounded-[2rem] border border-brand/15 bg-brand/[0.03] p-7">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                    <div>
                      <div className="text-xl font-bold text-heading">Strategy call request captured</div>
                      <p className="mt-3 text-sm leading-relaxed text-body">
                        The prototype intake has been saved locally in this browser. The next implementation phase can send this same payload to a custom API, CRM, Google Sheets backup, email notification flow, or a Calendly redirect.
                      </p>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
                <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
                  <div className="rounded-[2rem] border border-slate-100 bg-slate-50/50 p-6">
                    <div className="mb-5">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                        Step {currentStep + 1} of {steps.length}
                      </div>
                      <h3 className="mt-2 text-2xl font-bold text-heading">{currentStepData.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">{currentStepData.description}</p>
                    </div>

                    {currentStep === 0 ? renderClinicProfileStep() : null}
                    {currentStep === 1 ? renderGoalsStep() : null}
                    {currentStep === 2 ? renderContactStep() : null}
                  </div>

                  {submitError ? (
                    <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs leading-relaxed text-slate-500">
                      Spam protection, CRM syncing, and Calendly handoff can be added in the next implementation phase.
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {currentStep > 0 ? (
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={goToPreviousStep}
                          icon={<ArrowLeft className="h-4 w-4" />}
                          className="sm:order-1"
                        >
                          Back
                        </Button>
                      ) : null}

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
                              <ArrowRight className="h-4 w-4" />
                            )
                          }
                          className="disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSubmitting ? "Saving Request" : "Submit Strategy Call Request"}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </Card>

            <div className="space-y-6 xl:col-span-5">
              <Card className="p-8">
                <SectionHeader
                  eyebrow="What Happens Next"
                  title="A clearer post-submit flow"
                  description="A good contact page should reduce uncertainty, not create it."
                />
                <div className="mt-6 space-y-4">
                  {contactNextSteps.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-slate-50/70 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand/[0.08] text-brand">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-heading">{item.title}</div>
                          <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card tone="highlight" className="p-8">
                <SectionHeader
                  eyebrow="Professional Direction"
                  title="Built for the next implementation phase"
                  description="This dummy flow is intentionally shaped around the production-ready contact system you described."
                />
                <div className="mt-6 space-y-4">
                  {contactOptions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-heading">{item.title}</div>
                          <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-base">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Questions around the intake and strategy call"
            description="This keeps reassurance directly on the conversion page while the real submission stack is still pending."
            className="mb-16"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {contactPageFaqs.map((faq) => (
              <Card key={faq.question} className="p-7">
                <h3 className="text-lg font-bold text-heading">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container width="narrow">
          <Card tone="highlight" className="p-8 md:p-10">
            <SectionHeader
              eyebrow="Trust Reassurance"
              title="Stronger than a basic mailto CTA"
              description="The page now qualifies inquiries, sets expectations, supports mobile completion, and gives the project a more serious agency conversion flow while staying flexible for a later backend, CRM, and scheduling integration."
            />
          </Card>
        </Container>
      </Section>
    </>
  );
}
