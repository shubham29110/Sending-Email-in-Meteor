import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL="smtp://shubham.tiwari2911%40gmail.com:9179019108123@smtp.gmail.com:587"
  Accounts.emailTemplates.form="no-reply@yourdomain.com";
  Accounts.emailTemplates.siteName="My Site";
  Accounts.emailTemplates.verifyEmail.subject=function(user){
        return "confirm your email address"
  };
  Accounts.emailTemplates.verifyEmail.text=function(user,url){
    return "Click on the follwing link to verify your email"+url
  }
  Accounts.config({
    sendVerificationEmail:true
  })

  Meteor.methods({
    "sendEmail":function(to,subject,text){
      this.unblock();
      Email.send({
        to:address,
        from:"no-reply@yourdomain.com",
        subject:subject,
        text:text
      })
    }
  })
});

