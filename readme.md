GetMutualFunds URL Guide :

Overview:
The GetMutualFunds URL is designed for seamless use with Excel sheets or .csv readers. This URL lets you query and retrieve mutual fund data directly from the AMFI India NAV file.

URL Structure:
To create a query, follow the format below:
https://mutualfundsdata.netlify.app/.netlify/functions/getMutualFundsData?arr=["Enter your ISIN inside the quotes", "Multiple ISINs separated by commas"]

Example Query:
https://mutualfundsdata.netlify.app/.netlify/functions/getMutualFundsData?arr=["INF209KA12Z1","INF209K01LS6","INF846K01CF1","INF0QA701565","INF194K01SN6","INF955L01JX6","INF740K01ZU6","INF843K01FI5","INF090I01KR8","INF917K01HH5"]

Note: The output in the CSV file will match the order of the ISINs provided in the query.

ISIN Limit per URL:
The URL has been successfully tested with up to 500 ISINs. The service is capable of handling more ISINs if needed.

Error Handling:
If an invalid ISIN is included in the query, an error message will be displayed for that specific ISIN in the corresponding row of the Excel sheet.
