import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.email.events({
  "submit #email-form":function(e,t){
      e.preventDefault();
      var address=t.find("#input-email").value;
      var subject=t.find("#input-subject").value;
      var message=t.find("#input-message").value;
      Meteor.call('sendEmail',address,subject,message)
  }
})




