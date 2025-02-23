from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.core.db import init_db
from app.api.main import api_router


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_db()
    yield


app = FastAPI(lifespan=lifespan)


@app.get("/")
async def get_root():
    return {"message": "Hello from the backend!"}


app.include_router(api_router)
