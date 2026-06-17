from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.portfolio import router as portfolio_router
from app.routes.zerodha import router as zerodha_router
from app.routes import holdings
from app.routes import upload

from app.routes import bank_accounts

from dotenv import load_dotenv

from app.routes import bank

load_dotenv()

app = FastAPI()

app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://192.168.31.67:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

app.include_router(zerodha_router)

app.include_router(portfolio_router)

app.include_router(bank.router, prefix="/api")

app.include_router(holdings.router, prefix="/api")

app.include_router(upload.router, prefix="/api")

app.include_router(
    bank_accounts.router,
    prefix="/api"
)

app.include_router(
    bank_accounts.router,
    prefix="/api"
)

@app.get("/")
def home():

    return {
        "message": "Finance Dashboard API Running"
    }