# Lecture 1: Getting Started and Git Basics

## Additional Resources

### Required

- [Git Overview](https://www.youtube.com/watch?v=HkdAHXoRtos&list=PLyaKHuPBhH9rd0-oXZ2a8scC6ZJWCoK0Z)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

### Supplemental

- [Longer Git Overview](https://www.youtube.com/watch?v=DVRQoVRzMIY&list=PLyaKHuPBhH9rd0-oXZ2a8scC6ZJWCoK0Z&index=3) that is slower paced
- [Pro Git Book](https://git-scm.com/book/en/v2) and the [Official Git Docs](https://git-scm.com/docs) contain everything you could ever want to know.

## What is Git?

Git enables multiple (or thousands of) people to safely collaborate on the same codebase without accidentally overwriting each other's changes. It also automatically tracks who did what and when within a codebase. If you ever want to work on any code with other people, learning git is a necessity. This lecture will walk through the most widely used operations and give a working high level overview of how to use git effectively. For more in depth coverage of the subject matter, the best online resources are the and the on the git documentation site.

## Git Functionality

Git has a huge number of features and commands, 80% of which you are never likely to use. Don't try and learn all of Git in one go, instead learn just as much as you need to get started, and then actually start using it to get practice. You will naturally encounter warnings you don't understand or want to do something you don't know how to, and then you can look up that information.

## Git Warnings

If you don't know what is going on with you repository or why a command is failing, closely read the terminal output. If you don't understand any part of what it is saying, google the terminal output to learn what it is telling you before trying to do anything else. Git will also sometimes give warnings that you can ignore or override. However, when doing this, make sure you understand why Git is giving you the warning before overriding it.

## Git Ignore

Always add a .gitignore file to your repository when working on large projects. File names added to the .gitignore file will not be added or committed to your git repository. Installed node modules, environment variables, and local configuration files should never be committed to a remote repository.

## Rapid Fire Tips

1. Commit early and often. Nothing is worse than losing some of your work, but once something is committed to git it is very hard to accidentally do something that can't be undone fairly simply.
2. Use terminal command auto completes by pressing tab to type out git commands faster
