# Register API Address

## Method POST 

Endpoint url : api/users/register

Request : 

``` json
{   
    "nama" : "nama-1",
    "role" : "admin atau mahasiswa",
    "email" : "nama@gmail.com",
    "password" : "rahasia"
}
```

Response succses : 

```json
{
    "message" : "Register succsesfully!",
    "nama" : "nama",
    "role" : "admin atau mahasiswa"
}
```
Response failed : 

```json
{
    "message" : "email already exist!"
}
```
