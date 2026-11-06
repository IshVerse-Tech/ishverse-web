# Architecture

The corporate site is a mostly public Next.js surface. It should remain low-complexity and highly cacheable. Business identity, account, billing, financial data, and editorial workflow do not belong here; link to or integrate through supported platform APIs only when needed.

Keep the site independently deployable. Do not turn it into a monolith containing Intelligence or Media application logic.
