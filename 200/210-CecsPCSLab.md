# ORACLE Cloud Test Drive #

## Lab 2: Working with Process Forms in Experience Cloud ##

### 1.	Introduction ###

In this lab we will look into how we can configure a process form into a Experience Cloud Page.

### 2.	Import Sample Process ###

1. Login to your Process Cloud instance

<!-- ``https://process-gseXXXXXXX.process.us2.oraclecloud.com/bpm/workspace`` -->

>Note: Use your username and the password to login

<!-- <img src="images/210-1-1.png" width="100%"/> -->

2. Click on **Get Started**

<!-- <img src="images/210-1-2.png" width="25%"/> -->
<!-- <img src="images/210-1-2a.png" width="100%"/> -->

3. On the center menu click ``Create > Import > Import Application``

<!-- <img src="images/210-1-3.png" width="100%"/> -->
<img src="Create_Import_Process.png" width="100%"/>

4. A dialog menu will appear Choose the **CustomerBlog.exp** file you should download from [here (CustomerBlog.exp)](../resource/CustomerBlog.exp)

<img src="images/210-1-4.png" width="50%"/>

5. Provide the **Name** (eg. CustomerBlog), Select Space (default: **My Space**) and click **Import**

<img src="images/210-1-5.png" width="50%"/>

Once the import is completed you will see the following message

<img src="images/210-1-5a.png" width="25%"/>

