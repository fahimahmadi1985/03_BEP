# Authorization

## PREVIOUSLY
- JWT
<!-- 
## TODAY
- Authorization


### Authorization

- Today is middleware practice
- So far we have been discussing only user Authentication
    - Authentication: Who are you?
    - Authorization: What are you allowed to do?

- Usually different users have access to different parts of our app
    - All users can do GET /posts
    - Only admins can do DELETE /posts/:id

- There are many different approaches

#### Simple roles-based

- Your app has Users and a few Roles: Admin, User, Editor, Moderator…
    - Your users might have one specific role
    - Your users might have multiple roles at once

- Some endpoints require specific roles to work

```js
app.delete('/foo/:id', authenticated, roles(['admin']), (req,res) => {
    ...
})

app.put('/foo/:id', authenticated, roles(['admin','editor']), (req,res) => {
    ...
})
```

#### Permissions-based

- Your app has Users and many Permissions
    - Your users might have a list of granted permissions (similar to roles)
        - EDIT_POSTS
        - DELETE_POSTS
        - DELETE_USER
        - ...

- Some endpoints require specific permissions to work

```js
app.delete('/usr/:id', authenticated, require('DELETE_USER'), (req,res) => {
    ...
})

app.delete('/foo/:id', authenticated, require('DELETE_FOO'), (req,res) => {
    ...
})
```

#### Mixed

- Can be anything really
- Your app maybe has a mixture of concepts
    - Users, Roles, UserGroups, Permissions...
    - Permissions can be granted to specific users
    - Permissions can be granted to roles
    - Permissions can be granted to user groups
    - A user can have many roles, user groups and permissions

- Endpoints can be protected by a permission
- Endpoints can be protected by a role

```js
app.delete('/users/:id', authenticated, roles(['superuser']), (req,res) => {
    ...
})

app.delete('/posts/:id', authenticated, permission('DELETE'), (req,res) => {
    ...
})
```

- There are, naturally, many many different npm packages and other tools
- Let's build a fairly simple roles based system ourselves

[authorization](./authorization/)

### Wrap-up
- Authentication: Who are you?
- Authorization: What are you allowed to do?
- We use middleware for authorization
-->