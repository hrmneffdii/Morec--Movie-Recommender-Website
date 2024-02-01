# title API Address

## Method POST 

Cuma meminta untuk detail satu film

Endpoint url : "/api/users/getfilm"

Request : 

``` json
{
    "title" : "title"
}
```

Response succses : 

```json
[
	{
		"_id": "65b334e78c6b90ddaf1f6555",
		"title": "Skyfall",
		"tagline": "Think on your sins.",
		"overview": "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve - following a trail to the mysterious Silva, whose lethal and hidden motives have yet to reveal themselves.",
		"__v": 0
	}
]
```