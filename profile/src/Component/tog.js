import React, { Component } from 'react'
import $ from 'jquery'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router-dom';
import Chatapi from './Chatapi';
import Aac from './Aac';

class Tog extends Component {

    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
    }
    handleToggle1 = () => {
        const el1 = findDOMNode(this.refs.toggle1);
        $(el1).slideToggle();
    }
    render() {
        $(function () {
            var INDEX = 0;
            $("#chat-submit").click(function (e) {
                e.preventDefault();
                var msg = $("#chat-input").val();
                if (msg.trim() == '') {
                    return false;
                }
                generate_message(msg, 'self');
                var buttons = [
                    {
                        name: 'Existing User',
                        value: 'existing'
                    },
                    {
                        name: 'New User',
                        value: 'new'
                    }
                ];
                setTimeout(function () {
                    generate_message(msg, 'user');
                }, 1000)

            })

            function generate_message(msg, type) {
                INDEX++;
                var str = "";
                str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
                str += "          <div class=\"cm-msg-text\">";
                str += msg;
                str += "          <\/div>";
                str += "        <\/div>";
                $(".chat-logs").append(str);
                $("#cm-msg-" + INDEX).hide().fadeIn(300);
                if (type == 'self') {
                    $("#chat-input").val('');
                }
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
            }

            function generate_button_message(msg, buttons) {
                /* Buttons should be object array 
                  [
                    {
                      name: 'Existing User',
                      value: 'existing'
                    },
                    {
                      name: 'New User',
                      value: 'new'
                    }
                  ]
                */
                INDEX++;
                var btn_obj = buttons.map(function (button) {
                    return "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\"" + button.value + "\">" + button.name + "<\/a><\/li>";
                }).join('');
                var str = "";
                str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg user\">";
                str += "          <div class=\"cm-msg-text\">";
                str += msg;
                str += "          <\/div>";
                str += "          <div class=\"cm-msg-button\">";
                str += "            <ul>";
                str += btn_obj;
                str += "            <\/ul>";
                str += "          <\/div>";
                str += "        <\/div>";
                $(".chat-logs").append(str);
                $("#cm-msg-" + INDEX).hide().fadeIn(300);
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
                $("#chat-input").attr("disabled", true);
            }

            $(document).delegate(".chat-btn", "click", function () {
                var value = $(this).attr("chat-value");
                var name = $(this).html();
                $("#chat-input").attr("disabled", false);
                generate_message(name, 'self');
            })

        })

        return (<>
        
            <div id="body">



                <div ref="toggle1" class="chat-box">
                    <div class="chat-box-header">
                        <Aac />
                        <span class="chat-box-toggle"><i onClick={this.handleToggle1} class="fas fa-times material-icons"></i></span>
                    </div>
                    <div class="chat-box-body">
                        <div class="chat-box-overlay">
                        </div>
                        <div class="chat-logs">

                        </div>
                    </div>
                    <div class="chat-input">
                        <form>
                            <input type="text" id="chat-input" placeholder="Send a message..." />
                            <button type="submit" class="chat-submit" id="chat-submit"><i class="fas fa-paper-plane material-icons"></i></button>
                        </form>
                    </div>
                </div>
            </div>


            <div>
                <div class="l_c_h">
                    <div onClick={this.handleToggle} class="c_h">
                        <div class="left_c">

                            <div class="left center_icons">
                                <i class="far fa-comment-alt ml-3"></i> <span className="ml-1">Chat</span>
                            </div>

                        </div>
                        <div class="right right_c" style={{ width: "35px" }}>
                            <a href="#" class="logout" title="End chat" name="" style={{ display: "none" }}></a>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div ref="toggle" class="chat_container" style={{ display: "none" }}>

                        <ul onClick={this.handleToggle1} class="list-group list-group-flush">

                            <Chatapi />

                        </ul>

                        <div class="chat_text_area" style={{ display: "none" }}>
                        </div>


                    </div>
                </div>
            </div>


        </>
        )
    }
}

export default Tog