6. Next we want to do is to deploy the imported process. Click on the **"CustomerBlog"** (or the name you've given) to open the CustomerBlog Process in the Process Composer shown in the next image.

<img src="images/210-1-6.png" width="50%"/>


7. In the process composer, click on **Activate** icon. You will see the following message **"No version has been deployed"**. Now click on **"Deploy new Version"** button

<img src="images/210-1-7.png" width="100%"/>

<img src="images/210-1-7a.png" width="100%"/>


8. Enter the User Credentials as shown in the picture below. 
Select checkbox, **"Remenber Me"**, click ``OK``

>Note: Use the password that has been assign to you.

<img src="images/210-1-8.png" width="50%"/>


9. Select Version you want to deploy. Click on the dropdown and choose ``"Last Published Version"``. Click **Customize**.

<img src="images/210-1-9.png" width="50%"/>

10. Keep the **Default** settings and click ``Validate``.

<img src="images/210-1-10.png" width="50%"/>

11. You will be prompted **"Application successfully validated!"**. Click ``Options``.

<img src="images/210-1-11.png" width="50%"/>

12. For **Revision id** enter ``1``, and click ``Deploy`` button.

<img src="images/210-1-12.png" width="50%"/>

13. Now you have successfully deployed the Application. Click ``Finish`` button.

<img src="images/210-1-13.png" width="50%"/>

You screen should look as followed.

<img src="images/210-1-13a.png" width="100%"/>


Click on "Close Application" top right corner of the Process Composer screen

14. Next, we will configure the participants for the process application. In order to do this navigate to ``Configure`` on your Process Cloud home page.

<img src="images/210-1-14.png" width="100%"/>

15 On the left menu navigate to ``Organization > Manage Roles``. You will see on the right hand side a list of roles. 

16. Now find and select the role **CustomerBlog.Analytics Viewer** and click on ``Add Member``. 

<img src="images/210-1-15.png" width="100%"/>

17. In the dialog screen find the user **bala.gupta** click search. You will see the user balagupta apear on the result screen, now select bala.gupta and click ``OK``. Bala Gupta should be added as one of the Members.

<img src="images/210-1-17.png" width="25%"/>

Now click **Save** to save the changes.

<img src="images/210-1-17a.png" width="100%"/>

18. Perform the same steps for the following two roles

- CustomerBlog.Process Owner
- CustomerBlog.Process Reviewer

19. Once completed, navigate to your process cloud home screen. Click on the ``Home`` button on the top navigation menu.

20. You can now see your deployed process application on the left hand side.

<img src="images/210-1-20.png" width="100%"/>

21. You can start your application bu clicking on the "CB" application icon.

(try out your application)

<img src="images/210-1-21.png" width="100%"/>

Next is to add this application to the cafe supremo microsite.


### 3.	Preparing your Site in Experience Cloud ###

Before we can run the process application in Cafe Supremo we will need to enable Cafe Supremo to be a secure site.

Login to CECS: 
<!-- ``https://documents-gseXXXXXXXX.documents.us2.oraclecloud.com/documents`` -->

>Note: Use bala.gupta user and the provided password to login

1. Navigate to `` Experience > Sites``. Make sure you're site is offline. A greyed-out checkbox should appear on the CafeSupremo site widget bottom corner.

<img src="images/210-3-1.png" width="50%"/>

>Note: If your site is not off-line, take your site off-line by clicking on the **GREEN** checkbox. Follow the instructions on the dialog window.

<img src="images/210-3-1a.png" width="25%"/>
<img src="images/210-3-1b.png" width="25%"/>

2. Select the **Cafe Supremo** widget and click on the ``Share`` menu button.

<img src="images/210-3-2.png" width="50%"/>

3. Select ``Site Security`` in the Share dialog window. Change the **Login Required** radio button to ``Yes`` and keep the default settings.

<img src="images/210-3-3.png" width="25%"/>

<img src="images/210-3-3c.png" width="25%"/>

4. Click ``DONE``

Now the cafe supremo site is set to require login.

5. Next, we take the site back online. Select cafe supremo site and click on ``Change Status``. Follow the instructions on the dialog window.

Next, we will edit the Cafe Supremo site, create a new page and place a process component into the page.

6. Select Cafe Supremo widget, click edit. Provide a name for the update, (eg. v1). A new browser tab will open with the sites builder interface.

<img src="images/210-3-6.png" width="50%"/>

<img src="images/210-3-6a.png" width="50%"/>

7. Click ``edit`` to switch to edit mode. Click on ``Add Page`` and fill out:

<img src="images/210-3-7a.png" width="100%"/>

<img src="images/210-3-7b.png" width="100%"/>

<img src="images/210-3-7c.png" width="100%"/>

- Page Name: CustomerBlog
- Page Layout: default.html

8. Click close (top right corner)

The empty newly created page will now appear.

9. Navigate to ``Add >> Components`` (Plus Icon) on the left. Scroll down to the **Process** section of the components menu and Drag&Drop the ``Process Start Form`` component to the drop area as shown illustrated below.

<img src="images/210-3-9.png" width="100%"/>

10. On the header of the componen click on the hamburger menu and select ``Settings``.

<img src="images/210-3-10.png" width="100%"/>

11. In the dialog window click ``Custom Settings``. A new dialog window will appear. 

12. For start forms select ``Production``. For start form select ``CustomerBlog:1.Form Approval Process:Submit request``

13. Check the following check boxes:

- Show submit confirmation
- Show Save button
- Show Discard button
- Show Attachements

<img src="images/210-3-13.png" width="100%"/>

14. Click on the (x) top right corner of the dialog box to close both dialog boxes.

15. The page will show the process form you've configured. Click on **SAVE** to save the changes.

16. Click on **Publish** to publish your updates. The site builder browser tab will be closed and you'll be taken back to Experience home page. 

<img src="images/210-3-16.png" width="100%"/>

### 4.	Run the Scenario  ### 

Now you are ready to check the results. 

1. Navigate to ``Experience >> Sites`` click on the CafeSupremo link in the CafeSupremo widget. The site will now be opened in a new browser tab. Navigate to the page you've created and fill out the form and submit.

<img src="images/210-4-1.png" width="100%"/>

<img src="images/210-4-2.png" width="100%"/>

2. To check the results, login to your process cloud.

<!-- ``https://process-gseXXXXXXX.process.us2.oraclecloud.com/bpm/workspace``-->

<!-- >Note: Use bala.gupta user and the provided password to login -->

<img src="images/210-4-2a.png" width="100%"/>

3. Click on ``Work on Tasks`` and select the most recent task that has been assigned to. 

4. Review if the information is correct, click **Approve**

### Congratulations you have completed the Lab! ###

---
[Back to CECS Cloud Test Drive Home](../README.md)
