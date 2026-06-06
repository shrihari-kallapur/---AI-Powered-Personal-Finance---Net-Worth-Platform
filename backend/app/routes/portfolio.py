from fastapi import APIRouter

router = APIRouter()

@router.get("/portfolio")
def get_portfolio():
    return {
        "total_value": 250000,
        "profit": 12000,
        "assets": [
            {
                "name": "SILVERBEES",
                "quantity": 10
            },
            {
                "name": "GOLDBEES",
                "quantity": 5
            }
        ]
    }