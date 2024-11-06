


GetMutualfunds url is design specially to use it in the excel sheet or .csv reader. Queries made with 
url returns the info/data from https://www.amfiindia.com/spages/NAVAll.txt. 

Where to write queries in Url?

"https://mutualfundsdata.netlify.app/.netlify/functions/getMutualFundsData?arr=["Enter your ISIN inside the quotes","Multiple ISIN separated by comma"]

example : "https://mutualfundsdata.netlify.app/.netlify/functions/getMutualFundsData?arr=["INF209KA12Z1","INF209K01LS6","INF846K01CF1","INF0QA701565","INF194K01SN6","INF955L01JX6","INF740K01ZU6","INF843K01FI5","INF090I01KR8","INF917K01HH5"]"

Note: Output in the CSV is based on the order of ISIN enter in the query

How many ISIN can a URL take?
- Currently we have tried 500 and it works, definitely it can take  more.

Error:
- For wrong ISIN it will display error for that particular ISIN in the row of excel.