# EmailJS Template For Contact Form

Use these variable names when sending `templateParams` from the Vector Labs contact form.

## Subject

```text
New Vector Labs Inquiry - {{businessName}} - {{mainGoal}}
```

## Email Body

```text
New contact request received from Vector Labs.

CONTACT DETAILS
Name: {{fullName}}
Email: {{email}}
Phone / WhatsApp: {{phone}}

BUSINESS DETAILS
Business Name: {{businessName}}
Business Type: {{businessType}}
Website: {{websiteUrl}}
Location: {{location}}

PROJECT DETAILS
Main Goal: {{mainGoal}}
Price Range: {{budgetRange}}
Message:
{{message}}

TRACKING CONTEXT
Selected Service: {{service}}
Source: {{source}}
Submitted At: {{submittedAt}}
Browser ID: {{browserId}}
```

## Recommended `templateParams`

```ts
const templateParams = {
  fullName: form.fullName,
  businessName: form.businessName,
  businessType: form.businessType,
  websiteUrl: normalizeUrl(form.websiteUrl) || "Not provided",
  location: form.location,
  email: form.email,
  phone: form.phone,
  mainGoal: form.mainGoal,
  budgetRange: form.budgetRange,
  message: form.message,
  service: preselectedContext.service || "Not selected",
  source: preselectedContext.source || "contact-page",
  submittedAt: new Date().toISOString(),
  browserId: getOrCreateDeviceId(),
};
```
