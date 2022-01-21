# Gmail_Inbox_Cleaner
Clean your inbox with Google Apps Script

Discovered Google Apps Script and quickly decided to automate clean up of my inbox.
If a message goes a day unread, chances are I don't need it and will never open it.
Script runs in Google's own scripting environment on a daily schedule. 

There are two parts here:

First function schedules emails to be deleted fulfilling the critera (older than 1 day unread) assigns them with 'delete me' label

Second function iterates through the mails already in the 'delete me' category and moves to trash anything residing in there older than 2 days.

We still have a grace period by which to save the email from permenant extinction.
