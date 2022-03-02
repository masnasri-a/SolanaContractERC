from solana.rpc.api import Client

http_client = Client("https://api.devnet.solana.com")
print(http_client.get_balance(pubkey="9Qq6K7MpZxDFaxwoEGU57hPt2zvFjNoxrijuwcTKrGqL"))


# 2V4hCmc4avYekLyVooyKSgG8HffcEA6YD2EgXSkQqM9t