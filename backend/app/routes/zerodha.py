from fastapi import APIRouter
from fastapi.responses import RedirectResponse
from fastapi.responses import JSONResponse

from app.services.zerodha_service import (
    get_login_url,
    generate_session,
    get_holdings,
    get_mf_holdings
)

router = APIRouter()

@router.get("/zerodha/login")
def zerodha_login():

    return {
        "login_url": get_login_url()
    }

@router.get("/zerodha/login/callback")
def login_callback(request_token: str):

    session_data = generate_session(request_token)

    holdings = get_holdings()

    return RedirectResponse(
        url="http://192.168.31.67:5173"
    )

@router.get("/zerodha/holdings")
def zerodha_holdings():

    try:

        holdings = get_holdings()

        total_value = 0

        assets = []

        for item in holdings:

            current_value = (
                item["quantity"] * item["last_price"]
            )

            total_value += current_value

            assets.append({
                "name": item["tradingsymbol"],
                "quantity": item["quantity"],
                "price": item["last_price"],
                "value": current_value
            })

        return {
            "total_value": round(total_value, 2),
            "assets": assets
        }

    except Exception as e:

        return {
            "error": str(e)
        }

@router.get("/zerodha/mf-holdings")
def zerodha_mf_holdings():

    try:

        mf_holdings = get_mf_holdings()

        assets = []

        total_value = 0

        for item in mf_holdings:

            current_value = (
                item["last_price"] * item["quantity"]
            )

            total_value += current_value

            assets.append({
                "fund": item["tradingsymbol"],
                "folio": item["folio"],
                "quantity": item["quantity"],
                "nav": item["last_price"],
                "value": current_value
            })

        return {
            "total_value": round(total_value, 2),
            "funds": assets
        }

    except Exception as e:

        return {
            "error": str(e)
        }