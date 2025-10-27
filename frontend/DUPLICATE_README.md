There are two frontend copies detected in this repository:

- `frontend/` (top-level) — the primary frontend used by the project.
- `frontend/frontend/` (nested) — a duplicate/copy of the frontend source.

Why this matters:
- Having two nearly-identical frontends causes confusion (which to run, which files to edit).

Recommended action:
1. If you no longer need the nested copy, run the remove script:
   - Open PowerShell in `c:\Users\user\Desktop\gsbgProject\frontend`
   - Run: `./scripts/remove-duplicate-frontend.ps1` and type `DELETE` when prompted.

2. If you want to keep both, pick one as canonical and always edit that one. Update any CI/build scripts accordingly.

Note: I updated the primary `src/components/Contact.tsx` to post to the backend `/api/lead` endpoint and added `.env.example` files. Make sure to set `NEXT_PUBLIC_API_URL` before running the frontend.
