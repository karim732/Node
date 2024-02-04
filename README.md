Node course

server side rendering -> SPA(using RestApi)

Frontend and backend code on different servers.

In async then, catch throw error doesn't work, next(error) works.

Rest api is stateless and sessions is not used.

In rest api, we return so called token to the client, which is generated on the server and this token is stored on the client.

Client can then attach this token to every subsequent request it sends to the server. 

JSON Data + Signature(can be verified by server via secret key) = JSON Web Token(JWT)

Authorization


**
one good way to mitigate against XSS attacks when storing the JWT in localStorage is to split the token up into two pieces. One containing the headers and payload, which you store in localStorage, and then send the signature separately in HTTP only Cookie. You will of course need to add logic to join these two pieces together in both th BE and FE. This means that if somebody was able to steal the part of the token in the localStorage, they would not have access to the signature from JS. 