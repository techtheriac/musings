## Making local repo remote.
- Create new repo on github.
- Copy the remote address.
- Initialiaze a new repo in a desired folder. 
- Initialize repo with `$ git init`
- It makes sense to make sure the folder name matches the name of the new github repo.
- You can create a README.md file too.
- Add the README.md file with the `$ git add <FILENAME>` command (FILENAME is of course README.md)
- Commit changes: `$ git commit -m "whatever message you like or README.md Added or anything else"`
- Remember the remote url you copied the other time? Now is the time to put it to work 
- Add the remote url to the local repo: `$ git add origin <REMOTE_URL>`
- $ git push -u origin master. This commands pushes commits in the local repo to the master branch.
- Note that `origin` is just the name (kind of like a variable) for the remote url specified earlier. It could be any name actually.
- Go refresh the repo on github and you'll see all comitted files there. Bitch!!
- You can chech remote urls using the following command `$ git remote -v`


## Working with repos by other authors.
- Fork the repo.
- Clone the repo: $ git clone <REPO_URL>
- Note that the repository already has a remote address.
- Remote url can be checked using the command below
- $ git remote -v
- The original repo you forked could change though.
- You can add the url to the original repo too using the command below.
- $ git remote add upstream <ORIGINAL_REPO_URL>
- upstream is just another placeholder (variable-like) name. Don't overthink it.
- You can CHANGE a remote url too using the command below:
- $ git remote set-url <REMOTENAME> <NEW_URL>
- You see?? The <REMOTENAME> (like upstream) is just a placeholder. You get the gist now.
-  

