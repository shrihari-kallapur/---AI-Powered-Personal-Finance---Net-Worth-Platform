from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv

from app.routes.portfolio import router as portfolio_router
from app.routes.zerodha import router as zerodha_router

load_dotenv()

app = FastAPI()

# CORS MUST COME BEFORE ROUTES

app.add_middleware(

    CORSMiddleware,

    allow_origin_regex=r"https://.*\.vercel\.app",

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

# Routes

app.include_router(zerodha_router)

app.include_router(portfolio_router)

@app.get("/")
def home():

    return {
        "message": "Finance Dashboard API Running"
    }