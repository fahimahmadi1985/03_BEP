# BEP - 08

**PREVIOUSLY**
- Routing

**TODAY**
- CORS and SOP
- User authentication concepts
- Cookies & sessions

## CORS and SOP

- http://ddg.gg:8080/article/123/image.png?thumbnail=true#top

- Related terminology: "Origin"
    - What are the different parts of a URL?
        - Protocol, domain, port, resource path, parameters, etc...
    - The "origin" is the combination of the protocol, domain and port of an URL

- Your website is: http://ddg.gg:8080/
    - Same origin: http://ddg.gg:8080/products            - same domain, port and protocol
    - Same origin: http://ddg.gg:8080/style.css   - same domain, port and protocol
    - Same origin: http://ddg.gg:8080/login       - same domain, port and protocol

    - NOT same origin: http://ddg.gg:3000/login   - different port
    - NOT same origin: http://ddg.de:8080/login   - different domain
    - NOT same origin: http://AAA.gg:8080/login   - different domain
    - NOT same origin: https://ddg.gg:8080/login  - different protocol

### SOP - Same Origin Policy

- Pages on one origin can only access data from the same origin as itself
- This is the SOP; a policy that browsers follow
- SOP was introduced to prevent cross-site request forgery attacks (CSRF)

- A simplified CSRF attack
    - You visit `mybank.com` and log in
        - Now `mybank.com` trusts the requests from your browser are from you
    - You visit `evil-hacker.com`
        - A script in `evil-hacker.com` makes a request to transfer money
        - `fetch("mybank.com/sendmoney?to=evilhacker")`
    - Now `mybank.com` sees a request coming from your browser
        - They trust it's coming from you and transfer the money
        - Damn you evil hacker!

- We need to stop this, but still allow using resources from other services
- CORS is a mechanism that allows this
- CORS allows bypassing the SOP, but in a controlled and secure way

### CORS - Cross-Origin Resource Sharing

- CORS allows us to send requests from one origin to another origin
- CORS needs to be enabled by the service you are contacting
    - So `mybank.com` needs to *allow* requests from `evil-hacker.com`

- For cross-origin requests, your browser actually makes two requests
    - A "preflight" request to verify CORS
        - *"Hey mybank.com, do you allow requests from evil-hacker.com"*
    - If the preflight request works, then the actual request is done

## User authentication

- The web runs on HTTP and HTTP is *Stateless*
- Each incoming request must contain all the details required for processing it

- A typical authentication (login) flow goes like this

    1. Server sees request containing `user: CoolZero91, password:iloveyou`
    2. Server checks credentials and sends back an identifier, `sessid000000123`
    3. Client stores `sessid000000123` and sends it with every request
    4. Server sees request containing identifier `sessid000000123`
    5. Server knows - ah, this request is from `user: CoolZero91`

- There are multiple ways servers and clients can handle these identifiers
    - The main two are `session` authentication and `token` authentication

## Cookies

- Before we go in, what kind of information is passed in a HTTP request
    - Method, URL
    - Headers
    - Body / payload

- And in a response?
    - HTTP response code
    - Headers
    - Body / payload

- Cookies are a small amounts of data passed in headers
    - Commonly the server creates cookies for clients to store
    - Clients can also create cookies for themselves
    - The client stores these cookies

- Cookies are most commonly associated with `session` authentication
- But really, cookies are just another way of carrying data with requests

- A cookie header contains a name and a value and some metadata

- An example of a cookie created by the server might look like this:

    - `Set-Cookie: sessionId=abc123; Expires=Wed, 31 Oct 2028 13:37:00 GMT; Secure; HttpOnly`

        - `sessionId` is the name of the cookie
        - `abc123` is the value of the cookie
        - `Expires=Wed, 31 Oct 2028 13:37:00 GMT` sets the expiration
            - After this, the cookie will be deleted by the browser
        - `Secure` and `HttpOnly` define what kind of cookie this is
        - This would be sent as a HTTP response header

- This cookie is stored in the browser and sent to the server with every request

