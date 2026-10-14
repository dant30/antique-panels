export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  ticketNumber?: string;
}
