from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Settings - So Node.js or frontend can call Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # (Allow all during development, restrict later)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a Pydantic model for incoming contractor data
class ContractorData(BaseModel):
    experience_years: float
    delivery_time_months: float
    success_rate_percent: float
    budget_adherence_percent: float

# ML Scoring function
def contractor_score(data: ContractorData):
    experience_score = min(data.experience_years / 10, 1)
    delivery_score = max(1 - (data.delivery_time_months / 12), 0)
    success_score = data.success_rate_percent / 100
    budget_score = data.budget_adherence_percent / 100

    final_score = (0.4 * experience_score +
                   0.2 * delivery_score +
                   0.2 * success_score +
                   0.2 * budget_score)

    return round(final_score * 100, 2)

# API endpoint for getting contractor score
@app.post("/predict-contractor-score")
def predict_score(data: ContractorData):
    score = contractor_score(data)
    return {"suitability_score": score}
