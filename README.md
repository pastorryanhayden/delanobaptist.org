Welcome to a new project! In case you need a reminder, here are the steps to get it up and running:

<iframe width="560" height="315" src="https://www.youtube.com/embed/4dKwt_j1b0Q" frameborder="0" allowfullscreen></iframe>

> At any point - you can run `Run > Start Server` and then `Preview > 30000`

## Step 1: Airtable

<iframe width="560" height="315" src="https://www.youtube.com/embed/8uXDSeF1Mj4" frameborder="0" allowfullscreen></iframe>

1. Setup a new airtable team for the client.
2. Copy all of the default bases into the client's team.
3. Remove the "copy" from the base name.
4. Invite the client to the base as an author.

**Time:** 5 Minutes

## Step 2: Setup The Theme

<iframe width="420" height="315" src="https://www.youtube.com/embed/tzlHcvlk-Ak" frameborder="0" allowfullscreen></iframe>

In [Nitrous](https://www.nitrous.io/quickstart?repo=https://github.com/SitesForChurch/master-theme.git), use the top menu's `Run` command to change to the theme of the clients choosing.

![Nitrous Run Menu](https://dl.dropboxusercontent.com/u/47159282/Screen%20Shot%202016-06-24%20at%205.18.06%20PM.png)

After you change the theme, you can confirm it by using `Run > 01. Start Server`

**Time:** 5 Minutes

## Step 3: _config.yml

<iframe width="560" height="315" src="https://www.youtube.com/embed/aotzPgh5g9c" frameborder="0" allowfullscreen></iframe>

Follow the comments (Yml comments look like this `# Comment here`)

**Time:** 5 Minutes

## Step 4: Customize the following files

<iframe width="560" height="315" src="https://www.youtube.com/embed/21rnv74aPrU" frameborder="0" allowfullscreen></iframe>

In each file you'll find instructions in the comments.  (Comments look like this in HTML files `<!--Comment-->` and this in almost every other kind of file `/ Comment here`.)

```
├── _css
│   ├── _settings.scss (This is where you will change site colors, etc.)
├── _includes
│   ├── address.html (Just change the info)
│   └── service-schedule.html (ditto)
├── assets
│   ├── calendar_default.jpg (This corresponds with the default images in _config.yml - change them if you want.)
│   ├── default_header.jpg
│   ├── logo.png (This must be changed to the clients logo.)

└── welcome.html
```

**Time:** 1 to 2 hours

## Step 5: API Keys

At this point, all of the data on the site (with the exception of our custom welcome page) is just default data.  The stuff the client has been updating isn't connected.  In order to connect it, we need to get a bunch of special values - called API keys - and paste them into the correct spot in our `_gulp > airtable > airtable-config.yml` file.


Here is how that's done:

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/DjOyAMaz7ho" frameborder="0" allowfullscreen></iframe>

Go to [Airtable's API page](https://airtable.com/api) and find the APP Key for each of the client's bases and replace the ones in this file:

```
├── _gulp
│   ├── Airtable
|           ├── airtable-config.yml
```

**Time:** 5 Minutes

## Step 6: Setup and push to a github repository

<iframe width="560" height="315" src="https://www.youtube.com/embed/VYL3njNN7ow" frameborder="0" allowfullscreen></iframe>

This is where your [github](http://github.com) account comes into play.  Github is super geeky and super complicated - but the long and short of it is this - it gives you an easy way to store, backup and share all of your coding projects.  There are 9 steps to this:


### i. In Nitrous, make sure that you're terminal is on the "master-theme"

It should look like this:

![](https://dl.dropboxusercontent.com/u/47159282/git2.png)

If it says anything else besides "master-theme" then copy and paste this code into the terminal window and hit enter:

`cd ~/code/master-theme`

> If you care to know, the `cd` command in the terminal stands for "change directory."  

### ii. Sign in to your github account and click "new repsository."

In a new tab, open github.com, make sure you are signed in, and press the big "new repository" button.

**Note:** Don't let the big word *"repository"* scare you.  A repository is just a folder where your project is stored.

![](https://dl.dropboxusercontent.com/u/47159282/git2.png)

### iii. On the next screen, give your repository a name and click "create repository."

The name of your repository should probably be the domain name the client has chosen.  You DON'T want to click any of the other checkboxes on this page.

### iv. On the next screen, click the copy button for the second option:

![](https://dl.dropboxusercontent.com/u/47159282/git6.png)

This should copy the text in that box to your computer's clipboard.

Now, go back to nitrous, keeping a github tab open.

### v. Paste the text (that you copied from github in your last step) into the terminal in nitrous and hit enter.

It will ask you for your github username and password.  Then set up your site as a github repository.

![](https://dl.dropboxusercontent.com/u/47159282/git8.png)

![](https://dl.dropboxusercontent.com/u/47159282/git9.png)

![](https://dl.dropboxusercontent.com/u/47159282/git10.png)

---

We aren't out of the woods yet.  There is still three more things we need to do.  These next three commands are ones you are going to be adding often.  

### vi. Paste or type `git add .` into the terminal and hit enter.

![](https://dl.dropboxusercontent.com/u/47159282/git11.png)

This command tells github that you want to add every file and folder in your project to github so that it can keep track of it.

### vii. Paste or type `git commit -m "added my files"` into the terminal and hit enter.

![](https://dl.dropboxusercontent.com/u/47159282/git12.png)

This command tells github that you want to commit - or take a snapshot - of all of your files as they are right now.  This may seem tedious now, but it allows you to roll back your project when you make mistakes and also allows other people to work on your project without messing up your code.

Let's look at this command.  It has three parts: 

* `git commit` - This part tells github that you want to commit your files.
* `-m` - This part is shorthand that allows you to enter a short title.  If you didn't add this, it's no big deal, the terminal would just prompt you for a title. This is a little easier.
* `"added my files"` - Inside of the quotes you can put whatever you want. This should just be a description of what you've done since the last commit.  Because at this point we haven't committed anything - we are just leaving a note that says this is where we added all of our files at the beginning. 

### viii. Paste or type `git push` into the terminal and hit enter.

![](https://dl.dropboxusercontent.com/u/47159282/git13.png)

This will **push** all of your files from this computer to github.  The terminal may ask you for your github username and password again at this step.

---

Please note that those last three commands `git add .` , `git commit -m "your message"`, and `git push`.  Should be done early and often in your project.  If you have ever almost finished a research paper, only for your computer to crash and you have not saved it - you know how much it stinks to lose work.  This will enable you to keep your code secure and to go back to any point of it.  

It will also let you share it with me so we can put it on our production pipeline, which brings me to...

### ix. Add me as a collaborator on github.

Back in your github repository page (on the github website), go to **settings** and then **collaborators** and add me as a collaborator. My github username is `pastorryanhayden` This will enable me to pull down your code and put in our production server (which just keeps the site updating.) 

![](https://dl.dropboxusercontent.com/u/47159282/git14.png)

**Time:** 10 Minutes or less. (Even though there are 9 steps to this, it's actually something that you'll get so used to doing you'll be able to do in no time at all.  I could easily set up a github repo in less than one minute.)

## Step 7: Setup the Hosting

<iframe width="560" height="315" src="https://www.youtube.com/embed/-tWX0yLz_g4" frameborder="0" allowfullscreen></iframe>

The last major step is setting up the URLs. To do this, we use a service called **Pubstorm.**  100% of this is done in Nitrous, in the terminal.  All you need to do is copy and paste a few commands.

As usual, make sure that you are in the master-theme directory in the terminal.  It should look like this - if not, type `cd ~/code/master-theme`.  Once this is done, it's just three simple steps:


### i. Run `npm install -g pubstorm`

This installs pubstorms tools on the system so we can do the next step.

### ii. Run `storm login`

The terminal will ask for the pubstorm username and password.

> **Note:** The username for our account is `sitesforchurch@gmail.com` the password will be sent to you via email.

### iii. Run `storm init`

It's going to ask for two things:

* The folder the site will live in.  This will **ALWAYS** be `_site`
* The name of the site.  Most of the time you should ise the URL thr church wants without the www or .com sections (so if the site is biblebaptistmattoon.org you would just use `biblebaptistmattoon`)

### iv. Run `storm publish`

This will take a minute and will publish the site to `whatevernameyouchose.pubstorm.site`.

### v. Copy and paste that url into the `URL` field of `_config.yml`.

(See step 3 or video for further explanation.). Remember to change this back to `http://localhost:3000` when testing locally.  


**Time:** 10 Minutes or less.

## Step 8: Pass the site code off to me. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/UY0E1GxJPbs" frameborder="0" allowfullscreen></iframe>

when you are satisfied with the site and ready to "go live" its time to pass the site off to me.  Simply...

### i. run `git add .`

### ii. run `git commit -m "your message here"`

replace "your message here" with a description of your progress.

### iii. run `git push`

### iv. Copy the repositories URL from its page on github and send it to me via a slack direct message.

## Step 9: Relax and Get Paid

## Step 10: Continue to communicate with your client. 