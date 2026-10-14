const invoices = new Map([
  ['inv-a', { id: 'inv-a', tenantId: 'tenant-a', amount: 120 }],
  ['inv-b', { id: 'inv-b', tenantId: 'tenant-b', amount: 240 }],
]);

export function getInvoice(session, invoiceId) {
  if (!session?.userId) return { status: 401 };
  const invoice = invoices.get(invoiceId);
  if (!invoice) return { status: 404 };
  return { status: 200, body: { ...invoice } };
}
