from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Ciao bello! Your Italian assistant backend is now running."}