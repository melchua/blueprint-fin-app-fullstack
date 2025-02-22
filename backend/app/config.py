import os
from dotenv import load_dotenv
from pydantic import Field
from pydantic_settings import BaseSettings

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "")
SUPABASE_DB_PASSWORD = os.getenv("SUPABASE_DB_PASSWORD", "")

class Settings(BaseSettings):
    supabase_url: str = Field(default=SUPABASE_URL)
    supabase_anon_key: str = Field(default=SUPABASE_ANON_KEY)
    supabase_db_password: str = Field(default=SUPABASE_DB_PASSWORD)
    supabase_connection_string: str = Field(
        default=f"postgresql://postgres:{SUPABASE_DB_PASSWORD}@{SUPABASE_URL}:6543/postgres"
    )

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

SETTINGS = Settings()