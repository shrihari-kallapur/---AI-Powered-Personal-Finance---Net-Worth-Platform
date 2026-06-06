from kiteconnect import KiteConnect
import os

API_KEY = os.getenv("ZERODHA_API_KEY")
API_SECRET = os.getenv("ZERODHA_API_SECRET")

kite = KiteConnect(api_key=API_KEY)

ACCESS_TOKEN = None

def get_login_url():
    return kite.login_url()

def generate_session(request_token):

    global ACCESS_TOKEN

    data = kite.generate_session(
        request_token,
        api_secret=API_SECRET
    )

    ACCESS_TOKEN = data["access_token"]

    kite.set_access_token(ACCESS_TOKEN)

    return data

def get_holdings():

    global ACCESS_TOKEN

    kite.set_access_token(ACCESS_TOKEN)

    return kite.holdings()


def get_mf_holdings():

    global ACCESS_TOKEN

    kite.set_access_token(ACCESS_TOKEN)

    return kite.mf_holdings()