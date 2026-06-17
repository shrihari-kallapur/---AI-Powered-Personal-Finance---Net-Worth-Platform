from fastapi import APIRouter

router = APIRouter()

@router.get("/holdings")
def get_holdings():
    return [
        {
            "symbol": "GOLDBEES",
            "quantity": 10,
            "value": 1278
        },
        {
            "symbol": "SILVERBEES",
            "quantity": 10,
            "value": 2444.4
        }
    ]