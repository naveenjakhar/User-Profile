import React from 'react'
import $ from "jquery";
const chat = () => {
    
   
    return (
        <div>
            <div class="l_c_h">
	<div class="c_h">
    	<div class="left_c">
        <div class="left right_c left_icons">
                   <a href="#" class="mini">+</a>
            </div> 
            <div class="left center_icons">
                 Live help!
            </div> 
               	
        </div>
        <div class="right right_c" style={{width:"35px"}}>
        	<a href="#" class="logout" title="End chat" name="" style={{display: "none"}}></a>        	
        </div>
        <div class="clear"></div>
    </div>
    <div class="chat_container" style={{display: "none"}}>
    <p class="no_provider">
         
        Operator Joined the Chat.
            </p>
    
	<div class="chat_message" style={{display: "none"}}>
    <input type="hidden" class="my_user" value="" />
    	    </div>
		<div class="chat_text_area" style={{display: "none"}}>
        	<textarea name="messag_send" class="messag_send" id="messag_send" placeholder="Enter Your Message and press CTRL"></textarea>
        </div>
    	<div class="chat_entry">
        	   <form name="chat_form" class="chat_form has-validation-callback" id="chat_form" onsubmit="return false;">
              <p>
                  <input type="text" data-validation="required" name="user_chat" id="user_chat" class="user_chat" placeholder="Enter Your Name"/>
                  <input type="hidden" name="id" class="id" value="4919738359" />
                  <input type="hidden" name="web" class="web" value="webaddress/"/>
              </p>
              <p>
                  <input type="text" data-validation="email" name="email_chat" id="email_chat" class="email_chat" placeholder="Enter Your Email"/>
              </p>
              <p>
                  <input type="text" data-validation="number" name="number_chat" id="number_chat" class="number_chat" placeholder="Enter Your Number"/>
              </p>
              <p >
                  <input type="submit" name="chat_submit" class="chat_submit" id="chat_submit" value="Start Chat" />
              </p>
            </form>
        </div>
    	
       
    </div>
</div>
        </div>
        
    )
}

export default chat
