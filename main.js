function validateform() {
  let err = [];
  var storedata = {fullname:'',email:'',message:''};
  let firstname = document.formval.fname;
  let maile = document.formval.email;
  let message = document.formval.msg;
  

  //email validation
  let atpos=maile.value.indexOf("@");
  let dotpos=maile.value.lastIndexOf(".");


if(firstname.value=='' && maile.value=='' && message.value=='')
{
  err.push("full name is missing","email is missing","message is missing");
  console.log(err);
}
else
{
//for first name
if(firstname.value!='')
{
  storedata.fname=firstname.value;
  if(message.value=='' && maile.value=='')
  {
  err.push("email is missing","message is missing");
   console.log(err);
  }
 
}

//for email
if(maile.value!='')
{
  
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=maile.length)
    {
      err.push("incorrect email syntax");
      console.log(err);
    }
    else
    {
        storedata.email=maile.value;
        
    }
}


//for message and all filled data
if(message.value!='')
{
  
  if(firstname.value=='' && maile.value=='')
  {
    err.push("full name is missing","email is missing");
    console.log(err);
    storedata.msg=message.value;
  }
  else
  {
    storedata.fullname=firstname.value;
    storedata.email=maile.value;
    storedata.message=message.value;
    console.log(storedata);
  }
  
}
//else close
}
//function close
}

        
