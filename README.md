Node course

Http Methods

GET: Get a resource from server.
POST: Post a resource to the Server(create or append resource).
PUT: Put a resource onto the Server(creste or overwrite a resource).
PATCH: Update parts of an existing resource on the server(not everything, but only needed one).
DELETE: Delete a resource on the Server.
OPTIONS: Determine whether follow-up Request is allowed(sent automatically).


Rest Principles

- Uniform Interface: Clearly defined API endpoints(methods and path) with clearly defined request + response data structure.
- Stateless Interaction: Server and cleint don't store any connection history, every request is handled seperately.
 - no session is stored, and every request is considered as new request.
- Cacheable: Server may set caching headers to allow the client to cache responses.
- Client-Server: server and client are separated, client is not concerned with persistent data storage.
- Layered System: Server may forward requests to other APIs.
- Code on Demand: Executable code may be transferred from server to client. 