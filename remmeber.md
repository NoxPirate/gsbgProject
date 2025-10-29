# in a new PowerShell window (this shell will run uvicorn)
cd C:\Users\user\Desktop\gsbgProject\leads-op-main

# set SMTP env vars in this shell (use your NEW app password)
$env:EMAIL_ADDRESS = "your.email@gmail.com"
$env:EMAIL_PASSWORD = ""

# set DB env if you haven't done so in this shell
$env:DATABASE_URL = "postgresql://Ritik:Ritik1820@127.0.0.1:5432/g_db"
$env:USE_SQLITE_FALLBACK = "false"

# optional: allowed origin for CORS (frontend)
$env:ALLOWED_ORIGINS = "http://localhost:3000"

# start the server from this same shell (so it inherits the env)
.\.venv\Scripts\Activate
python -m uvicorn app:app --port 8000 --reload