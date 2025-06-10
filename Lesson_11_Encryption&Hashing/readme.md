# BEP - 11

**PREVIOUSLY**
- JWT authentication & authorization practice

**TODAY**
- Encryption vs hashing
- Password cracking

## Encryption vs Hashing

- HTTPS:
- Data is encrypted in transit
- Nobody can read your password when it's being passed online
- Your password arrives to the server and the _server_ can read it
- Then the server can compare the input to the one stored in the DB
- The communication is _encrypted_

- Security is something that needs to be in layers
    - A sad truth is, many user databases have been stolen or leaked
    - Including from some VERY large companies
        - Dropbox
        - LinkedIn
        - Twitter
        - ...

    - If your LinkedIn password leaks
        - Attackers will try to log into your gmail/netflix/bank using it
        - You are not using the same password in many places, are you?

- It's not enough to secure data in transit (HTTPS)
    - Data should be secure even at rest

- If and when a database contents is stolen
    - It should _really_ not be possible to simply read passwords as plain text
    - The other data, such as e-mail addresses usually are plain text

- Data breaches are really, really common
    - It's not a question of _if_ but _when_
    - Prepare accordingly

### Encryption

- Encryption is reversible
    - `I like cats` ---encrypt---> `V yvxr pngf`
    - `V yvxr pngf` ---decrypt---> `I like cats`

- There are many different encryption algorithms
    - The one used above is not a good one, but demonstrates the concept

- 10 minute mini exercise
    - 1. Go to https://rot13.com
    - 2. Figure out how it works
    - 3. Decode: "ZbatbQO, Rkcerff, Ernpg, Abqr"
    - 4. Decode (harder!): "EDJ - Ejhjubm Dbsffs Jotujuvuf"

- ROT-13 is a very simple algorithm
    - Most encryption algorithms use a "secret" to encrypt


- encode-decode: https://encode-decode.com/aes-256-cbc-encrypt-online/

- This is closer to how HTTPS works
    - The Client and Server negotiate a shared "secret"
    - Client encrypts using the secret
    - Server decrypts using the secret

- Most importantly: **encryption can be reversed**

### Hashing

- Hashing is not reversible
    - `I like cats` ---hash---> `2c2a3390a9fc4bf9e67ac638f9b2f3ee`
    - `2c2a3390a9fc4bf9e67ac638f9b2f3ee` cannot be reversed

- The same input always creates the same output
    - The output is called the "hash"

- There are many different hashing algorithms

- unit-conversion: https://www.unit-conversion.info/texttools/sha

- Passwords should _always_ be hashed
    - If someone steals the database
    - They cannot simply decrypt the password
    - This way it's MUCH slower and harder to access to the actual passwords
    - But still not impossible

## Password cracking

- You "find" a list of user accounts with hashed passwords from the dark web

    ```js
    const accounts = [
        { user: "Ace", password: "5f4dcc3b5aa765d61d8327deb882cf99" },
        { user: "Pam", password: "96bd6436d12ee3301f81a24498fe072e" },
        { user: "Jim", password: "f25a2fc72690b780b2a14e140ef6a9e0" },
    ]
    ```

    - You can't decrypt them, but you recognize the algorithm is MD5
    - Lucky! That's a bad algorithm for passwords!

    - You also know the 3 most common passwords
        - `123456`
        - `1234567`
        - `password`

    - So you decide to try them
        - `md5("123456")`       --> e10adc3949ba59abbe56e057f20f883e
        - `md5("1234567")`      --> 25d55ad283aa400af464c76d713c07ad
        - `md5("password")`     --> 5f4dcc3b5aa765d61d8327deb882cf99

    - WOW! Looks like The password for user "Ace" is "password"

- That was an example of password cracking using a **dictionary attack**
    - You find a list of let's say the 500000 most common passwords
    - You hash each of them one by one and compare the hashes to the passwords
    - If the passwords are weak, you will crack most accounts!
    - By the way, hashing 500000 passwords is fairly easy and fast

- Some accounts might use strong passwords like `aF283aX4` (8 characters)
    - A dictionary attack would not work, it's too random
    - So you decide to try to hash _every single possible combination_

    - With characters a-z, A-Z, 0-9 you have 62 possible characters
        - If you are brute forcing an 8 character password
        - Try each combination of characters; `aa` `ab` `ac` etc
        - The number of possible combinations is 218,340,105,584,896
        - That's 218 trillion possible combinations
        - Thats a spicy `for` loop, but not impossible - computers are _fast_
        - Incredibly, that is **not** enough
        - This is why you want a long password with special characters

- SO, even hashed passwords can be cracked
    - You should change your password sometimes :)

## Wrap-up

- Encryption is reversible
- Hashing is not reversible
- Passwords should be hashed to protect data at rest in case of a data breach