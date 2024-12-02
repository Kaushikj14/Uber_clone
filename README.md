# Uber_clone
Here's the `README.md` content documenting the `/users/register` endpoint based on the provided files:

```markdown
# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Description
The `/users/register` endpoint allows new users to register by providing their details. Upon successful registration, the endpoint returns a JSON Web Token (JWT) for authentication and the user's information.

---

### HTTP Method
`POST`

---

### Request Body
The request body should be in JSON format and include the following fields:

| Field       | Type     | Required | Description                                                |
|-------------|----------|----------|------------------------------------------------------------|
| `fullname`  | Object   | Yes      | An object containing the user's first and last name.       |
| `firstname` | String   | Yes      | First name (minimum 3 characters).                         |
| `lastname`  | String   | No       | Last name (minimum 3 characters).                          |
| `email`     | String   | Yes      | A unique email address (minimum 5 characters).             |
| `password`  | String   | Yes      | Password for the account. This will be hashed before storing.|

#### Example Request Body:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "strongpassword123"
}
```

---

### Response

#### Success (201 Created)
On successful registration, the server responds with the user's details and a JWT for authentication.

**Example Response:**
```json
{
    "token": "your_jwt_token_here",
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

#### Failure (400 Bad Request)
If validation fails (e.g., missing fields, invalid input), the server responds with an error message.

**Example Response:**
```json
{
    "errors": [
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        }
    ]
}
```

---

### Validation
- **Fullname (firstname):** Must be at least 3 characters long and is required.
- **Fullname (lastname):** Must be at least 3 characters long if provided.
- **Email:** Must be a valid email address, unique, and at least 5 characters long.
- **Password:** Must be provided and is securely hashed before being stored.

---

### Status Codes

| Status Code | Description                     |
|-------------|---------------------------------|
| `201`       | User successfully registered.  |
| `400`       | Validation error or bad request.|

---

### Notes
- The password is hashed using bcrypt before storing.
- A JWT is generated for the registered user using `jsonwebtoken`.
- Ensure `process.env.JWT_SECRET` is set in the environment for token generation.
```
