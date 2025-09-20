export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactApiResponse {
  message?: string
  error?: string
}

export interface EmailTemplate {
  subject: string
  html: string
  text: string
}
