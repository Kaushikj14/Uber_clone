Here's the updated `README.md` documentation reflecting the new changes in the `userController`:

```markdown
# API Documentation

This document describes the available user-related endpoints.

---

## 1. User Registration

### Endpoint: `/users/register`

#### Description
The `/users/register` endpoint allows new users to register by providing their details. Upon successful registration, the server returns a JSON Web Token (JWT) and the user's information.

#### HTTP Method
`POST`

#### Request Body
| Field       | Type   | Required | Description                                                 |
|-------------|--------|----------|-------------------------------------------------------------|
| `fullname`  | Object | Yes      | An object containing the user's first and last name.        |
| `firstname` | String | Yes      | First name (minimum 3 characters).                          |
| `lastname`  | String | No       | Last name (minimum 3 characters).                           |
| `email`     | String | Yes      | A unique email address (minimum 5 characters).              |
| `password`  | String | Yes      | Password for the account. This will be hashed before storing.|

**Example Request Body:**
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

#### Response
**Success (201 Created):**
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

**Failure (400 Bad Request):**
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

## 2. User Login

### Endpoint: `/users/login`

#### Description
The `/users/login` endpoint authenticates a user and returns a JSON Web Token (JWT) along with the user's details. The token is also set as a cookie for session management.

#### HTTP Method
`POST`

#### Request Body
| Field      | Type   | Required | Description                         |
|------------|--------|----------|-------------------------------------|
| `email`    | String | Yes      | The registered email address.       |
| `password` | String | Yes      | The associated password.            |

**Example Request Body:**
```json
{
    "email": "john.doe@example.com",
    "password": "strongpassword123"
}
```

#### Response
**Success (200 OK):**
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

**Failure (400 Bad Request):**
```json
{
    "errors": [
        {
            "msg": "Invalid email or password",
            "param": "email",
            "location": "body"
        }
    ]
}
```

---

## 3. Get User Profile

### Endpoint: `/users/profile`

#### Description
The `/users/profile` endpoint retrieves the authenticated user's profile information.

#### HTTP Method
`GET`

#### Headers
| Header Name       | Required | Description               |
|-------------------|----------|---------------------------|
| `Authorization`   | Yes      | Bearer token for the user.|

#### Response
**Success (200 OK):**
```json
{
    "_id": "user_id",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com"
}
```

**Failure (401 Unauthorized):**
```json
{
    "message": "Unauthorized"
}
```

---

## 4. User Logout

### Endpoint: `/users/logout`

#### Description
The `/users/logout` endpoint logs out a user by clearing their session token and blacklisting it to prevent reuse.

#### HTTP Method
`POST`

#### Headers
| Header Name       | Required | Description               |
|-------------------|----------|---------------------------|
| `Authorization`   | Yes      | Bearer token for the user.|

#### Response
**Success (200 OK):**
```json
{
    "message": "Logged out"
}
```

---

## Status Codes Summary

| Status Code | Description                             |
|-------------|-----------------------------------------|
| `200`       | Success (e.g., login, logout, profile). |
| `201`       | Successfully created (e.g., registration). |
| `400`       | Validation error or bad request.        |
| `401`       | Unauthorized (e.g., invalid token).     |
| `404`       | Resource not found (e.g., invalid email/password). |
```