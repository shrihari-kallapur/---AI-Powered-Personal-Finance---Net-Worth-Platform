from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.portfolio import router as portfolio_router
from app.routes.zerodha import router as zerodha_router

from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "https://ai-powered-personal-finan-git-eca677-shriharikallapurs-projects.vercel.app/"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

app.include_router(zerodha_router)

@app.get("/")
def home():

    return {
        "message": "Finance Dashboard API Running"
    }

app.include_router(portfolio_router)