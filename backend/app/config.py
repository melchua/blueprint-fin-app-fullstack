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
        default=f"postgresql://postgres:{SUPABASE_DB_PASSWORD}@db.uozfntkdbijcqkgvpwnt.supabase.co:5432/postgres"
    )
    otherstring: str = Field(
        default=f"postgresql://postgres.uozfntkdbijcqkgvpwnt:{SUPABASE_DB_PASSWORD}@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
    )

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


SETTINGS = Settings()
