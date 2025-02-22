from sqlmodel import create_engine, Session, SQLModel
from app.config import SETTINGS

# sqlite_file_name = "database.db"
# sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(SETTINGS.supabase_connection_string)

def init_db():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
