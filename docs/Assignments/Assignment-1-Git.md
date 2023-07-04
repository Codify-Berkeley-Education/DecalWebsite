---
sidebar_position: 1
---

# Assignment 1: Git and Command Line Basics

## Assignment Purpose and Goals

## Assignment Overview

- Configure git and GitHub
- Initialize an empty git repository and clone an existing repository
- Perform a variety of git and shell operations in the command line
- Export git repository for grading

## Part 1: Enable GitHub in the Command Line

If you do not already have a personal [GitHub](https://github.com/) account, go ahead and make one. Be sure to use a personal email, as all the work you complete on your GitHub account can be used to form a personal portfolio.

Once you have created a github account, you need to sign in on your local machine so that you can issue commands from your local terminal. There are [several ways to do this](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github), but we recommend and will demonstrate how to do so through the [github cli](https://cli.github.com/) (command line interface).

1.  Follow the instructions to [download the cli](https://github.com/cli/cli#installation) for your operating system. I'd recommend downloading and using a package manager, [homebrew](https://brew.sh/) for mac and [chocolatey](https://chocolatey.org/install) for windows. After, verify your installation by running the command >gh --version
    ```console
    aidan@Aidans-MBP-4 ~ % gh --version
    gh version 2.24.3 (2023-03-09)
    https://github.com/cli/cli/releases/tag/v2.24.3
    ```
2.  Run the command >gh auth login and select Github.com, HTTPS, Yes, Login with a web browser, and copy the one-time code

    ```console
    aidan@Aidans-MBP-4 ~ % gh auth login
     ? What account do you want to log into? GitHub.com
     ? What is your preferred protocol for Git operations? HTTPS
     ? Authenticate Git with your GitHub credentials? Yes
     ? How would you like to authenticate GitHub CLI? Login with a web browser
     ! First copy your one-time code: F485-11B8
     Press Enter to open github.com in your browser...
    ```

3.  Enter the one time code into the browser, and then press authorize on the next page
4.  In your terminal, you should see that you are now logged in. You can double check by running the command >gh auth status

    ```console
    aidan@Aidans-MBP-4 ~ % gh auth status
    github.com
        ✓ Logged in to github.com as aidansunbury (/Users/aidan/.config/gh/hosts.yml)
        ✓ Git operations for github.com configured to use https protocol.
        ✓ Token: gho\_****************\*\*\*\*****************
        ✓ Token scopes: gist, read:org, repo, workflow
    ```

## Part 2: Create a git repository and upload it to github

The rest of this assignment, except for the steps that tell you otherwise, can and should be completed entirely through the command line. While it may be confusing and slow at first, learning to use the command line will vastly increase your productivity as a developer.

1. Open the command line (powershell on windows or terminal on mac) and navigate to a directory (folder) where you want to create a git repository.

When you first open your terminal, it is likely to open to your root directory. You can view your current directory (print working directory) with the command >pwd

```console
aidan@Aidans-MBP-4 ~ % pwd
/Users/aidan
```

You can view all of your current directory's subdirectories with the command >ls

```console
aidan@Aidans-MBP-4 ~ % ls
Applications
Desktop
Documents
Downloads
```

And you can navigate to one of these subdirectories with the command >cd <directory>

```console
aidan@Aidans-MBP-4 ~ % cd Documents
aidan@Aidans-MBP-4 Documents % pwd
/Users/aidan/Documents
```

To navigate to a parent directory, use >cd ../

```console
aidan@Aidans-MBP-4 ~ % cd ../
aidan@Aidans-MBP-4 Documents % pwd
/Users/aidan
```

These commands can also be chained to navigate multiple directories at once.

Once in your desired directory, create a new directory to house our git repository with >mkdir <new-directory-name> and cd into it.

```console
aidan@Aidans-MBP-4 Documents % mkdir MyRepo
aidan@Aidans-MBP-4 Documents % cd MyRepo
aidan@Aidans-MBP-4 MyRepo %
```

Initialize a git repo with >git init

```console
aidan@Aidans-MBP-4 MyRepo % git init
Initialized empty Git repository in /Users/aidan/Documents/Codify Projects/Decal/MyRepo/.git/
```

Create a README.md file from the terminal using the touch command >touch README.MD

```console
aidan@Aidans-MBP-4 MyRepo % touch README.MD
```

Write "Hello world from the terminal" to the README.md file. Executing >echo <command> returns the output of the command or value it is passed (in this case just a string) and >> writes to the end of a file. We can verify we were successful by running >cat <file-name> to display the contents of a file.

```console
aidan@Aidans-MBP-4 MyRepo % echo "Hello world from the terminal" >> README.MD
aidan@Aidans-MBP-4 MyRepo % cat README.MD
Hello world from the terminal
```

Now we have added and modified files within our git repository. However, these files are not being tracked yet. We can view our current status with >git status

```console
aidan@Aidans-MBP-4 MyRepo % git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.MD

nothing added to commit but untracked files present (use "git add" to track)
```
