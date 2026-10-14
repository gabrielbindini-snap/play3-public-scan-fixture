# Play3 public scan fixture

Original synthetic code for testing security analysis and result persistence. No customer code, credentials, integrations, dependencies or hosted service.

This repository intentionally contains an authorization defect. Do not use it in production. It does not listen on a network port or execute external commands.

## Run
`npm test` (Node 20 or newer; no installation required).

## Scope
`src/invoices.js` models two tenants and two users. `getInvoice` represents a handler after authentication: its caller supplies a trusted session and an untrusted invoice ID. Its authorization flaw allows a signed-in user to read another tenant's invoice. `src/invoices-fixed.js` is the corrected comparison case. `src/format.js` is an unrelated safe helper.

The tests demonstrate both the defect and the correction. They are an explicit, known reference, not a blind evaluation of model quality. No dynamic scan, hosting or production use is implied.
