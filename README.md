# [rocket.chat-addon-css-js](#)

External stylesheets and scripts for Rocket.Chat UI Improvements and Feature Add-Ons

> - Creator: Samagra Singh Tomar a.k.a. SST, [Mail](mailto:samagrasinghtomar2010@gmail.com)

## Warning !!

- The scripts and styles can potentially cause bugs or discomfort. Please test them thoroughly upon the use to protect the users.
- I do not assume any responsibility for damage done if any due to the use of the scripts and styles.

## What is this ??

I installed a self-hosted Rocket.Chat instance about 2 years ago for my team to collaborate. Although, I found the UI lacking and congested in some aspects. To fix this and to add several other enhancements and new features, I began using the admin panel to develop and inject stylesheets and scripts.

The latest stylesheet and scripts that I have deployed are available here for utilization by others if needed.

## What are the enhancements or new features ??

- Assign status to threads in a room and hide/show them based on status.
  - The feature was introduced into RC in newer versions but was not available when I first installed RC.
- Improved a somewhat congested default chat and markdown view to a beautiful and spacious appearance.
- Added dark theme and customized it a bit to force dark theme ( Yes !! Our team loves a dark theme. ).
  - Credits to @pbaity for creating the dark theme.
- Blocked the default feature to show large messages as expanded. Added feature to show large messages compressed with a button to collapse/expand message or simply scroll through the message in the collapsed container.
- Added a feature to encapsulate large code snippets into a single line element in chat, clicking on which opens the snippet in a popup with bonus features like download, save, etc.
  - Also created an extended code block MD syntax allowing to specify the code language and file name.
  - Code language can be later utilized to render syntactic snippets later.

**Before and After preview of chat room:**
![Before-After-UIImprovements-Rocket-Chat.png](https://i.ibb.co/QCmMMMk/Before-After-UIImprovements-Rocket-Chat.png)

**The code snippet popup:**
![Code-Snippet-Popup-Rocket-Chat.png](https://i.ibb.co/L65nvcF/Code-Snippet-Popup-Rocket-Chat.png)

## Pending tasks

I have some tasks planned for this project. I will get to them as soon as you can. If you'd like to help contribute by doing some of the tasks, feel free to submit a PR or contact me on my mail.

- Add instructions to use external CSS and JS in Rocket.Chat.
- Segregate files by feature to allow adding features individually.
- Detect code snippet size and show the first few lines.
- Configure the script to fetch the latest script and style from GH repo and inject them into the page.

## Farewell

Feel free to reach out to me in case of any queries or suggestions. ( Email provided at the top. )
