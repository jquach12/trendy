import requests
import json
r = requests.get("https://us-central1-vision-migration.cloudfunctions.net/la_hacks_2019?market_code=3")

data = json.loads(r.text)
print(data)