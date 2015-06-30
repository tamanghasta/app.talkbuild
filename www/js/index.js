/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//doesn't block the load event
function createIframe() {
    var i = document.createElement("iframe");
    i.src = "http://uat.talk.build/?mobile=1";
    i.scrolling = "auto";
    i.frameborder = "0";
    i.width = "100%";
    i.height = "100%";
    document.getElementById("frameContainer").appendChild(i);
};

// Check for browser support of event handling capability
if (window.addEventListener) window.addEventListener("load", createIframe, false);
else if (window.attachEvent) window.attachEvent("onload", createIframe);
else window.onload = createIframe;