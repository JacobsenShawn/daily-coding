Initializing a Git Repository

git init 

The git init command creates or initializes a new Git project, or repository. It creates a 
.git folder with all the tools and data necessary to maintain versions.
 This command only needs to be used once per project to complete the initial setup. For instance, the code block sets up the home folder as a new git repository.

|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
Checking the Status of a Git Repository

git status 
The git status command is used within a Git repository to its current status including the current commit, any modified files, and any new files not being tracked by Git.
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|

Displaying Differences with Git Diff
git diff 

The git diff filename command will display the differences between the working directory and the staging area in one specific file. Use git diff filename before adding new content to ensure that you are making the changes you expect.

|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
Showing Git Commit Logs

git log 
In Git, the git log command shows all of the commit logs for a project. The following is displayed for each commit:

    A 40-character code, called a SHA, that uniquely identifies the commit.
    The commit author
    The date and time of the commit
    The commit message

This command is particularly useful when you need to refer back to an old version of your project. The unique SHA code allows you to identify a point in your program’s history that you would like to revert to.

|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
Committing Your Code

The git commit -m "log message here" command creates a new commit containing:

    The current contents of the staging area
    A log message describing the changes to the repository

A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository. This command is almost always used in conjunction with the git add command as git add is used to add files to the staging area.

|----------------------------------------------------------------------------------------------------------------------------------------------------------------|

Adding Changes to the Staging Area

The git add filename command is used to add the filename file to the staging area. After your changes have been staged, you can use the git commit command to permanently store your changes.
