from sqlmodel import Field, SQLModel

# Heroes models - using this as a reference for the models
class HeroBase(SQLModel):
    name: str = Field(index=True)
    age: int | None = Field(default="None", index=True)

class Hero(HeroBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    secret_name: str

class HeroPublic(HeroBase):
    id: int

class HeroCreate(HeroBase):
    secret_name: str 

class HeroUpdate(HeroBase):
    name: str | None = None
    secret_name: str | None = None
    age: int | None = None