function scheduleDeletion() {
  
  var label = GmailApp.getUserLabelByName("delete me")

  var daysToWait = new Date();
  daysToWait.setDate(daysToWait.getDate()- 1);

  //get unread mail older than a day and add 'delete me' label

  var unread = GmailApp.search('is:unread');

  for (var i = 0; i < unread.length; i++) {
    if(unread[i].getLastMessageDate() < daysToWait)
    {
      unread[i].addLabel(label);
    }
  }

}

function trashMail() {
  
  var expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate()- 2); //delete anything older than 2 days

//delete emails with the label 'delete me'
  var label = GmailApp.getUserLabelByName("delete me")

  var trash = label.getThreads();
  
  for (var i = 0; i < trash.length; i++) {
    if(trash[i].getLastMessageDate() < expiryDate)
    {
      trash[i].moveToTrash();
    }
  }
}
