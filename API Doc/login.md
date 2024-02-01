# Login API Address

## Method POST 

Mengirim data untuk validasi login

Endpoint url : "api/users/login"

Request : 

``` json
{
    "email" : "nama@gmail.com",
    "password" : "rahasia"
}
```

Response succses : 

```json
{
    "message" : "login succsesfully!",
    "nama" : "nama",
    "role" : "admin atau mahasiswa"
}
```
Response failed : 

```json
{
    "message" : "Login failed! Please check your email and password!"
}
```
