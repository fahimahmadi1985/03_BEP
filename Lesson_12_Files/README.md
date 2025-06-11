# BE - Security - 08: File uploads

### Recap
- **Hashing**
  - Hashing passwords protects user data by _converting plain text passwords into irreversible, secure hashes_.
  - In Express.js, libraries like **bcrypt** are commonly used to hash and verify passwords.

  - Always _hash passwords before storing them in the database_, and never store plain text passwords.


### Agenda
- File uploads
- Security concerns


## File uploads

- Profile pictures, report PDFs, signed documents, excel sheets of data...
- It's very a common need to allow users to upload Files
- File uploads tend to be a bit more complex than simple data forms

### Security concerns

- **Uploading files is a potential attack vector** (not a huge one, but still!)

- What if a user starts to upload a file that is just terabytes of noise?
    - **Transferring**, **processing** and **storing** that costs money and resources!

- What if a user **uploads a virus**?
    - They might not even know they are doing this!
    - Your server is probably fine, but what about users who then download it?

- Did you know you can actually hide files _inside_ photos?
    - Can your users upload a profile picture with some secret data inside?

- **To mitigate security issues, file uploads should be validated**
    - You can **limit the size** of uploads
    - You can **process images automatically** to make sure they make sense
    - You can scan for **viruses** after a file is uploaded

- A way of virus checking uploaded files
    - When a file is uploaded, it is kept in a **separate folder**
    - Then you run an **antivirus checker** on the file
    - After the antivirus clears the file, you move it to permanent storage
    - https://www.npmjs.com/package/clamscan
        - This uses ClamAV to check files https://www.clamav.net

- For photos you could use something like **sharp** or **jimp**
    - Make sure photos are compressed to save space
    - Make sure photos are not gigantically big
    - You could generate a few versions, like thumbnail and original
    - https://www.npmjs.com/package/sharp
    - https://www.npmjs.com/package/jimp
        - (Play around with this, it's a LOT of fun just to edit photos in JS)

## Theory of how is it done in production

- In a production environment, you really should **not just save the files on disk**
    - It's easy to just create `/filez` and insert everything inside
    - But that will become problematic sooner or later!

<br>

- Uploaded files all should named using UUIDs
    - `7ede71d6-8d78-44f3-9b5a-9521945e2402.pdf`
    - `ea477375-98d7-4f08-b5ec-19d4bcbfc44a.jpg`
    - `b0df7b49-71cb-49f0-8bfa-da79a964c88f.png`

- You can't keep the original filename
    - Very soon two users will upload "profile.jpg"

- If your application might ever grow big, you probably want to organize files
    - Storing them in the database is usually a bad idea
    - **Databases are not optimized for files**, they become slowed down
    - Database storage costs more than file storage

- One common way to store files in cloud is **object storage**
    - Services like Amazon S3 allow for storing files
    - They are isolated from your application code and your database
    - During upload, store the **metadata** of the file in your database
        - Generate a name like `ea477375-98d7-4f08-b5ec-19d4bcbfc44a.jpg`
    - Store the file in Amazon S3, store the data in your Database
        - When a user request the file, you can check the database
        - You can then get the file from S3 using its metadata

- Decisions on how to store data are often done by senior developers
    - Or software architects


- The basics are not that hard to do
    - But we don't have the time to experiment with such a system
    - Maybe you could look into it in your final project?

- So let's practice something simpler
    - We will use a tool called `multer`
    - https://www.npmjs.com/package/multer
    - A user registration form with a profile photo file from the frontend
    - Saving the photo on disk
    - Saving the details on MongoDB


## Wrap-up

- File uploads are an attack vector
- File storage is complicated
- In production, files are often stored separate from code and other data
- Lots of NPM tools for working with files exist


## Self-study prompts

- CSRF is a big security topic https://github.com/pillarjs/understanding-csrf 

