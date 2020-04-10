# Virtual Machine Instructions

A virtual machine is a version of another computer running within your computer. This feat is accomplished by installing a "VirtualBox" server on your machine. Once installed, a copy of another computer, it's operating system, and files are stored on your computer. Then, the VirtualBox server will run that other computer on your computer's hardware. You can read more about [System Virtual Machines](https://en.wikipedia.org/wiki/System_virtual_machine) on Wikipedia.

In our case, the NAIWE VM will act just like 'naiwe.com' in the cloud, only it sits inside your computer. A copy of NAIWE.com's operating system (Linux), files, and database tables (archived April 2, 2020) have been installed on the VM.

We'll configure the VM to point to your copy of the 'naiwe-staging' GitHub repo sitting on your computer. The NAIWE VM will 'watch' your folder and update its copy of the website with any changes you make in real time. So, you should be able to make a change locally, and see the results immediately without having to update the site in the cloud. Also, you can work independently of your team mates without you interrupting their work, or they yours.

We'll also configure your computer so that when you access 'http://naiwe.com' it will automatically be directed to the NAIWE VM to serve up the website (not naiwe.com in the cloud).

**This gives you a completely autonomous development environment that allows you to use your native development tools (IDE, editor, etc...) to do devlopment and maintenance on the NAIWE website with virtually configuration on your part (eg: downloading the right version of PHP, Apache, WordPress, MySql, etc...)**

## Terms and Definitions

In a virtual world it can get pretty confusing when talking about folders, directories, files, etc... and which computer they live on. Here are some terms and definitions that will help us keep them all straight.

* *Host*: This is your physical computer. It is the computer that is running the VirtualBox Manager softare
* *Guest*: This is the virtual computer running inside the VirtualBox Manager software
* *VirtualBox Manager*: This is the graphical user interface for managing your VMs
* *VM: Virtual Machine*: Alternately the file that has your Guest operating system on it, and the running instance of that file
* *NAIWE VM*: an instance of all software and files that make up the unique NAIWE site

## Download, Install, and Configure your NAIWE VM
* Download and Install VBoxManage hostonlyif createthe VirtualBox software here:
  * [VirtualBox (from Oracle)](https://www.virtualbox.org/wiki/Downloads)
  * Be sure to click the right link for your OS
  * `Windows Host` for Microsoft Windows
  * `OS X Host` for Macintosh OS X (MacOS)

* Download the NAIWE Virtual Machine Image here:
  * [NAIWE VM](https://gregsmithcom.s3.amazonaws.com/greg-smith.com/static/NAIWE.ova.gpg) (4GB)
  * (Get a cup of coffee. Depending on your network this can take from 5 to 120 minutes to download)

* Import the NAIWE VM into the VirtualBox Manager
  * `VirtualBox -> File -> Import Appliance`
  * Select the file you downloaded (NAIWE.ova)
  * Accept the defaults
  * Wait about one to five minutes depending on your computer
  * (once imported, you can delete or archive the NAIWE.ova file)
  * (or hang on to it if you feel you might want to start over)

* Configure the Host computer so it can communicate with the NAIWE VM
  * Execute the following command in a terminal to allow your computer to connect to the VM
  * `VBoxManage hostonlyif create`

* Configure the NAIWE VM to point to your `naiwe-staging` folder on the Host
  * Click on the "NAIWE" VM in the VirtualBox Manager
  * Click on the orange "Settings" Button
  * Click on the "Shared Folders" Icon
  * Select the 'naiwe-staging' folder under "Machine Folders"
  * Right click on the folder and select "Edit Shared Folder"
  * Click on the "Folder Path:" and select "Other..." to navigate to the "naiwe-staging" Repo folder on your computer
  * Click on "OK"

![NAIWE Guest Shared Folders](/assets/images/naiwe-guest-shared-folders.png)
![NAIWE Host Shared Folders](/assets/images/naiwe-host-shared-folders.png)
