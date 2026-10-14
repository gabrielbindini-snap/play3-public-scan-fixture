import { getInvoice as lookup } from './invoices.js';

export function getInvoice(session, invoiceId) {
  if (!session?.userId || !session?.tenantId) return { status: 401 };
  const response = lookup(session, invoiceId);
  if (response.status !== 200) return response;
  if (response.body.tenantId !== session.tenantId) return { status: 404 };
  return response;
}
