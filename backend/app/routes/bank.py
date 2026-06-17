from fastapi import APIRouter

router = APIRouter()

@router.get("/bank-accounts")
def get_bank_accounts():
    return {
        "accounts": [
            {
                "bank_name": "SBI Bank",
                "account_type": "Savings",
                "account_number": "XXXX4589",
                "balance": 125000
            },
            {
                "bank_name": "Canara Bank",
                "account_type": "Savings",
                "account_number": "XXXX9021",
                "balance": 84500
            },
            {
                "bank_name": "ICICI Bank",
                "account_type": "Savings",
                "account_number": "XXXX9021",
                "balance": 84500
            },
            {
                "bank_name": "Bank Of Baroda",
                "account_type": "Savings",
                "account_number": "XXXX9021",
                "balance": 84500
            },
            {
                "bank_name": "Bank Of India",
                "account_type": "Salary",
                "account_number": "XXXX9021",
                "balance": 84500
            }
        ],
        "total_balance": 125000 + 84500 * 4
    }
